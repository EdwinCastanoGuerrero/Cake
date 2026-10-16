import { ArrowDown, ArrowRight, Coffee, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ContactBand } from "@/features/contact/contact-band";
import { FaqSection } from "@/features/faq/faq-section";
import { ProductCollection } from "@/features/products/product-collection";
import { usePageMetadata } from "@/lib/page-metadata";
import background from "@/assets/obleas-background.jpg";

export function HomePage() {
  usePageMetadata(
    "Confeitaria Colômbia | Um pedacinho da Colômbia",
    "Descubra obleas, alfajores e doces com o sabor da Colômbia. Conheça nossos produtos e fale conosco.",
  );

  return (
    <main>
      <section className="home-hero">
        <img
          className="hero-background"
          src={background}
          alt="Obleas colombianas com recheios sobre uma mesa"
          fetchPriority="high"
        />
        <div className="hero-wash" />
        <div className="container hero-inner">
          <div className="eyebrow">
            <span className="flag-mini">
              <i />
              <i />
              <i />
            </span>
            Um pedaço da Colômbia no Brasil
            <span className="flag-mini">
              <i />
              <i />
              <i />
            </span>
          </div>
          <h1>
            Confeitaria
            <br />
            Colômbia<span>Uma doce tradição.</span>
          </h1>
          <p>
            Sabores que contam histórias, despertam sorrisos
            <br className="desktop-break" /> e levam um pedacinho da Colômbia até você.
          </p>
          <Button asChild size="lg">
            <Link to="/produtos">
              Conheça nossos produtos <ArrowRight size={18} />
            </Link>
          </Button>
          <div className="hero-note">
            <Heart size={15} /> Feito com carinho. Compartilhado com amor.
          </div>
        </div>
          {/* <ArrowDown size={17} /> */}
      </section>

      <section className="values-strip">
        <div className="container">
          <div>
            <Heart />
            <span>Carinho em cada detalhe</span>
          </div>
          <div>
            <Sparkles />
            <span>A essência dos sabores colombianos</span>
          </div>
          <div>
            <Coffee />
            <span>Para adoçar seus momentos</span>
          </div>
        </div>
      </section>
      <ProductCollection compact />
      <section className="story-band">
        <div className="container row align-items-center g-5 mx-auto">
          <div className="col-md-6">
            <h2>
              De coração colombiano.
              <br />
              Para a sua mesa.
            </h2>
          </div>
          <div className="col-md-6">
            <p>
              Que tal conhecer um pouco de nossa história?
            </p>
            <Button variant="link" asChild>
              <Link to="/quem-somos">
                Conheça a nossa história <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <FaqSection />
      <ContactBand />
    </main>
  );
}
