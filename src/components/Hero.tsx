import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import CenterWrapper from './CenterWrapper'
import FadeContent from './FadeContent'

const TITLE_WORDS = [
  { text: 'Escolha', breakAfter: false },
  { text: 'a', breakAfter: false },
  { text: 'intensidade', breakAfter: true },
  { text: 'da', breakAfter: false },
  { text: 'sua', breakAfter: false },
  { text: 'presença.', breakAfter: false, accent: true },
]

const fromSnap = { filter: 'blur(10px)', opacity: 0, y: -50 }

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const title = titleRef.current
    if (!title) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, { threshold: 0.01 })
    observer.observe(title)
    return () => observer.disconnect()
  }, [])

  function onMouseMove(event: React.MouseEvent) {
    const x = (event.clientX / window.innerWidth - 0.5) * 22
    const y = (event.clientY / window.innerHeight - 0.5) * 16
    if (glowRef.current) glowRef.current.style.transform = `translate(${x}px, ${y}px)`
  }

  return (
    <section id="hero" onMouseMove={onMouseMove}>
      <div className="hero-glow" ref={glowRef} />
      <div className="hero-line" />
      <div className="hero-ring" />
      <div className="hero-ring hero-ring-2" />
      <CenterWrapper>
        <FadeContent duration={900} delay={100} threshold={0.01}>
          <p className="studio-label">· Barví Aura Estúdio ·</p>
        </FadeContent>

        <h1 ref={titleRef} className="hero-title plans-hero-title">
          {TITLE_WORDS.map((word, index) => (
            <span key={`${word.text}-${index}`}>
              <motion.span
                className="hero-word"
                initial={fromSnap}
                animate={inView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : fromSnap}
                transition={{ duration: 1.1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={word.accent ? { color: 'var(--gold)', fontStyle: 'italic' } : undefined}
              >
                {word.text}
              </motion.span>
              {index < TITLE_WORDS.length - 1 && !word.breakAfter && '\u00A0'}
              {word.breakAfter && <br />}
            </span>
          ))}
        </h1>

        <FadeContent duration={900} delay={720} blur threshold={0.01}>
          <div className="hero-divider" />
        </FadeContent>
        <FadeContent duration={900} delay={880} blur threshold={0.01}>
          <p className="hero-tagline plans-hero-tagline">
            Estratégia, direção criativa e produção de conteúdo em planos desenhados para o momento da sua marca.
          </p>
        </FadeContent>
        <FadeContent duration={900} delay={1080} threshold={0.01}>
          <a className="scroll-cue" href="#planos">
            <span>Explorar planos</span>
            <div className="scroll-line" />
          </a>
        </FadeContent>
      </CenterWrapper>
    </section>
  )
}
