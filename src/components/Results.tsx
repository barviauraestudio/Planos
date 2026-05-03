import Reveal from './Reveal'
import CenterWrapper from './CenterWrapper'

const RESULTS = [
  { num: '3×', label: 'Consistência de conteúdo\nem relação à média do mercado' },
  { num: '↑', label: 'Autoridade percebida\ne reconhecimento de marca' },
  { num: '100%', label: 'Conteúdo estratégico.\nZero improviso.' },
]

export default function Results() {
  return (
    <section id="resultados" className="section" style={{ minHeight: 'auto', paddingTop: 0 }}>
      <CenterWrapper>
      <Reveal className="section-header" style={{ marginBottom: 44 }}>
        <p className="section-eyebrow">Resultados Esperados</p>
        <h2 className="section-title" style={{ fontSize: 'clamp(30px,4vw,50px)' }}>
          O que <em>muda</em>
        </h2>
      </Reveal>
      <Reveal className="results-grid">
        {RESULTS.map((r) => (
          <div className="result-item" key={r.num}>
            <div className="result-num">{r.num}</div>
            <p className="result-label">{r.label}</p>
          </div>
        ))}
      </Reveal>
      </CenterWrapper>
    </section>
  )
}
