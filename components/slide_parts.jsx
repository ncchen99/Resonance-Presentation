// ── Resonance Pitch Deck · Slide Parts ────────────────────────────────────────
// Shared slide scaffolding: frame, type scale, spacing, headers, card variants.

// ── Type & Spacing (projection-appropriate, 1920×1080) ────────────────────────
const TYPE_SCALE = {
  eyebrow: 22,
  kicker:  28,
  title:   64,
  subtitle: 44,
  body:    34,
  bodySm:  28,
  small:   24,
  huge:    140,
};

const SPACING = {
  paddingTop: 110,
  paddingBottom: 160,
  paddingX: 130,
  titleGap: 48,
  itemGap: 28,
};

// ── SlideFrame ────────────────────────────────────────────────────────────────
// All slides MUST be rendered as a direct <section> child of <deck-stage>.
// SlideFrame is the INNER container that sets background, padding, and
// drops decorative blobs / grain. Never set position/inset on the parent.
function SlideFrame({ children, background = 'var(--color-cream)', padded = true, style = {}, decor = null, grain = 0.045, chrome = null }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background,
      overflow: 'hidden',
      ...style,
    }}>
      {decor}
      {grain > 0 && <GrainOverlay opacity={grain} />}
      {/* Chrome (BrandMark / SlideNumber) positioned relative to full slide */}
      {chrome}
      {/* Padded content area */}
      <div style={{
        position: 'absolute', inset: 0,
        padding: padded ? `${SPACING.paddingTop}px ${SPACING.paddingX}px ${SPACING.paddingBottom}px` : 0,
        zIndex: 2,
      }}>
        {children}
      </div>
    </div>
  );
}

// ── Eyebrow (section label above title) ───────────────────────────────────────
function Eyebrow({ children, color = 'var(--color-terracotta)' }) {
  return (
    <div style={{
      fontFamily: 'var(--font-body)',
      fontSize: TYPE_SCALE.eyebrow,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color,
      marginBottom: 28,
    }}>
      {children}
    </div>
  );
}

// ── SlideNumber (bottom-right marker, hand-drawn feel) ────────────────────────
function SlideNumber({ n, total, dark = false }) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 52,
      right: SPACING.paddingX,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-body)',
      fontSize: TYPE_SCALE.small,
      color: dark ? 'oklch(96% 0.015 75 / 0.6)' : 'var(--color-text-muted)',
      letterSpacing: '0.06em',
      zIndex: 3,
    }}>
      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 28 }}>
        {String(n).padStart(2, '0')}
      </span>
      <span style={{ width: 28, height: 1, background: 'currentColor', opacity: 0.5 }} />
      <span style={{ opacity: 0.6 }}>{String(total).padStart(2, '0')}</span>
    </div>
  );
}

// ── BrandMark (top-right on every slide) ──────────────────────────────────────
function BrandMark({ dark = false }) {
  return (
    <div style={{
      position: 'absolute',
      top: 76,
      right: SPACING.paddingX,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      zIndex: 3,
    }}>
      <ResonanceIcon size={38} />
      <span style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 24,
        letterSpacing: '-0.02em',
        color: dark ? 'var(--color-cream)' : 'var(--color-text)',
      }}>
        共振 Resonance
      </span>
    </div>
  );
}

// ── Underline squiggle (for highlighting words in titles) ─────────────────────
function Squiggle({ color = 'var(--color-terracotta)', width = '100%' }) {
  return (
    <svg viewBox="0 0 200 12" preserveAspectRatio="none" style={{
      position: 'absolute', bottom: -4, left: 0, width, height: 12, overflow: 'visible',
    }}>
      <path d="M2,8 C30,2 60,12 90,6 C120,0 150,10 198,6"
        stroke={color} strokeWidth="3" fill="none"
        strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

// ── HandDrawnCard (generic bordered card for slide content) ───────────────────
function HandDrawnCard({ children, width, height, seed = 7, fill = 'var(--color-card-bg)', stroke = 'oklch(40% 0.06 60)', padding = 40, style = {}, chalk = true, strokeWidth = 2 }) {
  const ref = React.useRef(null);
  const { w, h } = useElementSize(ref, width || 400, height || 300);
  const R = 22;
  const borderPath = React.useMemo(() => {
    if (!w || !h) return '';
    return wobRect(w, h, R, seed, Math.min(w, h) * 0.022,
      { segmentsH: [3, 4], segmentsV: [5, 6], curve: 0.55, cornerJitter: 0.7, cornerOffset: 4 });
  }, [w, h, seed]);

  return (
    <div ref={ref} style={{
      position: 'relative',
      width: width || 'auto',
      height: height || 'auto',
      padding,
      ...style,
    }}>
      <HandDrawnBorder
        w={w} h={h} R={R} seed={seed}
        fillColor={fill}
        strokeColor="transparent"
        strokeWidth={0}
        chalkSeed={chalk ? seed + 1 : null}
        segmentsH={[3, 4]} segmentsV={[5, 6]}
        curve={0.55} cornerJitter={0.7} cornerOffset={4}
      />
      {chalk && <ShapeGrain w={w} h={h} d={borderPath} opacity={0.28} frequency={0.85} seed={seed} />}
      <HandDrawnBorder
        w={w} h={h} R={R} seed={seed}
        strokeColor={stroke}
        strokeWidth={strokeWidth}
        segmentsH={[3, 4]} segmentsV={[5, 6]}
        curve={0.55} cornerJitter={0.7} cornerOffset={4}
      />
      <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
}

// ── SectionHeader (title + subtitle block, used inside slides) ────────────────
function SectionTitle({ eyebrow, title, subtitle, highlight, align = 'left', color = 'var(--color-text)', accent = 'var(--color-terracotta)', titleSize = TYPE_SCALE.title }) {
  // Split title around `highlight` (substring) to wrap it with Squiggle
  let titleNodes = title;
  if (highlight && typeof title === 'string' && title.includes(highlight)) {
    const parts = title.split(highlight);
    titleNodes = (
      <>
        {parts[0]}
        <span style={{ position: 'relative', display: 'inline-block', color: accent }}>
          {highlight}
          <Squiggle color={accent} />
        </span>
        {parts[1]}
      </>
    );
  }
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? 1400 : 'none', marginInline: align === 'center' ? 'auto' : 0 }}>
      {eyebrow && <Eyebrow color={accent}>{eyebrow}</Eyebrow>}
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: titleSize,
        fontWeight: 800,
        lineHeight: 1.15,
        letterSpacing: '-0.025em',
        color,
        margin: 0,
      }}>
        {titleNodes}
      </h2>
      {subtitle && (
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: TYPE_SCALE.body,
          lineHeight: 1.55,
          color: color === 'var(--color-cream)' ? 'oklch(96% 0.015 75 / 0.78)' : 'var(--color-text-muted)',
          margin: `${SPACING.titleGap}px 0 0`,
          maxWidth: 1100,
          marginInline: align === 'center' ? 'auto' : 0,
          textWrap: 'pretty',
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

Object.assign(window, {
  TYPE_SCALE, SPACING,
  SlideFrame, Eyebrow, SlideNumber, BrandMark,
  Squiggle, HandDrawnCard, SectionTitle,
});
