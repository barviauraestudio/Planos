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
            <div className="ct-cell center"><span className="ct-value">6<span> posts</span></span></div>
            <div className="ct-cell center"><span className="ct-value">8<span> posts</span></span></div>
          </div>

          <div className="ct-row">
            <div className="ct-cell feature-name">Vídeos / mês</div>
            <div className="ct-cell center"><span className="ct-value">2<span> vídeos</span></span></div>
            <div className="ct-cell center"><span className="ct-value">4<span> vídeos</span></span></div>
          </div>

          {CHECK_ROWS.map((feature) => (
            <div className="ct-row" key={feature}>
              <div className="ct-cell feature-name">{feature}</div>
              <div className="ct-cell center"><span className="check yes-gold">✓</span></div>
              <div className="ct-cell center"><span className="check yes-rose">✓</span></div>
            </div>
          ))}

          {/* Branding row — destaque especial */}
          <div className="ct-row ct-row--branding">
            <div className="ct-cell feature-name">
              Branding
              <span className="ct-branding-sub">identidade visual completa</span>
            </div>
            <div className="ct-cell center">
              <span className="ct-branding-price">R$ 450</span>
              <span className="ct-branding-label">cobrado à parte</span>
            </div>
            <div className="ct-cell center">
              <span className="check yes-rose">✓</span>
              <span className="ct-branding-label">incluso</span>
            </div>
          </div>

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
          .ct-row--branding {
            background: rgba(201,169,110,0.05);
            border-top: 1px solid rgba(201,169,110,0.18) !important;
            border-bottom: 1px solid rgba(201,169,110,0.18) !important;
          }
          .ct-branding-sub {
            display: block;
            font-size: 10px;
            letter-spacing: 0.12em;
            color: rgba(201,169,110,0.45);
            text-transform: uppercase;
            margin-top: 3px;
            font-family: 'Outfit', sans-serif;
          }
          .ct-branding-price {
            display: block;
            font-family: 'Cormorant Garamond', serif;
            font-size: 18px;
            color: #C9A96E;
            font-weight: 400;
            line-height: 1.2;
          }
          .ct-branding-label {
            display: block;
            font-size: 10px;
            letter-spacing: 0.1em;
            color: rgba(184,175,166,0.4);
            text-transform: uppercase;
            margin-top: 3px;
            font-family: 'Outfit', sans-serif;
          }
          .ct-price-row {
            background: rgba(10,3,5,0.3);
          }
          .ct-price-highlight {
            font-family: 'Cormorant Garamond', serif;
            font-size: 22px;
            font-weight: 400;
            letter-spacing: 0.02em;
          }
          .eter-price { color: #C9A96E; }
          .aura-price { color: #E8A0A0; }
        `}</style>
      </CenterWrapper>
    </section>
  )
}
