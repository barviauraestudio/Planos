import Reveal from './Reveal'
import CenterWrapper from './CenterWrapper'

function IconCalendar() {
  return (
    <svg className="del-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  )
}

function IconPen() {
  return (
    <svg className="del-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 20h9M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.864a.5.5 0 0 1-.62-.62l.864-2.872a2 2 0 0 1 .506-.854z"/>
    </svg>
  )
}

function IconDoc() {
  return (
    <svg className="del-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  )
}

function IconMonitor() {
  return (
    <svg className="del-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/>
    </svg>
  )
}

function IconCamera() {
  return (
    <svg className="del-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/>
      <circle cx="12" cy="13" r="3"/>
    </svg>
  )
}

function IconBrush() {
  return (
    <svg className="del-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/>
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1 1 2.48 1.02 3.5 1.02 1.66 0 3-1.34 3-3.02 0-1.67-1.34-3.04-3-3.04z"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg className="del-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
    </svg>
  )
}

function IconChat() {
  return (
    <svg className="del-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )
}

function IconSun() {
  return (
    <svg className="del-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="3"/>
      <path d="M3 12h1m16 0h1M12 3v1m0 16v1m-7-17 .7.7m12.6 0-.7.7M4.7 19.3l.7-.7m12.6 0-.7-.7"/>
    </svg>
  )
}

function IconUsers() {
  return (
    <svg className="del-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

export default function Deliverables() {
  return (
    <section id="entregaveis" className="section">
      <CenterWrapper>
        <Reveal className="section-header">
          <p className="section-eyebrow">O que você recebe</p>
          <h2 className="section-title">Os <em>Entregáveis</em></h2>
          <div className="section-rule" />
        </Reveal>
        <Reveal>
          <p className="deliverables-intro">
            Todos os entregáveis abaixo estão incluídos em ambos os planos. A diferença entre Éter e Aura é o volume de conteúdo produzido por mês — e o branding, que está incluído no Aura e cobrado à parte no Éter (R$ 450).
          </p>
        </Reveal>

        <Reveal className="del-category">
          <p className="del-category-label">01 · Estratégia</p>
          <div className="del-grid">
            <Reveal delay={1} className="del-card">
              <IconCalendar />
              <p className="del-title">Estratégia de Conteúdo Mensal</p>
              <p className="del-desc">Planejamento completo do mês: temas, formatos, datas e objetivos de cada publicação — todos alinhados ao seu posicionamento de marca.</p>
            </Reveal>
            <Reveal delay={2} className="del-card">
              <IconPen />
              <p className="del-title">Legendas e Copys</p>
              <p className="del-desc">Textos de todos os posts escritos com linguagem estratégica, adequados ao tom da sua marca e às boas práticas do algoritmo.</p>
            </Reveal>
            <Reveal delay={3} className="del-card">
              <IconDoc />
              <p className="del-title">Roteiros</p>
              <p className="del-desc">Roteiros com estrutura narrativa, ganchos de atenção e call to action definidos para máxima retenção e conversão.</p>
            </Reveal>
          </div>
        </Reveal>

        <Reveal className="del-category">
          <p className="del-category-label">02 · Produção</p>
          <div className="del-grid">
            <Reveal delay={1} className="del-card">
              <IconMonitor />
              <p className="del-title">Capas dos Vídeos</p>
              <p className="del-desc">Design de thumbnail para cada vídeo, desenvolvido para maximizar cliques e manter identidade visual consistente em todo o perfil.</p>
            </Reveal>
            <Reveal delay={2} className="del-card">
              <IconCamera />
              <p className="del-title">Captação (Presencial ou Remota)</p>
              <p className="del-desc">Quando viável, captação presencial. Quando remoto, orientação completa: ângulo, luz, postura, fala e entrega de câmera.</p>
            </Reveal>
            <Reveal delay={3} className="del-card">
              <IconBrush />
              <p className="del-title">Branding</p>
              <p className="del-desc">
                Desenvolvimento ou reformulação completa de identidade visual — logotipo, paleta, tipografia e manual de marca. Incluído no plano Aura. No plano Éter, cobrado à parte por R$ 450.
              </p>
            </Reveal>
          </div>
        </Reveal>

        <Reveal className="del-category">
          <p className="del-category-label">03 · Assessoria de Posicionamento</p>
          <div className="del-grid">
            <Reveal delay={1} className="del-card">
              <IconClock />
              <p className="del-title">Guia de Stories</p>
              <p className="del-desc">Orientação mensal de como usar os stories de forma estratégica: sequência, linguagem, frequência e intenção de cada publicação.</p>
            </Reveal>
            <Reveal delay={2} className="del-card">
              <IconChat />
              <p className="del-title">Linha de Raciocínio</p>
              <p className="del-desc">Direcionamento de como você deve se comunicar, se posicionar e raciocinar publicamente — dentro e fora das redes sociais.</p>
            </Reveal>
            <Reveal delay={3} className="del-card">
              <IconSun />
              <p className="del-title">Guia de Posicionamento</p>
              <p className="del-desc">Análise contínua de como sua marca está sendo percebida, com ajustes estratégicos ao longo do mês conforme necessário.</p>
            </Reveal>
            <Reveal delay={4} className="del-card">
              <IconUsers />
              <p className="del-title">Reunião (quando necessário)</p>
              <p className="del-desc">Alinhamentos pontuais por chamada, presencial ou áudio sempre que houver necessidade de ajuste ou direcionamento estratégico.</p>
            </Reveal>
          </div>
        </Reveal>
      </CenterWrapper>
    </section>
  )
}
