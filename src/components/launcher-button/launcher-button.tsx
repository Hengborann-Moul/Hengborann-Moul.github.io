'use client';

import { useState, useEffect } from 'react';
import AppLauncher from '@/components/app-launcher/app-launcher';
import { Command } from 'lucide-react';
import styles from '@/app/page.module.css';

export default function LauncherButton() {
  const [launcherOpen, setLauncherOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setLauncherOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button
        className={styles.launcherBtn}
        onClick={() => setLauncherOpen(true)}
      >
        <Command size={16} />
        <span>Open App Launcher</span>
        <kbd className={styles.kbd}>⌘K</kbd>
      </button>

      <AppLauncher isOpen={launcherOpen} onClose={() => setLauncherOpen(false)} />
    </>
  );
}
