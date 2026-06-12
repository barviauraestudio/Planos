type Props = {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <div className={`mobile-menu${open ? ' open' : ''}`}>
      <a href="#planos" onClick={onClose}>Planos</a>
      <a href="#comparativo" onClick={onClose}>Comparativo</a>
      <a href="#entregaveis" onClick={onClose}>Entregáveis</a>
      <a href="#fluxo" onClick={onClose}>Processo</a>
      <a href="#faq" onClick={onClose}>FAQ</a>
      <div className="mobile-menu-line" />
      <a href="#cta" onClick={onClose}>Contato</a>
      <p className="mobile-menu-contact">Urubici · Serra Catarinense</p>
    </div>
  )
}
