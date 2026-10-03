"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ShieldCheck, Sparkles, BriefcaseBusiness, Blocks, Layers3, FileText, Check, GitCompareArrows, X, PackageOpen, Eye, SlidersHorizontal, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { products, niches, bundles, type Product, type Bundle, money } from "@/lib/catalog";
const icons = [Layers3, ShieldCheck, Sparkles, BriefcaseBusiness, Blocks];
const total = (bundle: Bundle) => bundle.products.reduce((sum, id) => sum + products.find(p => p.id === id)!.price, 0);
const compareRows: [string, (p: Product) => string][] = [["The job it helps with", p => p.solve], ["Designed for", p => p.audience], ["Planned contents", p => p.contents.join(" · ")], ["Proposed formats", p => p.formats.join(" + ")], ["Setup needed", p => p.setup], ["Proposed price (not for sale)", p => `${money(p.price)} USD`]];

export default function Home() {
  const dialogOrigin = useRef<HTMLElement | null>(null);
  const dockRef = useRef<HTMLDivElement | null>(null);
  function rememberDialogOrigin() { dialogOrigin.current = document.activeElement as HTMLElement; }
  function restoreDialogFocus(event: Event) {
    event.preventDefault();
    requestAnimationFrame(() => {
      if (document.querySelector('[role="dialog"]')) return;
      const origin = dialogOrigin.current;
      if (origin?.isConnected && !origin.matches(':disabled')) origin.focus();
      else (document.querySelector<HTMLButtonElement>('.clear-btn') ?? document.querySelector<HTMLElement>('#catalog'))?.focus();
    });
  }
  const [niche, setNiche] = useState("all");
  const [query, setQuery] = useState("");
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showAllBundles, setShowAllBundles] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [detail, setDetail] = useState<Product | null>(null);
  const [bundle, setBundle] = useState<Bundle | null>(null);
  const [compareOpen, setCompareOpen] = useState(false);
  const hasSelection = selected.length > 0;
  useEffect(() => {
    const dock = dockRef.current;
    if (!hasSelection || !dock) return;
    const updateSpace = () => document.documentElement.style.setProperty('--compare-space', `${dock.getBoundingClientRect().height + 44}px`);
    updateSpace();
    const observer = new ResizeObserver(updateSpace);
    observer.observe(dock);
    return () => { observer.disconnect(); document.documentElement.style.removeProperty('--compare-space'); };
  }, [hasSelection]);
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const matchesSearch = (p: Product) => {
    const text = [p.name, p.solve, p.audience, p.setup, ...p.contents, ...p.formats, niches.find(n => n.id === p.niche)?.label].join(" ").toLowerCase();
    return terms.every(term => text.includes(term));
  };
  const visible = products.filter(p => (niche === "all" || p.niche === niche) && matchesSearch(p));
  const displayed = niche !== "all" || terms.length > 0 || showAllProducts ? visible : visible.slice(0, 3);
  function resetFilters() { setNiche("all"); setQuery(""); searchRef.current?.focus(); }
  function removeSelection(id: string) {
    toggle(id);
    requestAnimationFrame(() => (document.querySelector<HTMLButtonElement>('.clear-btn') ?? document.querySelector<HTMLElement>('#catalog'))?.focus());
  }
  const compared = products.filter(p => selected.includes(p.id));
  const relevantBundles = bundles.filter(b => niche === "all" || b.niche === niche || b.niche === "all");
  const displayedBundles = showAllBundles ? relevantBundles : relevantBundles.slice(0, 2);
  function toggle(id: string) { setSelected(current => current.includes(id) ? current.filter(x => x !== id) : current.length < 3 ? [...current, id] : current); }
  useEffect(() => {
    const context = (document as Document & { modelContext?: { registerTool: (tool: unknown, options: { signal: AbortSignal }) => unknown } }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    try { Promise.resolve(context.registerTool({ name: "browse_toolkit_niche", title: "Browse a toolkit niche", description: "Filter the visible concept catalog by niche. Prices and contents are proposals; no purchase occurs.", inputSchema: { type: "object", properties: { niche: { type: "string", enum: niches.map(n => n.id) } }, required: ["niche"], additionalProperties: false }, annotations: { readOnlyHint: false, untrustedContentHint: false }, execute: async (input: unknown) => {
      if (typeof input !== "object" || !input || Array.isArray(input)) throw new Error("Choose a valid niche.");
      const value = input as { niche?: string };
      if (!niches.some(n => n.id === value.niche) || Object.keys(value).some(k => k !== "niche")) throw new Error("Choose a valid niche.");
      setNiche(value.niche!);
      setQuery("");
      await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
      return { niche: value.niche, products: products.filter(p => value.niche === "all" || p.niche === value.niche).map(p => ({ id: p.id, name: p.name, placeholderPriceUSD: p.price })) };
    } }, { signal: lifecycle.signal })).catch(() => {}); } catch {}
    return () => lifecycle.abort();
  }, []);
  return <>
    <a className="skip-link" href="#catalog">Skip to catalog</a>
    <header className="site-header" id="top"><div className="shell header-inner"><div className="brand-lockup"><a href="#top" className="brand" aria-label="CAB Synergy home"><Image className="brand-logo" src="/images/cab-synergy-logo.png" width={1053} height={276} alt="CAB Synergy" priority /></a><p className="brand-tagline">CYBERSECURITY · AI · BUSINESS OPERATIONS</p></div><nav aria-label="Main navigation"><a href="#catalog">Toolkits</a><a href="#bundles">Bundles</a><a href="#approach">How it works</a><a href="#availability">Availability</a></nav><span className="concept-badge"><Eye size={15} /> Concept storefront</span></div></header>
    <main>
      <section className="hero-section" aria-labelledby="main-title">
        <div className="hero-copy shell">
          <h1 id="main-title" aria-label="Streamline Operations, Strengthen Security, and Work Smarter.">
            <span className="hero-title-part">Streamline Operations <ArrowRight className="hero-title-arrow" aria-hidden="true" /></span>
            <span className="hero-title-part">Strengthen Security <ArrowRight className="hero-title-arrow" aria-hidden="true" /></span>
            <span className="hero-title-part">Work Smarter.</span>
          </h1>
          <p className="intro-description">Practical toolkits for safer technology and smoother work.</p>
          <div className="hero-actions">
            <a className="hero-primary" href="#catalog">Explore Toolkits <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="hero-secondary" href="#compare-selection">Compare toolkits</a>
          </div>
        </div>
        <div className="hero-artwork">
          <picture>
            <source type="image/webp" srcSet="/images/workstack-story-page-bg-480.webp 480w, /images/workstack-story-page-bg-960.webp 960w, /images/workstack-story-page-bg-1360.webp 1360w, /images/workstack-story-page-bg-1672.webp 1672w" sizes="100vw" />
            <img src="/images/workstack-story-page-bg.png" width="1672" height="941" alt="Digital toolkits connected through an AI assistant to cybersecurity, AI, and organized business workflows." fetchPriority="high" loading="eager" decoding="async" />
          </picture>
        </div>
      </section>
      <section className="catalog-section shell" id="catalog" tabIndex={-1} aria-labelledby="catalog-title"><div className="section-heading"><div><p className="eyebrow">THE TOOLKIT CATALOG</p><h2 id="catalog-title">Good work starts here.</h2></div><span className="section-meta">{products.length} proposed products <span aria-hidden="true">/</span> {niches.length - 1} niches</span></div>
        <p className="catalog-readiness" role="status"><Eye size={16} aria-hidden="true" /> These are product concepts, not available for purchase. Listed prices and contents are proposals.</p>
        <div className="catalog-search"><label htmlFor="tool-search">Find a toolkit for your task</label><div><input ref={searchRef} id="tool-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try threat modeling, AI pilot, or handoff" aria-describedby="search-help" />{query && <button onClick={() => { setQuery(""); searchRef.current?.focus(); }}>Clear search</button>}</div><p id="search-help">Search names, tasks, audiences, formats, and planned contents within the selected category.</p></div>
        <div role="group" className="filter-list" aria-label="Filter products by niche">{niches.map((n, i) => { const Icon = icons[i]; return <button key={n.id} className={`filter ${niche === n.id ? "filter-active" : ""}`} aria-pressed={niche === n.id} onClick={() => setNiche(n.id)}><Icon size={17} /><span>{n.label}</span><span className="filter-count">{n.id === "all" ? products.length : products.filter(p => p.niche === n.id).length}</span></button>; })}</div>
        <div className="catalog-status"><p><SlidersHorizontal size={15} /><span aria-live="polite">{displayed.length === visible.length ? `${visible.length} matching tools` : `${displayed.length} of ${visible.length} matching tools shown`} {niche === "all" ? "across all collections" : `in ${niches.find(n => n.id === niche)?.label}`}</span></p><p className="price-note">All prices are USD placeholders</p></div>
        {visible.length === 0 && <div className="empty-results"><h3>No matching toolkits</h3><p>Try a broader task or a different category.</p><button className="preview-btn" onClick={resetFilters}>Reset search and categories</button></div>}
        <p className="compare-instructions" id="compare-selection">Select up to 3 toolkits below using “Compare this tool.” When you’re ready, choose “Compare tools” in the bar that appears.</p>
        <div className="product-grid" role="group" aria-label="Select toolkits to compare" aria-describedby="compare-selection">{displayed.map(p => { const ni = niches.findIndex(n => n.id === p.niche); const Icon = icons[ni]; const chosen = selected.includes(p.id); return <article className={`product-card ${chosen ? "is-selected" : ""}`} key={p.id}><div className={`product-cover tone-${p.niche}`}><div className="cover-top"><span className="cover-icon"><Icon size={21} /></span><span className="cover-type">{p.type}</span></div><div className="cover-file"><FileText size={15} /><span>{p.file}</span><span className="file-extension">{p.formats[0]}</span></div></div><div className="product-body"><p className={`category-label text-${p.niche}`}>{niches[ni].label}</p><h3>{p.name}</h3><p className="product-description">{p.solve}</p><p className="product-audience"><strong>Designed for:</strong> {p.audience}</p><p className="product-includes"><strong>Planned contents:</strong> {p.contents.slice(0, 2).join(" · ")}{p.contents.length > 2 && <span> · +{p.contents.length - 2} more in preview</span>}</p><div className="product-formats"><span>{p.formats.join(" + ")}</span></div><div className="product-action"><div className="price"><b>{money(p.price)}</b><span className="price-status">Proposed · not for sale</span></div><button className="preview-btn" onClick={() => { rememberDialogOrigin(); setDetail(p); }} aria-label={`View illustrative concept preview for ${p.name}`}>View concept preview</button></div></div><div className="card-compare"><Checkbox id={`compare-${p.id}`} checked={chosen} disabled={!chosen && selected.length === 3} onCheckedChange={() => toggle(p.id)} aria-label={`Compare ${p.name}`} /><label htmlFor={`compare-${p.id}`}>Compare this tool</label></div></article>; })}</div>
        {niche === "all" && terms.length === 0 && visible.length > 3 && <button className="catalog-more" onClick={() => setShowAllProducts(current => !current)}>{showAllProducts ? "Show fewer toolkits" : `Show all ${visible.length} toolkits`}</button>}
        <p className="catalog-footnote">In development · Prices are placeholders · Checkout isn’t available.</p>
      </section>
      <section className="bundle-section shell" id="bundles" aria-labelledby="bundle-title"><div className="section-heading"><div><p className="eyebrow">BETTER TOGETHER</p><h2 id="bundle-title">Choose a bundle for the next step.</h2></div><p className="section-meta">Pair related toolkits into a single workflow.</p></div><p className="bundle-readiness">Bundle prices and contents are also proposals; bundles are not available to buy yet.</p><div className="bundle-grid">{displayedBundles.map(b => <article className={`bundle-card ${b.niche === "all" ? "complete-bundle" : ""}`} key={b.id}><div className="bundle-top"><PackageOpen size={23} /><span>{b.niche === "all" ? "COMPLETE COLLECTION" : "NICHE BUNDLE"}</span></div><h3>{b.name}</h3><p>{b.description}</p><ul className="bundle-tool-names">{b.products.map(id => <li key={id}>{products.find(p => p.id === id)!.name}</li>)}</ul><div className="bundle-includes">{b.products.length} tools <span aria-hidden="true">·</span> {b.products.reduce((s, id) => s + products.find(p => p.id === id)!.contents.length, 0)} planned resources</div><div className="bundle-bottom"><div className="price"><b>{money(b.price)}</b><span className="price-status">Proposed · not for sale</span></div><button className="bundle-btn" onClick={() => { rememberDialogOrigin(); setBundle(b); }} aria-label={`View ${b.name} contents`}>View contents</button></div><p className="individual-price">Proposed individual-tool total: {money(total(b))}</p></article>)}</div>{relevantBundles.length > 2 && <button className="catalog-more bundle-more" onClick={() => setShowAllBundles(current => !current)}>{showAllBundles ? "Show fewer bundles" : `Show all ${relevantBundles.length} bundles`}</button>}</section>
      <section className="comparison-intro shell" id="comparison" aria-labelledby="comparison-title"><div><p className="eyebrow">SOLUTION COMPARISON</p><h2 id="comparison-title">Compare tools by purpose and fit.</h2></div><p>Explore cybersecurity, AI, and business operations resources side by side.</p></section>
      <section className="approach-section shell" id="approach" aria-labelledby="approach-title"><p className="eyebrow">EXPLORE THE CONCEPT</p><h2 id="approach-title">How to explore the proposed toolkits</h2><div className="approach-steps">{[["01", "Browse by task", "See which proposed toolkit may fit the work you need to do."], ["02", "Compare concepts", "Review planned contents, audiences, and limitations side by side."], ["03", "Check availability", "Products are still in development; nothing is available to buy or download."]].map(([num, name, desc]) => <div key={num}><span className="step-number">{num}</span><div><h3>{name}</h3><p>{desc}</p></div></div>)}</div></section>
      <section className="availability-section shell" id="availability" aria-labelledby="availability-title"><p className="eyebrow">BEFORE YOU PLAN A PURCHASE</p><h2 id="availability-title">Availability</h2><p className="availability-status">In development · Placeholder pricing · No checkout or downloads yet.</p><details className="availability-details"><summary>Read availability and policy details</summary><div><p>CAB Synergy is a proposed digital toolkit business. Every listed product, bundle, price, format, and sample is a placeholder for review. Plugins are concepts, with no confirmed platform or live integration.</p><p>Release dates, final deliverables, compatibility, licensing, refunds, support, updates, and privacy and purchase terms are not yet finalized.</p><p>These proposed resources do not promise security, compliance, or business outcomes.</p></div></details></section>
    </main>
    <footer className="site-footer"><div className="shell footer-inner"><a href="#top" className="brand" aria-label="CAB Synergy home"><Image className="brand-logo" src="/images/cab-synergy-logo.png" width={1053} height={276} alt="CAB Synergy" /></a><p>CAB Synergy · Proposed catalog and pricing · No checkout</p><a href="#catalog">Back to catalog</a></div></footer>
    {selected.length > 0 && <div ref={dockRef} className="compare-dock" role="region" aria-label="Selected tools for comparison"><div className="dock-title"><GitCompareArrows size={20} /><div><strong>{selected.length} of 3 tools selected</strong><span>{selected.length < 2 ? "Select one more tool to compare" : selected.length === 3 ? "Limit reached. Remove a tool to choose another." : "Ready to compare. Add one more if you like."}</span></div></div><div className="dock-chips">{compared.map(p => <button key={p.id} onClick={() => removeSelection(p.id)} title={p.name} aria-label={`Remove ${p.name} from comparison`}><span>{p.name}</span><X size={14} /></button>)}</div><button className="clear-btn" onClick={() => { setSelected([]); requestAnimationFrame(() => document.querySelector<HTMLElement>("#catalog")?.focus()); }}>Clear</button><button className="compare-btn" disabled={selected.length < 2} onClick={() => { rememberDialogOrigin(); setCompareOpen(true); }}>Compare tools</button><span className="sr-only" aria-live="polite">{selected.length} tools selected. {selected.length === 3 ? "Maximum reached. Remove a tool to choose another." : ""}</span></div>}
    <Dialog open={!!detail} onOpenChange={open => { if (!open) setDetail(null); }}><DialogContent onCloseAutoFocus={restoreDialogFocus} className="tool-dialog">{detail && <><p className="eyebrow">ILLUSTRATIVE CONCEPT PREVIEW / {niches.find(n => n.id === detail.niche)?.label}</p><DialogTitle className="modal-title">{detail.name}</DialogTitle><DialogDescription className="modal-description">{detail.solve}</DialogDescription><div className="detail-summary"><div><span>Designed for</span><b>{detail.audience}</b></div><div><span>Proposed formats</span><b>{detail.formats.join(" / ")}</b></div><div><span>Proposed price · not for sale</span><b>{money(detail.price)} USD</b></div></div><h3 className="modal-heading">Setup and compatibility</h3><p className="setup-note">{detail.setup}</p><h3 className="modal-heading">What’s planned inside</h3><ul className="contents-list">{detail.contents.map(c => <li key={c}><Check size={16} />{c}</li>)}</ul><div className="sample-preview"><div className="sample-header"><FileText size={16} /><span>Illustrative on-page example · concept only</span><span>Proposed filename: {detail.file}</span></div>{detail.sample.map(([label, value]) => <div className="sample-row" key={label}><span>{label}</span><b>{value}</b></div>)}</div><p className="modal-note">This on-page illustration is not a downloadable sample or product. Final files, compatibility, licensing, and price will be confirmed before any sale.</p></>}</DialogContent></Dialog>
    <Dialog open={!!bundle} onOpenChange={open => { if (!open) setBundle(null); }}><DialogContent onCloseAutoFocus={restoreDialogFocus} className="tool-dialog">{bundle && <><p className="eyebrow">BUNDLE CONCEPT / PROPOSED CONTENTS</p><DialogTitle className="modal-title">{bundle.name}</DialogTitle><DialogDescription className="modal-description">{bundle.description}</DialogDescription><div className="bundle-price-summary"><div className="price"><b>{money(bundle.price)}</b><span>Proposed price · not for sale</span></div><p>Proposed individual-tool total<br /><strong>{money(total(bundle))}</strong></p></div><div className="bundle-content-list">{bundle.products.map(id => { const p = products.find(p => p.id === id)!; return <div key={id}><div><h3>{p.name}</h3><p>{p.contents.length} planned resources · {p.formats.join(" + ")}</p></div><button onClick={() => { setBundle(null); setDetail(p); }} aria-label={`View concept preview for ${p.name} from bundle`}>Preview</button></div>; })}</div><p className="modal-note">This bundle and its contents are proposals, not products available to purchase or download.</p></>}</DialogContent></Dialog>
    <Dialog open={compareOpen} onOpenChange={setCompareOpen}><DialogContent onCloseAutoFocus={restoreDialogFocus} className="compare-dialog"><p className="eyebrow">SIDE-BY-SIDE</p><DialogTitle className="modal-title">Find the right fit.</DialogTitle><DialogDescription className="modal-description">Compare the job, audience, and proposed resources. Prices are proposals, not offers for sale.</DialogDescription><p className="comparison-hint" id="comparison-help">On smaller screens, scroll sideways to see all selected tools. Keyboard users can focus the table area and use the arrow keys.</p><div className="comparison-scroll" role="region" aria-label="Toolkit comparison table" aria-describedby="comparison-help" tabIndex={0}><Table className="comparison-table"><TableHeader><TableRow><TableHead scope="col">What matters</TableHead>{compared.map(p => <TableHead scope="col" key={p.id}>{p.name}<button className="comparison-remove" aria-label={`Remove ${p.name}`} onClick={() => { toggle(p.id); if (selected.length <= 2) setCompareOpen(false); }}><X size={14} /></button></TableHead>)}</TableRow></TableHeader><TableBody>{compareRows.map(([label, getter]) => <TableRow key={label}><TableHead scope="row">{label}</TableHead>{compared.map(p => <TableCell key={p.id}>{getter(p)}</TableCell>)}</TableRow>)}</TableBody></Table></div><p className="modal-note">Contents are proposals. No performance, compliance, or customer results are claimed.</p></DialogContent></Dialog>
  </>;
}
