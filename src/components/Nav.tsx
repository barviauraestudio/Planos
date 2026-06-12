import { useEffect, useRef } from 'react'

type Props = {
  menuOpen: boolean
  onToggle: () => void
}

const LINKS = [
  ['#planos', 'Planos'],
  ['#comparativo', 'Comparativo'],
  ['#entregaveis', 'Entregáveis'],
  ['#fluxo', 'Processo'],
  ['#faq', 'FAQ'],
  ['#cta', 'Contato'],
]

export default function Nav({ menuOpen, onToggle }: Props) {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function onScroll() {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 100)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="nav" ref={navRef}>
      <ul className="nav-links">
        {LINKS.map(([href, label]) => (
          <li key={href}><a href={href}>{label}</a></li>
        ))}
      </ul>
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={onToggle}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
