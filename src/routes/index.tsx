import { ArrowRight, Candy, Coffee, Heart } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ContactBand } from "@/features/contact/contact-band";
import { FaqSection } from "@/features/faq/faq-section";
import { ProductCollection } from "@/features/products/product-collection";
import { usePageMetadata } from "@/lib/page-metadata";
import carouselData from "@/data/caroouselData.json";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function HomePage() {
  usePageMetadata(
    "Confeitaria Colômbia | Um pedacinho da Colômbia",
    "Descubra obleas, alfajores e doces com o sabor da Colômbia. Conheça nossos produtos e fale conosco.",
  );

  return (
    <main>
      <section className="home-hero">
        <Swiper modules={[Autoplay, Pagination]} pagination autoplay={{ delay: 3000, disableOnInteraction: false }} fadeEffect={{ crossFade: true }} loop={true}>
          {carouselData.slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                className="hero-background"
                src={slide.src}
                alt={slide.alt}
                fetchPriority="high"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero-wash" />
        <div className="container hero-inner">
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

          <div className="eyebrow">

            Um pedaço da Colômbia no Brasil

          </div>
          <div className="flags">
            <div className="flag-brazil">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="flag-colombia">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
      </section>

      <section className="values-strip">
        <div className="container">
          <div>
            <Heart />
            <span>Carinho em cada detalhe</span>
          </div>
          <div>
            <Coffee />
            <span>A essência dos sabores colombianos</span>
          </div>
          <div>
            <Candy />
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
            <p>Que tal conhecer um pouco de nossa história?</p>
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
