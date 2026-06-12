import CenterWrapper from './CenterWrapper'
import FadeContent from './FadeContent'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function CTA() {
  return (
    <section id="cta">
      <div className="cta-glow" />
      <CenterWrapper>
        <FadeContent duration={900} blur>
          <div className="cta-content">
            <p className="cta-eyebrow">Próximos passos</p>
            <h2 className="cta-title">
              Escolha um plano.<br />Ou desenhe o seu<br /><em>com a gente.</em>
            </h2>
            <p className="cta-sub">
              Uma conversa sem compromisso para entender o momento da sua marca e indicar a intensidade certa.
            </p>
            <div className="cta-buttons">
              <a href="https://wa.me/5548996534721?text=Ol%C3%A1%2C%20Arthur!%20Vim%20pela%20p%C3%A1gina%20de%20planos%20e%20gostaria%20de%20conversar." className="btn-primary">
                Arthur — Agendar conversa <ArrowIcon />
              </a>
              <a href="https://wa.me/5548988779117?text=Ol%C3%A1%2C%20Maria%20Helena!%20Vim%20pela%20p%C3%A1gina%20de%20planos%20e%20gostaria%20de%20conversar." className="btn-primary">
                Maria Helena — Agendar conversa <ArrowIcon />
              </a>
              <a href="mailto:Barviauraestudio@gmail.com" className="btn-secondary">Enviar e-mail</a>
            </div>
          </div>
        </FadeContent>
      </CenterWrapper>
    </section>
  )
}
