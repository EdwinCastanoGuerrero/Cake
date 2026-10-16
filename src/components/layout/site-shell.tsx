import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { Menu, X, ArrowUpRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { instagramUrl, whatsappUrl } from "@/lib/contact-links";
import logo from "@/assets/logo.png";

export function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
      <path d="M8.3 7.4c-.4-.2-.9.4-.9 1.2 0 2.5 3.5 6.3 6.2 6.5.9.1 1.8-1 1.5-1.4l-2-1c-.3-.2-.7.7-1 .7-.9-.1-3-2-3.2-2.8 0-.3.8-.8.6-1.1Z" />
    </svg>
  );
}
export function BrandLogo() {
  return (
    <span className="brand-logo">
      <img src={logo} alt="Confeitaria Colômbia" width={96} height={96} />
    </span>
  );
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          to="/"
          className="brand"
          aria-label="Confeitaria Colômbia — início"
          onClick={() => setOpen(false)}
        >
          <BrandLogo />
          <span className="brand-wordmark">
            Confeitaria
            <strong>
              Colômbia<span className="brand-dot">.</span>
            </strong>
          </span>
        </Link>
        <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Navegação principal">
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Início
          </NavLink>
          <NavLink to="/quem-somos" onClick={() => setOpen(false)}>
            Quem somos
          </NavLink>
          <NavLink to="/produtos" onClick={() => setOpen(false)}>
            Produtos
          </NavLink>
          <Button asChild variant="outline" className="contact-nav">
            <Link to="/contato" onClick={() => setOpen(false)}>
              Contato <ArrowUpRight size={16} />
            </Link>
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Link to="/" className="brand">
          <BrandLogo />
          <span className="brand-wordmark">
            Confeitaria
            <strong>
              Colômbia<span className="brand-dot">.</span>
            </strong>
          </span>
        </Link>
        <p>
          Um pedacinho da Colômbia.
          <br />
          Um mundo de sabores.
        </p>
        <a href={instagramUrl} target="_blank" rel="noreferrer" className="instagram-link">
          <Instagram size={18} />
          @confeitariacolombia1 <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Confeitaria Colômbia. Todos os direitos reservados.
        </span>
        <span className="footer-heart">
          Feito com carinho <HeartMark />
        </span>
      </div>
    </footer>
  );
}
function HeartMark() {
  return <span className="heart-mark">♡</span>;
}
export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={`${whatsappUrl}?text=${encodeURIComponent("Olá! Gostaria de conhecer os produtos da Confeitaria Colômbia.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      title="Conversar no WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

export function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
