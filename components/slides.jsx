// ── Resonance Pitch Deck · Slides 01–11 ──────────────────────────────────────

const TOTAL_SLIDES = 11;

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 01 — Cover
// ═══════════════════════════════════════════════════════════════════════════
function Slide01Cover() {
  return (
    <SlideFrame
      background="var(--color-cream)"
      grain={0.06}
      decor={
        <>
          <div style={{ position:'absolute', top:'-8%', left:'-6%', opacity:0.42, pointerEvents:'none' }}>
            <OrganiBlob variant={1} fill="var(--color-terracotta-light)" size={780} />
          </div>
          <div style={{ position:'absolute', bottom:'-10%', right:'-8%', opacity:0.30, pointerEvents:'none' }}>
            <OrganiBlob variant={3} fill="var(--color-lavender)" size={680} />
          </div>
          <div style={{ position:'absolute', top:'30%', right:'12%', opacity:0.22, pointerEvents:'none' }}>
            <OrganiBlob variant={2} fill="var(--color-sage)" size={340} />
          </div>
        </>
      }
    >
      <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', height:'100%', maxWidth: 1600, gap: 40 }}>
        <div style={{ display:'flex', alignItems:'center', gap: 20 }}>
          <ResonanceIcon size={76} />
          <div style={{ display:'flex', flexDirection:'column' }}>
            <span style={{ fontFamily:'var(--font-heading)', fontSize: 56, fontWeight: 800, color:'var(--color-text)', letterSpacing:'-0.03em', lineHeight: 1 }}>
              共振
            </span>
            <span style={{ fontFamily:'var(--font-heading)', fontSize: 28, fontWeight: 400, fontStyle:'italic', color:'var(--color-text-muted)', letterSpacing:'-0.01em', marginTop: 2 }}>
              Resonance
            </span>
          </div>
        </div>

        <h1 style={{
          fontFamily:'var(--font-heading)',
          fontSize: 60,
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing:'-0.03em',
          color:'var(--color-text)',
          margin: 0,
          maxWidth: 1600,
          wordBreak:'keep-all',
          lineBreak:'strict',
        }}>
          讓世界上每個<span style={{ position:'relative', display:'inline-block', color:'var(--color-terracotta)', whiteSpace:'nowrap' }}>
            同頻的靈魂，
            <Squiggle color="var(--color-terracotta)" />
          </span><br/>都能透過故事彼此共振
        </h1>

        <div style={{ display:'flex', alignItems:'center', gap: 24, flexWrap:'nowrap' }}>
          <span style={{ whiteSpace:'nowrap' }}>
            <TagPill color="var(--color-terracotta-light)">✦ Pitch Deck · 2026</TagPill>
          </span>
          <span style={{ fontFamily:'var(--font-body)', fontSize: 24, color:'var(--color-text-muted)', fontStyle:'italic', whiteSpace:'nowrap' }}>
            A belief-driven business plan for venture partners
          </span>
        </div>
      </div>
    </SlideFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 02 — One-liner / Thesis
// ═══════════════════════════════════════════════════════════════════════════
function Slide02Thesis() {
  return (
    <SlideFrame
      background="var(--color-cream)"
      grain={0.06}
      chrome={<><BrandMark /><SlideNumber n={2} total={TOTAL_SLIDES}/></>}
      decor={
        <>
          <div style={{ position:'absolute', top:'-10%', right:'-8%', opacity:0.30, pointerEvents:'none' }}>
            <OrganiBlob variant={0} fill="var(--color-terracotta-light)" size={720} />
          </div>
          <div style={{ position:'absolute', bottom:'-12%', left:'-6%', opacity:0.22, pointerEvents:'none' }}>
            <OrganiBlob variant={4} fill="var(--color-yellow)" size={520} />
          </div>
        </>
      }
    ><div style={{ display:'flex', flexDirection:'column', justifyContent:'center', height:'100%' }}>
        <Eyebrow>One-liner · 30 秒版</Eyebrow>

        <div style={{ position:'relative', maxWidth: 1500 }}>
          <span style={{
            position:'absolute', top: -80, left: -40,
            fontFamily:'var(--font-heading)',
            fontSize: 240, lineHeight: 1,
            color:'var(--color-terracotta)', opacity: 0.22,
            fontWeight: 800,
          }}>"</span>
          <h2 style={{
            fontFamily:'var(--font-heading)',
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.18,
            letterSpacing:'-0.025em',
            color:'var(--color-text)',
            margin: 0,
            textWrap:'balance',
            position:'relative',
            zIndex: 2,
          }}>
            我們做的不是社群，<br/>
            是一個<span style={{ position:'relative', display:'inline-block', color:'var(--color-terracotta)' }}>
              思想的共振場
              <Squiggle color="var(--color-terracotta)" />
            </span> ──<br/>
            讓你知道，世界另一端<br/>有人和你想的一樣。
          </h2>
        </div>

        <div style={{ marginTop: 80, display:'flex', gap: 32, maxWidth: 1500 }}>
          {[
            { n: '01', text: '否定傳統社群的定位' },
            { n: '02', text: '濃縮為一個可體驗的情緒' },
            { n: '03', text: '每個孤獨思考者都心頭一震' },
          ].map(item => (
            <div key={item.n} style={{ flex:1, display:'flex', alignItems:'flex-start', gap: 16 }}>
              <span style={{ fontFamily:'var(--font-heading)', fontSize: 44, fontWeight: 800, color:'var(--color-terracotta)', lineHeight: 1 }}>{item.n}</span>
              <span style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.bodySm, color:'var(--color-text)', lineHeight: 1.45, paddingTop: 4 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div></SlideFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 03 — Beliefs (我相信...)
// ═══════════════════════════════════════════════════════════════════════════
function Slide03Beliefs() {
  const beliefs = [
    { tag: '人', text: '人生而思想自由，每一個平凡生命裡，都藏著值得被世界聽見的智慧。', color: 'var(--color-terracotta-light)', seed: 13 },
    { tag: '故事', text: '思想改變行為，行為改變命運──而故事，是讓思想被相信的最好證據。', color: 'var(--color-yellow)', seed: 29 },
    { tag: '連結', text: '人最深的連結，不來自外表或成就，而來自靈魂深處的同頻共振。', color: 'var(--color-sage)', seed: 47 },
  ];
  return (
    <SlideFrame background="var(--color-cream)" grain={0.05}
      chrome={<><BrandMark /><SlideNumber n={3} total={TOTAL_SLIDES}/></>}><div style={{ display:'flex', flexDirection:'column', height:'100%' }}>
        <SectionTitle
          eyebrow="第一章 · 我們相信"
          title="三件事我們深信不疑"
          highlight="深信不疑"
          subtitle="在動手建造『它』之前，這是我們對世界的三個基本判斷。"
        />
        <div style={{ marginTop: 80, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 40, flex: 1 }}>
          {beliefs.map((b, i) => (
            <HandDrawnCard key={i} seed={b.seed} fill={b.color} stroke="oklch(36% 0.06 60 / 0.6)" padding={48}>
              <div style={{ display:'flex', flexDirection:'column', height:'100%', justifyContent:'space-between', minHeight: 420 }}>
                <div style={{ fontFamily:'var(--font-heading)', fontSize: 180, fontWeight: 800, lineHeight: 0.9, color:'var(--color-text)', opacity: 0.92 }}>
                  {b.tag}
                </div>
                <p style={{
                  fontFamily:'var(--font-body)',
                  fontSize: TYPE_SCALE.bodySm,
                  lineHeight: 1.55,
                  color:'var(--color-text)',
                  margin: 0,
                  textWrap:'pretty',
                }}>
                  {b.text}
                </p>
              </div>
            </HandDrawnCard>
          ))}
        </div>
      </div></SlideFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 04 — Why Now
// ═══════════════════════════════════════════════════════════════════════════
function Slide04WhyNow() {
  return (
    <SlideFrame
      background="var(--color-cream)"
      grain={0.05}
      chrome={<><BrandMark /><SlideNumber n={4} total={TOTAL_SLIDES}/></>}
      decor={
        <div style={{ position:'absolute', bottom:'-8%', right:'-4%', opacity:0.20, pointerEvents:'none' }}>
          <OrganiBlob variant={2} fill="var(--color-terracotta-light)" size={540} />
        </div>
      }
    ><div style={{ display:'flex', flexDirection:'column', height:'100%' }}>
        <SectionTitle
          eyebrow="第二章 · 為什麼是現在"
          title="AI 第一次讓我們有機會，有發心地建造一個平台"
          highlight="有發心地"
          titleSize={TYPE_SCALE.titleSm}
        />

        <div style={{ marginTop: 72, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 48, flex: 1 }}>
          {/* Past decade */}
          <div>
            <div style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.small, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--color-text-muted)', marginBottom: 24, fontWeight: 600 }}>
              過去十年
            </div>
            <h3 style={{ fontFamily:'var(--font-heading)', fontSize: 48, fontWeight: 700, color:'var(--color-text)', margin: '0 0 32px', lineHeight: 1.2, letterSpacing:'-0.02em' }}>
              中性平台被流量經濟異化
            </h3>
            <ul style={{ listStyle:'none', padding: 0, margin: 0, display:'flex', flexDirection:'column', gap: 20 }}>
              {[
                '人們為了按讚而表演',
                '為了曝光而焦慮',
                '為了演算法而扭曲自己',
              ].map((t, i) => (
                <li key={i} style={{ display:'flex', alignItems:'flex-start', gap: 16, fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.bodySm, color:'var(--color-text)', lineHeight: 1.5 }}>
                  <span style={{ color:'var(--color-text-muted)', fontFamily:'var(--font-heading)', fontWeight: 700, marginTop: -2 }}>—</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Now */}
          <HandDrawnCard seed={73} fill="var(--color-terracotta)" stroke="oklch(30% 0.14 45)" padding={52}>
            <div style={{ display:'flex', flexDirection:'column', height:'100%', minHeight: 440, color:'var(--color-cream)' }}>
              <div style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.small, letterSpacing:'0.16em', textTransform:'uppercase', color:'oklch(96% 0.015 75 / 0.75)', marginBottom: 24, fontWeight: 600 }}>
                此刻 · AI 時代
              </div>
              <h3 style={{ fontFamily:'var(--font-heading)', fontSize: 48, fontWeight: 800, margin: '0 0 28px', lineHeight: 1.15, letterSpacing:'-0.02em' }}>
                工具可以更中性，<br/>也可以更邪惡
              </h3>
              <p style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.bodySm, lineHeight: 1.55, margin: 0, color:'oklch(96% 0.015 75 / 0.92)', textWrap:'pretty' }}>
                但也第一次，我們能主動放大正向的聲音、連結同頻的思想。
              </p>
              <p style={{ fontFamily:'var(--font-heading)', fontStyle:'italic', fontSize: 32, lineHeight: 1.4, margin: 'auto 0 0', color:'oklch(96% 0.015 75 / 0.96)', paddingTop: 24, borderTop:'1px dashed oklch(96% 0.015 75 / 0.35)' }}>
                這就是我們判斷的時機。
              </p>
            </div>
          </HandDrawnCard>
        </div>
      </div></SlideFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 05 — VS Comparison
// ═══════════════════════════════════════════════════════════════════════════
function Slide05Versus() {
  const rows = [
    { old: '追逐流量',        nw: '追逐共鳴' },
    { old: '演算法餵養',      nw: '同頻連結' },
    { old: '創作者 vs. 讀者', nw: '人人都是思想家' },
    { old: 'Follower 數字',   nw: 'N 個人與你共振' },
    { old: '表演與曝光',      nw: '被真正聽見' },
  ];
  return (
    <SlideFrame background="var(--color-cream-dark)" grain={0.05}
      chrome={<><BrandMark /><SlideNumber n={5} total={TOTAL_SLIDES}/></>}><div style={{ display:'flex', flexDirection:'column', height:'100%' }}>
        <SectionTitle
          eyebrow="第三章 · 定位"
          title="傳統社群 vs. 共振"
          titleSize={TYPE_SCALE.title}
        />

        <div style={{ marginTop: 60, display:'grid', gridTemplateColumns:'1fr auto 1fr', gap: 40, alignItems:'stretch', flex: 1 }}>
          {/* Left: traditional */}
          <HandDrawnCard seed={19} fill="oklch(92% 0.01 75)" stroke="oklch(45% 0.03 70)" padding={44}>
            <div style={{ display:'flex', flexDirection:'column', gap: 20, height:'100%' }}>
              <div style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.small, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--color-text-muted)', fontWeight: 600 }}>
                傳統社群
              </div>
              <div style={{ fontFamily:'var(--font-heading)', fontSize: 42, fontWeight: 700, color:'var(--color-text-muted)', letterSpacing:'-0.02em', lineHeight: 1.15, textDecoration:'line-through', textDecorationColor:'oklch(55% 0.04 70 / 0.55)' }}>
                Medium · Threads · 小紅書
              </div>
              <div style={{ flex: 1, display:'flex', flexDirection:'column', gap: 14, marginTop: 8 }}>
                {rows.map((r, i) => (
                  <div key={i} style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.bodySm, color:'var(--color-text-muted)', lineHeight: 1.35 }}>
                    {r.old}
                  </div>
                ))}
              </div>
            </div>
          </HandDrawnCard>

          {/* Center: arrow */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap: 18 }}>
            <svg width="80" height="200" viewBox="0 0 80 200" style={{ overflow:'visible' }}>
              <path d="M 40,10 C 48,60 32,140 40,190" stroke="var(--color-terracotta)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
              <path d="M 28,178 L 40,192 L 52,178" stroke="var(--color-terracotta)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontFamily:'var(--font-heading)', fontStyle:'italic', fontSize: 26, color:'var(--color-terracotta)', writingMode:'horizontal-tb' }}>
              shift
            </span>
          </div>

          {/* Right: resonance */}
          <HandDrawnCard seed={83} fill="var(--color-terracotta-light)" stroke="oklch(36% 0.13 45)" padding={44}>
            <div style={{ display:'flex', flexDirection:'column', gap: 20, height:'100%' }}>
              <div style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.small, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--color-terracotta)', fontWeight: 700 }}>
                共振
              </div>
              <div style={{ fontFamily:'var(--font-heading)', fontSize: 42, fontWeight: 800, color:'var(--color-text)', letterSpacing:'-0.02em', lineHeight: 1.15 }}>
                Resonance
              </div>
              <div style={{ flex: 1, display:'flex', flexDirection:'column', gap: 14, marginTop: 8 }}>
                {rows.map((r, i) => (
                  <div key={i} style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.bodySm, color:'var(--color-text)', lineHeight: 1.35, fontWeight: 500 }}>
                    {r.nw}
                  </div>
                ))}
              </div>
            </div>
          </HandDrawnCard>
        </div>
      </div></SlideFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 06 — Product: the thought card
// ═══════════════════════════════════════════════════════════════════════════
function Slide06Product() {
  return (
    <SlideFrame background="var(--color-cream)" grain={0.05}
      chrome={<><BrandMark /><SlideNumber n={6} total={TOTAL_SLIDES}/></>}><div style={{ display:'flex', height:'100%', gap: 80, alignItems:'center' }}>
        {/* Left: explanation */}
        <div style={{ flex: 1.1, display:'flex', flexDirection:'column' }}>
          <Eyebrow>第四章 · 產品</Eyebrow>
          <h2 style={{
            fontFamily:'var(--font-heading)',
            fontSize: TYPE_SCALE.titleSm,
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing:'-0.025em',
            color:'var(--color-text)',
            margin: 0,
            textWrap:'balance',
          }}>
            最小單位：一張<span style={{ position:'relative', display:'inline-block', color:'var(--color-terracotta)' }}>
              思維故事卡片
              <Squiggle color="var(--color-terracotta)" />
            </span>
          </h2>

          <div style={{ marginTop: 48, fontFamily:'var(--font-heading)', fontSize: 38, fontWeight: 700, color:'var(--color-text)', letterSpacing:'-0.01em', lineHeight: 1.3 }}>
            一張卡片 = 一個生命故事 + 一個核心思維
          </div>

          <ul style={{ listStyle:'none', padding: 0, margin: '48px 0 0', display:'flex', flexDirection:'column', gap: 22 }}>
            {[
              { k: '不寫長文',   v: '降低發文門檻到極低' },
              { k: '不追粉絲',   v: '沒有 follower / following 的階級感' },
              { k: '不比讚數',   v: '不是 vanity metric，是 connection metric' },
            ].map(item => (
              <li key={item.k} style={{ display:'flex', alignItems:'baseline', gap: 24 }}>
                <span style={{ fontFamily:'var(--font-heading)', fontStyle:'italic', fontSize: 32, fontWeight: 700, color:'var(--color-terracotta)', minWidth: 140 }}>{item.k}</span>
                <span style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.bodySm, color:'var(--color-text)', lineHeight: 1.45 }}>{item.v}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: sample card */}
        <div style={{ flex: 1, display:'flex', justifyContent:'center' }}>
          <div style={{ width: 440, transform:'rotate(-3deg)' }}>
            <HandDrawnCard seed={131} fill="oklch(93% 0.042 140)" stroke="oklch(38% 0.11 140)" padding={36}>
              <div style={{ display:'flex', flexDirection:'column', gap: 22, minHeight: 540 }}>
                {/* placeholder image */}
                <div style={{ position:'relative', width:'100%', paddingBottom:'62%', borderRadius:'14px 18px 12px 16px', overflow:'hidden', flexShrink: 0 }}>
                  <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <rect width="320" height="200" fill="oklch(82% 0.08 140)"/>
                    {Array.from({ length: 22 }, (_, i) => (
                      <line key={i} x1={i*22-160} y1="0" x2={i*22+160} y2="200" stroke="oklch(72% 0.10 140)" strokeWidth="1.5" strokeOpacity="0.35"/>
                    ))}
                    <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle" fontFamily="monospace" fontSize="10.5" fill="oklch(28% 0.04 60)" fillOpacity="0.5">
                      thought card · illustration
                    </text>
                  </svg>
                </div>
                <TagPill color="oklch(90% 0.075 88)">Thought</TagPill>
                <h3 style={{ fontFamily:'var(--font-heading)', fontSize: 30, fontWeight: 700, color:'var(--color-text)', lineHeight: 1.3, margin: 0 }}>
                  三次創業失敗教我的事
                </h3>
                <p style={{ fontFamily:'var(--font-body)', fontSize: 18, lineHeight: 1.65, color:'var(--color-text-muted)', margin: 0 }}>
                  真正的勇氣，不是拒絕失敗，而是願意再一次把自己放進去。
                </p>
                <div style={{ display:'flex', alignItems:'center', gap: 12, marginTop:'auto', paddingTop: 12 }}>
                  <HandDrawnAvatar initials="JP" size={36} color="oklch(88% 0.08 88)" seed={77} />
                  <div>
                    <div style={{ fontFamily:'var(--font-body)', fontSize: 16, fontWeight: 600, color:'var(--color-text)' }}>Jin Park</div>
                    <div style={{ fontFamily:'var(--font-body)', fontSize: 14, color:'var(--color-text-muted)' }}>4 人與你共振</div>
                  </div>
                </div>
              </div>
            </HandDrawnCard>
          </div>
        </div>
      </div></SlideFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 07 — AI: the two worlds meet
// ═══════════════════════════════════════════════════════════════════════════
function Slide07AI() {
  return (
    <SlideFrame background="var(--color-cream)" grain={0.05}
      chrome={<><BrandMark /><SlideNumber n={7} total={TOTAL_SLIDES}/></>}><div style={{ display:'flex', flexDirection:'column', height:'100%' }}>
        <SectionTitle
          eyebrow="第五章 · 為何非得是我們"
          title="AI 讓兩群孤單的人，第一次找到彼此"
          highlight="找到彼此"
          titleSize={TYPE_SCALE.titleSm}
        />

        <div style={{ marginTop: 60, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 56, flex: 1, alignItems:'stretch' }}>
          <HandDrawnCard seed={157} fill="oklch(94% 0.032 290)" stroke="oklch(42% 0.09 290)" padding={44}>
            <div style={{ display:'flex', flexDirection:'column', height:'100%', gap: 20 }}>
              <TagPill color="oklch(88% 0.06 290)">A 群人</TagPill>
              <h3 style={{ fontFamily:'var(--font-heading)', fontSize: 42, fontWeight: 700, color:'var(--color-text)', lineHeight: 1.2, letterSpacing:'-0.02em', margin: 0 }}>
                有思想，沒舞台
              </h3>
              <p style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.bodySm, color:'var(--color-text)', lineHeight: 1.55, margin: 0, textWrap:'pretty' }}>
                有熱情、有洞察，但沒有 title、沒有書、沒有演講舞台。智慧被困在日記裡、被淹沒在動態牆上。
              </p>
              <div style={{ marginTop:'auto', fontFamily:'var(--font-heading)', fontStyle:'italic', fontSize: 28, color:'oklch(42% 0.09 290)', lineHeight: 1.35 }}>
                「我的經歷沒那麼厲害……」
              </div>
            </div>
          </HandDrawnCard>

          <HandDrawnCard seed={191} fill="oklch(93% 0.042 140)" stroke="oklch(38% 0.11 140)" padding={44}>
            <div style={{ display:'flex', flexDirection:'column', height:'100%', gap: 20 }}>
              <TagPill color="oklch(86% 0.08 140)">B 群人</TagPill>
              <h3 style={{ fontFamily:'var(--font-heading)', fontSize: 42, fontWeight: 700, color:'var(--color-text)', lineHeight: 1.2, letterSpacing:'-0.02em', margin: 0 }}>
                飢渴地尋找，卻只吃到糖
              </h3>
              <p style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.bodySm, color:'var(--color-text)', lineHeight: 1.55, margin: 0, textWrap:'pretty' }}>
                在 doomscrolling 裡尋找真正能觸動自己的聲音，卻只吃到演算法餵的糖。
              </p>
              <div style={{ marginTop:'auto', fontFamily:'var(--font-heading)', fontStyle:'italic', fontSize: 28, color:'oklch(38% 0.11 140)', lineHeight: 1.35 }}>
                「為什麼沒人和我想的一樣?」
              </div>
            </div>
          </HandDrawnCard>
        </div>

        <div style={{ marginTop: 40, textAlign:'center' }}>
          <p style={{ fontFamily:'var(--font-heading)', fontSize: 42, fontWeight: 700, color:'var(--color-text)', margin: 0, letterSpacing:'-0.02em', lineHeight: 1.3 }}>
            其實是同一群人 ── <span style={{ color:'var(--color-terracotta)' }}>AI 讓他們彼此找到。</span>
          </p>
        </div>
      </div></SlideFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 08 — First battlefield: who we serve
// ═══════════════════════════════════════════════════════════════════════════
function Slide08WhoWeServe() {
  const signals = [
    'Medium / Substack 訂閱者',
    '會在 Threads 寫長文的人',
    '讀過《卡片盒筆記》《原子習慣》',
    '追蹤過幾個 KOL，心裡卻有個聲音說「我想的也不差」',
  ];
  return (
    <SlideFrame background="var(--color-cream-dark)" grain={0.05}
      chrome={<><BrandMark /><SlideNumber n={8} total={TOTAL_SLIDES}/></>}><div style={{ display:'flex', flexDirection:'column', height:'100%' }}>
        <SectionTitle
          eyebrow="第六章 · 第一戰場"
          title="服務誰：華文圈的思想工作者"
          highlight="思想工作者"
          titleSize={TYPE_SCALE.titleSm}
        />

        <div style={{ marginTop: 56, display:'grid', gridTemplateColumns:'auto 1fr', gap: 56, alignItems:'stretch', flex: 1 }}>
          {/* Persona card */}
          <HandDrawnCard seed={211} fill="var(--color-cream)" stroke="oklch(40% 0.06 60)" padding={48} style={{ width: 520 }}>
            <div style={{ display:'flex', flexDirection:'column', gap: 24, height:'100%' }}>
              <HandDrawnAvatar initials="?" size={92} color="var(--color-terracotta-light)" seed={7}/>
              <div>
                <div style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.small, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--color-text-muted)', fontWeight: 600, marginBottom: 8 }}>
                  Primary persona
                </div>
                <div style={{ fontFamily:'var(--font-heading)', fontSize: 56, fontWeight: 800, color:'var(--color-text)', letterSpacing:'-0.02em', lineHeight: 1.05 }}>
                  25–40 歲
                </div>
              </div>
              <p style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.bodySm, color:'var(--color-text)', lineHeight: 1.55, margin: 0, textWrap:'pretty' }}>
                讀過一些書、想過一些事，有強烈分享慾，卻又覺得「我的經歷沒那麼厲害」的華文創意 / 知識工作者。
              </p>
            </div>
          </HandDrawnCard>

          {/* Signals */}
          <div style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
            <div style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.small, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--color-text-muted)', fontWeight: 600, marginBottom: 32 }}>
              典型訊號
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap: 24 }}>
              {signals.map((s, i) => (
                <div key={i} style={{ display:'flex', alignItems:'flex-start', gap: 22 }}>
                  <span style={{ fontFamily:'var(--font-heading)', fontSize: 34, fontWeight: 800, color:'var(--color-terracotta)', minWidth: 54, lineHeight: 1 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily:'var(--font-body)', fontSize: 30, color:'var(--color-text)', lineHeight: 1.4 }}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div></SlideFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 09 — Where to fight, who to fight
// ═══════════════════════════════════════════════════════════════════════════
function Slide09Battlefield() {
  return (
    <SlideFrame background="var(--color-cream)" grain={0.05}
      chrome={<><BrandMark /><SlideNumber n={9} total={TOTAL_SLIDES}/></>}><div style={{ display:'flex', flexDirection:'column', height:'100%' }}>
        <SectionTitle
          eyebrow="第七章 · 戰場 & 對手"
          title="真正的對手，不是 Medium，而是 doomscrolling 本身"
          titleSize={48}
        />

        <div style={{ marginTop: 64, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 48, flex: 1 }}>
          {/* Where */}
          <div style={{ display:'flex', flexDirection:'column', gap: 28 }}>
            <Eyebrow color="var(--color-text-muted)">在哪打</Eyebrow>
            <h3 style={{ fontFamily:'var(--font-heading)', fontSize: 52, fontWeight: 800, color:'var(--color-text)', letterSpacing:'-0.02em', margin: 0, lineHeight: 1.15 }}>
              台灣華文圈 → 全球
            </h3>
            <p style={{ fontFamily:'var(--font-body)', fontSize: TYPE_SCALE.bodySm, color:'var(--color-text)', lineHeight: 1.55, margin: 0, textWrap:'pretty' }}>
              母語直覺最強的市場先贏。MVP 上線即內建 AI 翻譯，早期使用者的卡片能被英 / 日 / 韓看見。
            </p>
            <HandDrawnCard seed={241} fill="var(--color-yellow)" stroke="oklch(44% 0.12 88)" padding={28}>
              <p style={{ fontFamily:'var(--font-heading)', fontStyle:'italic', fontSize: 30, color:'var(--color-text)', margin: 0, lineHeight: 1.4 }}>
                「我的故事居然有東京的人回應!」<br/>
                <span style={{ fontFamily:'var(--font-body)', fontStyle:'normal', fontSize: 22, color:'var(--color-text-muted)' }}>
                  ── 這會是早期留存的關鍵體驗
                </span>
              </p>
            </HandDrawnCard>
          </div>

          {/* Who */}
          <div style={{ display:'flex', flexDirection:'column', gap: 28 }}>
            <Eyebrow color="var(--color-text-muted)">跟誰打</Eyebrow>
            <div style={{ display:'flex', flexDirection:'column', gap: 16 }}>
              <div style={{ fontFamily:'var(--font-body)', fontSize: 24, color:'var(--color-text-muted)', letterSpacing:'0.04em' }}>
                表面競品
              </div>
              <div style={{ fontFamily:'var(--font-heading)', fontSize: 38, fontWeight: 700, color:'var(--color-text-muted)', textDecoration:'line-through', textDecorationColor:'oklch(55% 0.04 70 / 0.6)', letterSpacing:'-0.01em' }}>
                Medium · Threads · 小紅書
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap: 16, marginTop: 16 }}>
              <div style={{ fontFamily:'var(--font-body)', fontSize: 24, color:'var(--color-terracotta)', letterSpacing:'0.04em', fontWeight: 600 }}>
                真正的對手
              </div>
              <div style={{ fontFamily:'var(--font-heading)', fontSize: 48, fontWeight: 800, color:'var(--color-text)', lineHeight: 1.15, letterSpacing:'-0.02em' }}>
                Doomscrolling 本身，<br/>
                <span style={{ color:'var(--color-terracotta)' }}>以及讓人覺得「自己不夠格發聲」的世界。</span>
              </div>
            </div>
          </div>
        </div>
      </div></SlideFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 10 — How to win
// ═══════════════════════════════════════════════════════════════════════════
function Slide10HowToWin() {
  const weapons = [
    {
      n: '01',
      title: '最小卡片 + AI 潤稿',
      body: '發文門檻降到極低。競品都假設使用者會寫；我們假設他們不會。',
      color: 'var(--color-terracotta-light)',
      stroke: 'oklch(38% 0.11 55)',
      seed: 41,
    },
    {
      n: '02',
      title: '同頻連結，取代追蹤',
      body: '沒有粉絲數、沒有 follower / following，就沒有階級感。',
      color: 'oklch(94% 0.032 290)',
      stroke: 'oklch(42% 0.09 290)',
      seed: 67,
    },
    {
      n: '03',
      title: 'Connection metric',
      body: '回饋不是讚數，而是「有 N 個人說你的故事和他們共振了」。',
      color: 'oklch(93% 0.042 140)',
      stroke: 'oklch(38% 0.11 140)',
      seed: 97,
    },
  ];
  return (
    <SlideFrame background="var(--color-cream-dark)" grain={0.05}
      chrome={<><BrandMark /><SlideNumber n={10} total={TOTAL_SLIDES}/></>}><div style={{ display:'flex', flexDirection:'column', height:'100%' }}>
        <SectionTitle
          eyebrow="第八章 · 如何贏"
          title="三個產品哲學武器"
          highlight="哲學武器"
          titleSize={TYPE_SCALE.title}
        />

        <div style={{ marginTop: 64, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 36, flex: 1 }}>
          {weapons.map(w => (
            <HandDrawnCard key={w.n} seed={w.seed} fill={w.color} stroke={w.stroke} padding={40}>
              <div style={{ display:'flex', flexDirection:'column', height:'100%', minHeight: 440, gap: 24 }}>
                <div style={{ fontFamily:'var(--font-heading)', fontSize: 96, fontWeight: 800, color:'var(--color-text)', opacity: 0.85, lineHeight: 0.9, letterSpacing:'-0.03em' }}>
                  {w.n}
                </div>
                <h3 style={{ fontFamily:'var(--font-heading)', fontSize: 38, fontWeight: 700, color:'var(--color-text)', letterSpacing:'-0.02em', lineHeight: 1.2, margin: 0 }}>
                  {w.title}
                </h3>
                <p style={{ fontFamily:'var(--font-body)', fontSize: 26, lineHeight: 1.55, color:'var(--color-text)', margin: 'auto 0 0', textWrap:'pretty' }}>
                  {w.body}
                </p>
              </div>
            </HandDrawnCard>
          ))}
        </div>
      </div></SlideFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 11 — Closing: our belief
// ═══════════════════════════════════════════════════════════════════════════
function Slide11Closing() {
  return (
    <SlideFrame
      background="var(--color-terracotta)"
      grain={0.08}
      chrome={<><BrandMark dark/><SlideNumber n={11} total={TOTAL_SLIDES} dark/></>}
      decor={
        <>
          <div style={{ position:'absolute', top:'-12%', left:'-8%', opacity:0.16, pointerEvents:'none' }}>
            <OrganiBlob variant={2} fill="oklch(98% 0.01 75)" size={640} />
          </div>
          <div style={{ position:'absolute', bottom:'-14%', right:'-6%', opacity:0.14, pointerEvents:'none' }}>
            <OrganiBlob variant={0} fill="oklch(98% 0.01 75)" size={560} />
          </div>
        </>
      }
    ><div style={{ display:'flex', flexDirection:'column', justifyContent:'center', height:'100%', alignItems:'flex-start', maxWidth: 1500 }}>
        <Eyebrow color="oklch(96% 0.015 75 / 0.75)">尾聲 · 我們的信念</Eyebrow>
        <h2 style={{
          fontFamily:'var(--font-heading)',
          fontSize: 76,
          fontWeight: 800,
          lineHeight: 1.16,
          letterSpacing:'-0.025em',
          color:'var(--color-cream)',
          margin: 0,
          textWrap:'balance',
        }}>
          你寫一張卡片，<br/>
          我們讓世界上<span style={{ position:'relative', display:'inline-block', color:'var(--color-yellow)' }}>
            與你同頻的靈魂
            <Squiggle color="var(--yellow)" />
          </span><br/>看見它。
        </h2>
        <p style={{
          fontFamily:'var(--font-heading)',
          fontStyle:'italic',
          fontSize: 34,
          color:'oklch(96% 0.015 75 / 0.85)',
          margin: '56px 0 0',
          letterSpacing:'-0.005em',
        }}>
          Let lives influence lives.
        </p>
      </div></SlideFrame>
  );
}

Object.assign(window, {
  TOTAL_SLIDES,
  Slide01Cover, Slide02Thesis, Slide03Beliefs, Slide04WhyNow,
  Slide05Versus, Slide06Product, Slide07AI, Slide08WhoWeServe,
  Slide09Battlefield, Slide10HowToWin, Slide11Closing,
});
