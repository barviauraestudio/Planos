import { useState } from 'react'
import Reveal from './Reveal'
import CenterWrapper from './CenterWrapper'

type Tab = 'eter' | 'aura' | 'personalizado' | 'branding'

export default function Plans() {
  const [tab, setTab] = useState<Tab>('eter')

  return (
    <section id="planos" className="section">
      <CenterWrapper>
        <Reveal className="section-header">
          <p className="section-eyebrow">Nossos Planos</p>
          <h2 className="section-title">Escolha sua <em>intensidade</em></h2>
          <div className="section-rule" />
        </Reveal>

        {/* Tab bar */}
        <Reveal>
          <div className="plans-tabs">
            {(['eter', 'aura', 'personalizado', 'branding'] as Tab[]).map((t) => (
              <button
                key={t}
                className={`plans-tab${tab === t ? ' active' : ''} tab-${t}`}
                onClick={() => setTab(t)}
              >
                {t === 'eter' && 'Éter'}
                {t === 'aura' && 'Aura'}
                {t === 'personalizado' && 'Personalizado'}
                {t === 'branding' && 'Branding'}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Éter */}
        {tab === 'eter' && (
          <Reveal delay={1} className="plan-card eter plan-card--solo" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="plan-name">Éter</div>
            <p className="plan-tagline" style={{ flexGrow: 1 }}>
              Para quem está pronto para elevar.<br />Estratégia, execução e direção.
            </p>
            <div className="plan-stats">
              <div className="stat">
                <span className="stat-num">6</span>
                <span className="stat-label">Posts / mês</span>
              </div>
              <div className="stat-sep" />
              <div className="stat">
                <span className="stat-num">2</span>
                <span className="stat-label">Vídeos / mês</span>
              </div>
            </div>
            <div className="plan-price-block">
              <div>
                <p className="plan-price-label">Investimento mensal</p>
                <p className="plan-price">R$ 1.500</p>
              </div>
              <p className="plan-price-note">Todos os entregáveis<br />incluídos</p>
            </div>
          </Reveal>
        )}

        {/* Aura */}
        {tab === 'aura' && (
          <Reveal delay={1} className="plan-card aura plan-card--solo" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="plan-badge">Flagship</div>
            <div className="plan-name">Aura</div>
            <p className="plan-tagline" style={{ flexGrow: 1 }}>
              Presença máxima.<br />Para marcas que não querem ser vistas, querem ser inevitáveis.
            </p>
            <div className="plan-stats">
              <div className="stat">
                <span className="stat-num">8</span>
                <span className="stat-label">Posts / mês</span>
              </div>
              <div className="stat-sep" />
              <div className="stat">
                <span className="stat-num">4</span>
                <span className="stat-label">Vídeos / mês</span>
              </div>
            </div>
            <div className="plan-price-block">
              <div>
                <p className="plan-price-label">Investimento mensal</p>
                <p className="plan-price">R$ 2.600</p>
              </div>
              <p className="plan-price-note">Volume máximo<br />de produção</p>
            </div>
          </Reveal>
        )}

        {/* Personalizado */}
        {tab === 'personalizado' && (
          <Reveal delay={1} className="plan-card plan-custom plan-card--solo" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="plan-name">Personalizado</div>
            <p className="plan-tagline" style={{ flexGrow: 1 }}>
              Sua marca tem uma história que nenhum plano fixo consegue contar por inteiro.<br /><br />
              Aqui, construímos juntos — volume de posts, vídeos, captações e entregáveis calibrados exatamente para o ritmo e os objetivos da sua marca.
            </p>
            <div className="plan-custom-items">
              <div className="custom-item">
                <span className="custom-bullet">—</span>
                <span>Volume de posts e vídeos sob demanda</span>
              </div>
              <div className="custom-item">
                <span className="custom-bullet">—</span>
                <span>Entregáveis selecionados conforme necessidade</span>
              </div>
              <div className="custom-item">
                <span className="custom-bullet">—</span>
                <span>Branding incluso se necessário</span>
              </div>
              <div className="custom-item">
                <span className="custom-bullet">—</span>
                <span>Projetos pontuais ou contratos mensais</span>
              </div>
            </div>
            <div className="plan-price-block">
              <div>
                <p className="plan-price-label">Investimento</p>
                <p className="plan-price" style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}>Sob consulta</p>
              </div>
              <a href="https://wa.me/5548996534721" className="btn-primary btn-primary--small">
                Conversar →
              </a>
            </div>
          </Reveal>
        )}

        {/* Branding */}
        {tab === 'branding' && (
          <Reveal delay={1} className="plan-card plan-branding plan-card--solo" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="plan-name">Branding</div>
            <p className="plan-tagline" style={{ flexGrow: 1 }}>
              Uma identidade visual não é estética. É a primeira decisão estratégica da sua marca — e a mais permanente.
            </p>

            <div className="plan-branding-includes">
              <p className="plan-branding-label">O que está incluído</p>
              <div className="branding-grid">
                <div className="branding-item">
                  <span className="branding-check">✦</span>
                  <span>Desenvolvimento de logotipo (primário e variações)</span>
                </div>
                <div className="branding-item">
                  <span className="branding-check">✦</span>
                  <span>Paleta de cores estratégica</span>
                </div>
                <div className="branding-item">
                  <span className="branding-check">✦</span>
                  <span>Tipografia principal e secundária</span>
                </div>
                <div className="branding-item">
                  <span className="branding-check">✦</span>
                  <span>Briefing de identidade e posicionamento visual</span>
                </div>
                <div className="branding-item">
                  <span className="branding-check">✦</span>
                  <span>Manual de aplicação da marca</span>
                </div>
                <div className="branding-item">
                  <span className="branding-check">✦</span>
                  <span>Arquivos finais em todos os formatos (SVG, PNG, PDF)</span>
                </div>
              </div>
              <p className="branding-note">
                Incluído no plano <em>Aura</em>. Cobrado à parte no plano <em>Éter</em> ou de forma avulsa.
              </p>
            </div>

            <div className="plan-price-block">
              <div>
                <p className="plan-price-label">Investimento único</p>
                <p className="plan-price">R$ 450</p>
              </div>
              <a href="https://wa.me/5548996534721" className="btn-primary btn-primary--small">
                Solicitar →
              </a>
            </div>
          </Reveal>
        )}

        <style>{`
          .plans-tabs {
            display: flex;
            gap: 2px;
            margin-bottom: 40px;
            border: 1px solid rgba(201,169,110,0.18);
            padding: 4px;
            background: rgba(10,3,5,0.4);
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
          }
          .plans-tab {
            padding: 10px 24px;
            font-family: 'Outfit', sans-serif;
            font-size: 12px;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: rgba(184,175,166,0.55);
            background: transparent;
            border: none;
            cursor: pointer;
            transition: color 0.3s, background 0.3s;
            white-space: nowrap;
          }
          .plans-tab:hover {
            color: rgba(201,169,110,0.75);
          }
          .plans-tab.active {
            background: rgba(201,169,110,0.10);
            color: #C9A96E;
          }
          .plans-tab.active.tab-aura {
            background: rgba(180,110,110,0.10);
            color: #E8A0A0;
          }
          .plans-tab.active.tab-personalizado {
            background: rgba(110,140,180,0.10);
            color: #9BBDE8;
          }
          .plans-tab.active.tab-branding {
            background: rgba(201,169,110,0.14);
            color: #D4BB86;
          }

          .plan-card--solo {
            max-width: 560px;
            margin: 0 auto;
            width: 100%;
          }

          .plan-custom-items {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 24px 0;
            padding: 20px 0;
            border-top: 1px solid rgba(201,169,110,0.12);
            border-bottom: 1px solid rgba(201,169,110,0.12);
          }
          .custom-item {
            display: flex;
            gap: 12px;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            color: rgba(184,175,166,0.8);
            line-height: 1.5;
          }
          .custom-bullet {
            color: #9BBDE8;
            flex-shrink: 0;
            margin-top: 1px;
          }

          .plan-branding-includes {
            margin: 24px 0;
            padding: 20px 0;
            border-top: 1px solid rgba(201,169,110,0.12);
            border-bottom: 1px solid rgba(201,169,110,0.12);
          }
          .plan-branding-label {
            font-family: 'Outfit', sans-serif;
            font-size: 10px;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: rgba(201,169,110,0.55);
            margin-bottom: 16px;
          }
          .branding-grid {
            display: flex;
            flex-direction: column;
            gap: 9px;
            margin-bottom: 18px;
          }
          .branding-item {
            display: flex;
            gap: 12px;
            font-family: 'Outfit', sans-serif;
            font-size: 13.5px;
            color: rgba(184,175,166,0.85);
            line-height: 1.5;
          }
          .branding-check {
            color: #C9A96E;
            font-size: 9px;
            flex-shrink: 0;
            margin-top: 3px;
          }
          .branding-note {
            font-family: 'Outfit', sans-serif;
            font-size: 12px;
            color: rgba(184,175,166,0.45);
            font-style: italic;
            line-height: 1.6;
          }
          .branding-note em {
            color: rgba(201,169,110,0.7);
            font-style: normal;
          }

          .btn-primary--small {
            padding: 10px 20px;
            font-size: 11px;
            letter-spacing: 0.12em;
            align-self: flex-end;
          }

          @media (max-width: 640px) {
            .plans-tabs {
              flex-wrap: wrap;
              width: 100%;
              justify-content: center;
            }
            .plans-tab {
              padding: 9px 16px;
              font-size: 11px;
            }
          }
        `}</style>
      </CenterWrapper>
    </section>
  )
}
