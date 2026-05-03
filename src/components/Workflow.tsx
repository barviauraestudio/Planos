import Reveal from './Reveal'
import CenterWrapper from './CenterWrapper'

const STEPS = [
  {
    num: '01',
    week: 'Semana 1',
    title: 'Briefing & Estratégia',
    desc: 'Reunião de alinhamento, definição dos temas do mês, datas e formatos. Entregamos o plano editorial completo antes da produção começar.',
  },
  {
    num: '02',
    week: 'Semana 1–2',
    title: 'Roteiros & Copys',
    desc: 'Desenvolvimento de todos os roteiros e legendas estratégicas, revisados e aprovados antes da captação.',
  },
  {
    num: '03',
    week: 'Semana 2–3',
    title: 'Captação & Produção',
    desc: 'Captação presencial ou orientação remota completa. Edição, thumbnail e entrega de todos os vídeos e artes finais.',
  },
  {
    num: '04',
    week: 'Semana 4',
    title: 'Publicação & Monitoramento',
    desc: 'Acompanhamento do desempenho, ajustes de posicionamento e guia de stories para encerrar o mês com consistência de marca.',
  },
]

export default function Workflow() {
  return (
    <section id="fluxo" className="section">
      <CenterWrapper>
      <Reveal className="section-header">
        <p className="section-eyebrow">Processo Mensal</p>
        <h2 className="section-title">Como <em>funciona</em></h2>
        <div className="section-rule" />
      </Reveal>
      <div className="workflow-track">
        <div className="workflow-line" />
        {STEPS.map((step, i) => (
          <Reveal key={step.num} delay={(i + 1) as 1 | 2 | 3 | 4} className="workflow-step">
            <div className="step-num">{step.num}</div>
            <div className="step-body">
              <p className="step-week">{step.week}</p>
              <p className="step-title">{step.title}</p>
              <p className="step-desc">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      </CenterWrapper>
    </section>
  )
}
