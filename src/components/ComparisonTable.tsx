import Reveal from './Reveal'
import CenterWrapper from './CenterWrapper'

const CHECK_ROWS = [
  'Estratégia de conteúdo mensal',
  'Legendas e Copys estratégicos',
  'Roteiros com narrativa e CTA',
  'Capas / Thumbnails dos vídeos',
  'Guia de Stories estratégico',
  'Linha de Raciocínio da marca',
  'Captação (presencial ou remota)',
  'Guia de Posicionamento contínuo',
  'Reuniões de alinhamento',
]

export default function ComparisonTable() {
  return (
    <section id="comparativo" className="section" style={{ minHeight: 'auto', paddingTop: 0 }}>
      <CenterWrapper>
        <Reveal className="section-header" style={{ marginBottom: 40 }}>
          <p className="section-eyebrow">Comparativo Detalhado</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px,4vw,50px)' }}>
            Éter <em>vs</em> Aura
          </h2>
        </Reveal>
        <Reveal className="comparison-table">
          <div className="ct-header">
            <div className="ct-col-head feature-col">Entregável</div>
            <div className="ct-col-head plan-eter" style={{ textAlign: 'center' }}>Éter</div>
            <div className="ct-col-head plan-aura" style={{ textAlign: 'center' }}>Aura</div>
          </div>

          <div className="ct-row">
            <div className="ct-cell feature-name">Posts / mês</div>
            <div className="ct-cell center">
              <span className="ct-value ct-serif">6<span className="ct-unit"> posts</span></span>
            </div>
            <div className="ct-cell center">
              <span className="ct-value ct-serif">8<span className="ct-unit"> posts</span></span>
            </div>
          </div>

          <div className="ct-row">
            <div className="ct-cell feature-name">Vídeos / mês</div>
            <div className="ct-cell center">
              <span className="ct-value ct-serif">2<span className="ct-unit"> vídeos</span></span>
            </div>
            <div className="ct-cell center">
              <span className="ct-value ct-serif">4<span className="ct-unit"> vídeos</span></span>
            </div>
          </div>

          {CHECK_ROWS.map((feature) => (
            <div className="ct-row" key={feature}>
              <div className="ct-cell feature-name">{feature}</div>
              <div className="ct-cell center"><span className="check yes-gold">✓</span></div>
              <div className="ct-cell center"><span className="check yes-rose">✓</span></div>
            </div>
          ))}

          {/* Branding — célula com flex column, sem overflow */}
          <div className="ct-row ct-row--branding">
            <div className="ct-cell feature-name">
              <span className="ct-branding-name">Branding</span>
              <span className="ct-branding-sub">identidade visual</span>
            </div>
            <div className="ct-cell center" style={{ flexDirection: 'column', gap: 4 }}>
              <span className="ct-branding-price">R$ 450</span>
              <span className="ct-branding-label">à parte</span>
            </div>
            <div className="ct-cell center" style={{ flexDirection: 'column', gap: 4 }}>
              <span className="check yes-rose">✓</span>
              <span className="ct-branding-label">incluso</span>
            </div>
          </div>

          {/* Preços finais */}
          <div className="ct-row ct-price-row">
            <div className="ct-cell feature-name" style={{ fontWeight: 500 }}>Investimento mensal</div>
            <div className="ct-cell center">
              <span className="ct-price-highlight eter-price">R$ 1.500</span>
            </div>
            <div className="ct-cell center">
              <span className="ct-price-highlight aura-price">R$ 2.600</span>
            </div>
          </div>
        </Reveal>

        <style>{`
          .ct-serif {
            font-family: 'Cormorant Garamond', Georgia, serif !important;
            font-weight: 300;
            font-size: clamp(20px, 2.8vw, 28px) !important;
            letter-spacing: 0.02em;
          }
          .ct-unit {
            font-family: 'Outfit', sans-serif;
            font-size: 11px;
            letter-spacing: 0.1em;
            color: rgba(184,175,166,0.5);
          }

          /* Branding row */
          .ct-row--branding {
            background: rgba(201,169,110,0.04);
            border-top: 1px solid rgba(201,169,110,0.14) !important;
            border-bottom: 1px solid rgba(201,169,110,0.14) !important;
          }
          .ct-branding-name {
            display: block;
            font-size: 14px;
            color: var(--white);
          }
          .ct-branding-sub {
            display: block;
            font-size: 10px;
            letter-spacing: 0.1em;
            color: rgba(201,169,110,0.4);
            text-transform: uppercase;
            margin-top: 3px;
            font-family: 'Outfit', sans-serif;
            white-space: nowrap;
          }
          .ct-branding-price {
            font-family: 'Cormorant Garamond', Georgia, serif;
            font-size: clamp(16px, 2.2vw, 22px);
            color: #C9A96E;
            font-weight: 300;
            line-height: 1.2;
            white-space: nowrap;
          }
          .ct-branding-label {
            font-size: 10px;
            letter-spacing: 0.1em;
            color: rgba(184,175,166,0.38);
            text-transform: uppercase;
            font-family: 'Outfit', sans-serif;
            white-space: nowrap;
          }

          /* As células do branding precisam de flex column */
          .ct-row--branding .ct-cell.center {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;
          }

          /* Price row */
          .ct-price-row { background: rgba(10,3,5,0.3); }
          .ct-price-highlight {
            font-family: 'Cormorant Garamond', Georgia, serif;
            font-size: clamp(18px, 2.5vw, 26px);
            font-weight: 300;
            letter-spacing: 0.02em;
            white-space: nowrap;
          }
          .eter-price { color: #C9A96E; }
          .aura-price { color: #E8A0A0; }

          /* Mobile — garante que nada cavalga */
          @media (max-width: 480px) {
            .ct-branding-price { font-size: 15px; }
            .ct-branding-sub { font-size: 9px; letter-spacing: 0.06em; }
            .ct-branding-label { font-size: 9px; }
          }
        `}</style>
      </CenterWrapper>
    </section>
  )
}
