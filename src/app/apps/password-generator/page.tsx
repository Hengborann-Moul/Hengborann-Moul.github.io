'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Copy,
  RefreshCw,
  Check,
  ArrowLeft,
  Shield,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
} from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

const CHAR_SETS = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
};

type StrengthLevel = 'weak' | 'fair' | 'good' | 'strong';

interface PasswordHistoryItem {
  password: string;
  timestamp: number;
}

function calculateStrength(password: string): StrengthLevel {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (score <= 2) return 'weak';
  if (score <= 3) return 'fair';
  if (score <= 4) return 'good';
  return 'strong';
}

function generatePassword(
  length: number,
  options: Record<string, boolean>
): string {
  let charset = '';
  if (options.lowercase) charset += CHAR_SETS.lowercase;
  if (options.uppercase) charset += CHAR_SETS.uppercase;
  if (options.numbers) charset += CHAR_SETS.numbers;
  if (options.symbols) charset += CHAR_SETS.symbols;

  if (!charset) return '';

  let password = '';
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);

  for (let i = 0; i < length; i++) {
    password += charset[array[i] % charset.length];
  }

  return password;
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
  });
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<PasswordHistoryItem[]>([]);

  const strength = calculateStrength(password);

  const regenerate = useCallback(() => {
    const newPass = generatePassword(length, options);
    setPassword(newPass);
    if (newPass) {
      setHistory((prev) => [
        { password: newPass, timestamp: Date.now() },
        ...prev.slice(0, 4),
      ]);
    }
  }, [length, options]);

  useEffect(() => {
    regenerate();
  }, [length, options, regenerate]);

  const handleCopy = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const toggleOption = (key: string) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const strengthConfig: Record<
    StrengthLevel,
    { label: string; color: string; Icon: React.ElementType }
  > = {
    weak: { label: 'Weak', color: '#ef4444', Icon: ShieldX },
    fair: { label: 'Fair', color: '#f59e0b', Icon: ShieldAlert },
    good: { label: 'Good', color: '#3b82f6', Icon: ShieldCheck },
    strong: { label: 'Strong', color: '#00f0c8', Icon: ShieldCheck },
  };

  const { label, color, Icon: StrengthIcon } = strengthConfig[strength];

  return (
    <div className={styles.container}>
      <div className={styles.background} />

      <div className={styles.content}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={18} />
            <span>Back</span>
          </Link>
          <div className={styles.logo}>
            <Shield size={20} className={styles.logoIcon} />
            <h1 className={styles.title}>Password Generator</h1>
          </div>
          <div style={{ width: 80 }} />
        </header>

        <main className={styles.main}>
          <div className={styles.card}>
            <div className={styles.passwordDisplay}>
              <code className={styles.passwordText}>{password}</code>
              <button
                className={styles.copyBtn}
                onClick={handleCopy}
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check size={18} style={{ color: '#00f0c8' }} />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>

            <div className={styles.strengthBar}>
              <div
                className={styles.strengthFill}
                style={{
                  width:
                    strength === 'weak'
                      ? '25%'
                      : strength === 'fair'
                      ? '50%'
                      : strength === 'good'
                      ? '75%'
                      : '100%',
                  background: color,
                }}
              />
            </div>

            <div className={styles.strengthLabel}>
              <StrengthIcon size={14} style={{ color }} />
              <span style={{ color }}>{label}</span>
            </div>

            <div className={styles.controls}>
              <div className={styles.lengthControl}>
                <div className={styles.lengthHeader}>
                  <label className={styles.controlLabel}>Length</label>
                  <span className={styles.lengthValue}>{length}</span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={64}
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className={styles.slider}
                />
                <div className={styles.sliderLabels}>
                  <span>6</span>
                  <span>64</span>
                </div>
              </div>

              <div className={styles.optionsGrid}>
                {Object.entries({
                  uppercase: 'Uppercase (A-Z)',
                  lowercase: 'Lowercase (a-z)',
                  numbers: 'Numbers (0-9)',
                  symbols: 'Symbols (!@#...)',
                }).map(([key, label]) => (
                  <button
                    key={key}
                    className={`${styles.optionBtn} ${
                      options[key as keyof typeof options] ? styles.optionActive : ''
                    }`}
                    onClick={() => toggleOption(key)}
                  >
                    <div
                      className={styles.optionCheck}
                      style={{
                        background: options[key as keyof typeof options]
                          ? '#00f0c8'
                          : 'transparent',
                        borderColor: options[key as keyof typeof options]
                          ? '#00f0c8'
                          : 'rgba(255,255,255,0.15)',
                      }}
                    >
                      {options[key as keyof typeof options] && (
                        <Check size={10} color="#0a0a0f" strokeWidth={3} />
                      )}
                    </div>
                    <span className={styles.optionLabel}>{label}</span>
                  </button>
                ))}
              </div>

              <button className={styles.generateBtn} onClick={regenerate}>
                <RefreshCw size={18} />
                Generate New Password
              </button>
            </div>
          </div>

          {history.length > 0 && (
            <div className={styles.historyCard}>
              <h3 className={styles.historyTitle}>Recent Passwords</h3>
              <div className={styles.historyList}>
                {history.map((item, i) => (
                  <div key={`${item.timestamp}-${i}`} className={styles.historyItem}>
                    <code className={styles.historyPassword}>{item.password}</code>
                    <button
                      className={styles.historyCopyBtn}
                      onClick={async () => {
                        await navigator.clipboard.writeText(item.password);
                      }}
                      title="Copy"
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        <footer className={styles.footer}>
          <p>Securely generated in your browser. Nothing is sent to a server.</p>
        </footer>
      </div>
    </div>
  );
}
