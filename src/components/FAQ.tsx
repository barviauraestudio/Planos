import { useState } from 'react'
import Reveal from './Reveal'
import CenterWrapper from './CenterWrapper'

const FAQS = [
  {
    q: 'Qual a diferença real entre Éter e Aura?',
    a: 'O conjunto de entregáveis é idêntico em ambos os planos. A única diferença é o volume: Éter entrega 6 posts e 2 vídeos por mês; Aura entrega 8 posts e 4 vídeos. A escolha depende do ritmo de presença que a sua marca precisa ter.',
  },
  {
    q: 'Quantas revisões estão incluídas?',
    a: 'Trabalhamos com revisões razoáveis dentro do escopo aprovado. O processo de briefing e aprovação de roteiros antes da produção existe justamente para minimizar retrabalho. Ajustes pontuais de texto e copy estão sempre incluídos.',
  },
  {
    q: 'Como funciona a captação presencial na Serra Catarinense?',
    a: 'Para clientes na região de Urubici e Serra Catarinense, a captação presencial é realizada quando viável dentro do planejamento mensal. Para clientes remotos, fornecemos orientação técnica completa de ângulo, iluminação, postura e entrega de câmera.',
  },
  {
    q: 'Qual o prazo para entrega dos conteúdos?',
    a: 'O planejamento editorial e roteiros são entregues na primeira semana. Os conteúdos finais (vídeos editados, artes e copys) são entregues de forma escalonada ao longo do mês, respeitando o calendário editorial acordado.',
  },
  {
    q: 'Posso começar com Éter e migrar para Aura?',
    a: 'Sim. O plano Éter é a porta de entrada ideal para marcas em fase de estruturação de presença. A migração para Aura pode ser feita a qualquer momento — geralmente recomendamos após o primeiro mês de alinhamento de marca estabelecido.',
  },
]

function PlusIcon() {
  return (
    <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(prev => prev === i ? null : i)
  }

  return (
    <section id="faq" className="section">
      <CenterWrapper>
      <Reveal className="section-header">
        <p className="section-eyebrow">Dúvidas Frequentes</p>
        <h2 className="section-title"><em>FAQ</em></h2>
        <div className="section-rule" />
      </Reveal>
      <Reveal className="faq-list">
        {FAQS.map((faq, i) => (
          <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
            <button className="faq-q" onClick={() => toggle(i)}>
              {faq.q}
              <PlusIcon />
            </button>
            <div className="faq-a">{faq.a}</div>
          </div>
        ))}
      </Reveal>
      </CenterWrapper>
    </section>
  )
}
