'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Database,
  Search,
  X,
  ArrowLeft,
  ChevronRight,
  Copy,
  Check,
  Tag,
  Globe,
  Layers,
} from 'lucide-react';
import { toolsData, Tool } from './tools-data';
import styles from './page.module.css';

export default function DataToolsPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = useMemo(() => {
    const map = new Map<string, number>();
    toolsData.forEach((t) => {
      map.set(t.category, (map.get(t.category) || 0) + 1);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  const filteredTools = useMemo(() => {
    let result = toolsData;
    if (activeCategory !== 'All') {
      result = result.filter((t) => t.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, query]);

  const handleCopyLink = useCallback(async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTool(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.dotGrid} />

      <div className={styles.content}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={18} />
            <span>Back</span>
          </Link>
          <div className={styles.logo}>
            <Database size={20} className={styles.logoIcon} />
            <h1 className={styles.title}>Data Tools</h1>
          </div>
          <div style={{ width: 80 }} />
        </header>

        <div className={styles.searchBar}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search tools by name, description, or category..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
          />
          {query && (
            <button
              className={styles.clearBtn}
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className={styles.resultsCount}>
          Showing <strong>{filteredTools.length}</strong> of {toolsData.length} tools
        </div>

        <div className={styles.mainLayout}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <Layers size={16} />
              <span>Categories</span>
            </div>
            <nav className={styles.categoryList}>
              <button
                className={`${styles.categoryBtn} ${activeCategory === 'All' ? styles.categoryActive : ''}`}
                onClick={() => setActiveCategory('All')}
              >
                <span>All</span>
                <span className={styles.categoryCount}>{toolsData.length}</span>
              </button>
              {categories.map(([cat, count]) => (
                <button
                  key={cat}
                  className={`${styles.categoryBtn} ${activeCategory === cat ? styles.categoryActive : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span>{cat}</span>
                  <span className={styles.categoryCount}>{count}</span>
                </button>
              ))}
            </nav>
          </aside>

          <main className={styles.grid}>
            <AnimatePresence mode="popLayout">
              {filteredTools.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={styles.emptyState}
                >
                  <Search size={40} className={styles.emptyIcon} />
                  <h3>No tools found</h3>
                  <p>Try adjusting your search or category filter.</p>
                </motion.div>
              ) : (
                filteredTools.map((tool, i) => (
                  <motion.article
                    key={tool.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: Math.min(i * 0.03, 0.5) }}
                    className={styles.card}
                    onClick={() => setSelectedTool(tool)}
                  >
                    <div className={styles.cardTop}>
                      <div className={styles.cardIconWrap}>
                        <img
                          src={tool.icon}
                          alt=""
                          className={styles.cardIcon}
                          loading="lazy"
                        />
                      </div>
                      <div className={styles.cardHeader}>
                        <h3 className={styles.cardName}>{tool.name}</h3>
                        <ChevronRight size={16} className={styles.cardArrow} />
                      </div>
                    </div>
                    <span className={styles.cardCategory}>{tool.category}</span>
                    <p className={styles.cardDesc}>{tool.description}</p>
                  </motion.article>
                ))
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>

      <AnimatePresence>
        {selectedTool && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTool(null)}
            />
            <motion.aside
              className={styles.detailPanel}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <button
                className={styles.closePanelBtn}
                onClick={() => setSelectedTool(null)}
                aria-label="Close panel"
              >
                <X size={20} />
              </button>

              <div className={styles.detailContent}>
                <div className={styles.detailIconWrap}>
                  <img
                    src={selectedTool.icon}
                    alt=""
                    className={styles.detailIcon}
                  />
                </div>
                <span className={styles.detailCategory}>
                  <Tag size={12} />
                  {selectedTool.category}
                </span>
                <h2 className={styles.detailName}>{selectedTool.name}</h2>
                <p className={styles.detailDesc}>{selectedTool.description}</p>

                <div className={styles.detailActions}>
                  <a
                    href={selectedTool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryBtn}
                  >
                    <Globe size={16} />
                    Visit Website
                  </a>
                  <button
                    className={styles.secondaryBtn}
                    onClick={() => handleCopyLink(selectedTool.url)}
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? 'Copied!' : 'Copy Link'}
                  </button>
                </div>

                <div className={styles.detailMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>URL</span>
                    <span className={styles.metaValue}>{selectedTool.url}</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
