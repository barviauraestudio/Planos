import { useEffect, useRef } from 'react'
import CenterWrapper from './CenterWrapper'

type Props = {
  menuOpen: boolean
  onToggle: () => void
}

export default function Nav({ menuOpen, onToggle }: Props) {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function onScroll() {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="nav" ref={navRef}>
      <CenterWrapper>
        <div className="nav-logo">Barví Aura Estúdio</div>
        <ul className="nav-links">
          <li><a href="#planos">Planos</a></li>
          <li><a href="#entregaveis">Entregáveis</a></li>
          <li><a href="#fluxo">Processo</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#cta">Contato</a></li>
        </ul>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Menu"
          onClick={onToggle}
        >
          <span /><span /><span />
        </button>
      </CenterWrapper>
    </nav>
  )
}
