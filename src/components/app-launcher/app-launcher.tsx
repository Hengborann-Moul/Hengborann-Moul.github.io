'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, KeyRound, ArrowUp, ArrowDown, CornerDownLeft } from 'lucide-react';
import { appsRegistry, AppItem } from './apps-data';
import styles from './launcher.module.css';

const iconMap: Record<string, React.ElementType> = {
  KeyRound,
};

interface AppLauncherProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppLauncher({ isOpen, onClose }: AppLauncherProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filteredApps = useMemo(() => {
    if (!query.trim()) return appsRegistry;
    const q = query.toLowerCase();
    return appsRegistry.filter(
      (app) =>
        app.name.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q) ||
        app.category.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelect = useCallback(
    (app: AppItem) => {
      router.push(app.route);
      onClose();
    },
    [router, onClose]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex((prev) =>
            prev < filteredApps.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredApps[activeIndex]) {
            handleSelect(filteredApps[activeIndex]);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredApps, activeIndex, onClose, handleSelect]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.launcherOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.launcherContainer}>
        <div className={styles.searchWrapper}>
          <Search size={18} className={styles.searchIcon} />
          <input
            ref={inputRef}
            type="text"
            className={styles.searchInput}
            placeholder="Search apps..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className={styles.shortcutHint}>ESC</span>
        </div>

        <div className={styles.resultsList}>
          {filteredApps.length === 0 ? (
            <div className={styles.emptyState}>No apps found</div>
          ) : (
            filteredApps.map((app, index) => {
              const IconComponent = iconMap[app.icon] || Search;
              return (
                <div
                  key={app.id}
                  className={`${styles.resultItem} ${
                    index === activeIndex ? styles.active : ''
                  }`}
                  onClick={() => handleSelect(app)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className={styles.iconWrapper}>
                    <IconComponent size={18} />
                  </div>
                  <div className={styles.resultInfo}>
                    <p className={styles.resultName}>{app.name}</p>
                    <p className={styles.resultDescription}>{app.description}</p>
                  </div>
                  <span className={styles.resultCategory}>{app.category}</span>
                </div>
              );
            })
          )}
        </div>

        <div className={styles.footer}>
          <span>
            <ArrowUp size={10} /> <ArrowDown size={10} /> Navigate
          </span>
          <span>
            <CornerDownLeft size={10} /> Select
          </span>
          <span>ESC Close</span>
        </div>
      </div>
    </div>
  );
}
