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

        {tab === 'eter' && (
          <Reveal delay={1} className="plan-card eter plan-card--solo" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="plan-name">Éter</div>
            <p className="plan-tagline" style={{ flexGrow: 1 }}>
              Para quem está pronto para elevar.<br />Estratégia, execução e direção.
            </p>
            <div className="plan-stats">
              <div className="stat"><span className="stat-num">6</span><span className="stat-label">Posts / mês</span></div>
              <div className="stat-sep" />
              <div className="stat"><span className="stat-num">2</span><span className="stat-label">Vídeos / mês</span></div>
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

        {tab === 'aura' && (
          <Reveal delay={1} className="plan-card aura plan-card--solo" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="plan-badge">Flagship</div>
            <div className="plan-name">Aura</div>
            <p className="plan-tagline" style={{ flexGrow: 1 }}>
              Presença máxima.<br />Para marcas que não querem ser vistas, querem ser inevitáveis.
            </p>
            <div className="plan-stats">
              <div className="stat"><span className="stat-num">8</span><span className="stat-label">Posts / mês</span></div>
              <div className="stat-sep" />
              <div className="stat"><span className="stat-num">4</span><span className="stat-label">Vídeos / mês</span></div>
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

        {tab === 'personalizado' && (
          <Reveal delay={1} className="plan-card plan-custom plan-card--solo" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="plan-name" style={{ fontSize: 'clamp(36px,5.5vw,68px)' }}>Sob Medida</div>
            <p className="plan-tagline" style={{ flexGrow: 1 }}>
              Sua marca tem uma história que nenhum plano fixo consegue contar por inteiro.<br /><br />
              Construímos juntos — volume, entregáveis e cadência calibrados exatamente para o seu ritmo.
            </p>
            <div className="plan-custom-items">
              {['Volume de posts e vídeos sob demanda','Entregáveis selecionados conforme necessidade','Branding incluso se necessário','Projetos pontuais ou contratos mensais'].map(i => (
                <div className="custom-item" key={i}><span className="custom-bullet">—</span><span>{i}</span></div>
              ))}
            </div>
            <div className="plan-price-block">
              <div>
                <p className="plan-price-label">Investimento</p>
                <p className="plan-price" style={{ fontSize: 'clamp(18px,3vw,28px)', letterSpacing: '0.04em' }}>Sob consulta</p>
              </div>
              <a href="https://wa.me/5548996534721" className="btn-primary btn-primary--small">Conversar →</a>
            </div>
          </Reveal>
        )}

        {tab === 'branding' && (
          <Reveal delay={1} className="plan-card plan-branding plan-card--solo" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="plan-name" style={{ fontSize: 'clamp(40px,5.5vw,68px)' }}>Branding</div>
            <p className="plan-tagline" style={{ flexGrow: 1 }}>
              Uma identidade visual não é estética. É a primeira decisão estratégica da sua marca — e a mais permanente.
            </p>
            <div className="plan-branding-includes">
              <p className="plan-branding-label">O que está incluído</p>
              <div className="branding-grid">
                {['Desenvolvimento de logotipo (primário e variações)','Paleta de cores estratégica','Tipografia principal e secundária','Briefing de identidade e posicionamento visual','Manual de aplicação da marca','Arquivos finais em todos os formatos (SVG, PNG, PDF)'].map(item => (
                  <div className="branding-item" key={item}><span className="branding-check">✦</span><span>{item}</span></div>
                ))}
              </div>
              <p className="branding-note">Incluído no plano <em>Aura</em>. Cobrado à parte no plano <em>Éter</em> ou de forma avulsa.</p>
            </div>
            <div className="plan-price-block">
              <div>
                <p className="plan-price-label">Investimento único</p>
                <p className="plan-price">R$ 450</p>
              </div>
              <a href="https://wa.me/5548996534721" className="btn-primary btn-primary--small">Solicitar →</a>
            </div>
          </Reveal>
        )}

        <style>{`
          .plans-tabs {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            width: 100%;
            max-width: 560px;
            margin: 0 auto 40px;
            border: 1px solid rgba(201,169,110,0.18);
            background: rgba(10,3,5,0.4);
            overflow: hidden;
          }
          .plans-tab {
            flex: 1 1 0;
            min-width: 0;
            padding: 12px 4px;
            font-family: 'Outfit', sans-serif;
            font-size: 9.5px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: rgba(184,175,166,0.5);
            background: transparent;
            border: none;
            border-right: 1px solid rgba(201,169,110,0.1);
            cursor: pointer;
            transition: color 0.3s, background 0.3s;
            white-space: nowrap;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .plans-tab:last-child { border-right: none; }
          .plans-tab:hover { color: rgba(201,169,110,0.75); }
          .plans-tab.active { background: rgba(201,169,110,0.09); color: #C9A96E; }
          .plans-tab.active.tab-aura { background: rgba(180,110,110,0.09); color: #E8A0A0; }
          .plans-tab.active.tab-personalizado { background: rgba(110,140,180,0.09); color: #9BBDE8; }
          .plans-tab.active.tab-branding { background: rgba(201,169,110,0.12); color: #D4BB86; }

          .plan-card--solo { max-width: 560px; margin: 0 auto; width: 100%; }

          .plan-custom-items {
            display: flex; flex-direction: column; gap: 10px;
            margin: 24px 0; padding: 20px 0;
            border-top: 1px solid rgba(201,169,110,0.12);
            border-bottom: 1px solid rgba(201,169,110,0.12);
          }
          .custom-item { display: flex; gap: 12px; font-family: 'Outfit', sans-serif; font-size: 14px; color: rgba(184,175,166,0.8); line-height: 1.5; }
          .custom-bullet { color: #9BBDE8; flex-shrink: 0; margin-top: 1px; }

          .plan-branding-includes {
            margin: 24px 0; padding: 20px 0;
            border-top: 1px solid rgba(201,169,110,0.12);
            border-bottom: 1px solid rgba(201,169,110,0.12);
          }
          .plan-branding-label { font-family: 'Outfit', sans-serif; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(201,169,110,0.55); margin-bottom: 16px; }
          .branding-grid { display: flex; flex-direction: column; gap: 9px; margin-bottom: 18px; }
          .branding-item { display: flex; gap: 12px; font-family: 'Outfit', sans-serif; font-size: 13.5px; color: rgba(184,175,166,0.85); line-height: 1.5; }
          .branding-check { color: #C9A96E; font-size: 9px; flex-shrink: 0; margin-top: 3px; }
          .branding-note { font-family: 'Outfit', sans-serif; font-size: 12px; color: rgba(184,175,166,0.45); font-style: italic; line-height: 1.6; }
          .branding-note em { color: rgba(201,169,110,0.7); font-style: normal; }

          .btn-primary--small { padding: 10px 18px; font-size: 10px; letter-spacing: 0.1em; }
        `}</style>
      </CenterWrapper>
    </section>
  )
}
