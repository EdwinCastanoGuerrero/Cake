import { ContactBand } from "@/features/contact/contact-band";
import { usePageMetadata } from "@/lib/page-metadata";
import background from "@/assets/obleas-background.jpg";

export function AboutPage() {
  usePageMetadata(
    "Quem somos | Confeitaria Colômbia",
    "Conheça a Confeitaria Colômbia. De coração colombiano, para a sua mesa.",
  );

  return (
    <main>
      <section className="about-page container">
        <div className="eyebrow">NOSSAS RAÍZES, NOSSO CARINHO</div>
        <h1>
          Quem somos<span className="heading-dot">.</span>
        </h1>
        <div className="row g-5 align-items-center">
          <div className="col-md-6">
            <img
              className="about-image"
              src={background}
              alt="Obleas colombianas sobre uma mesa"
              width={1376}
              height={768}
            />
          </div>
          <div className="col-md-6">
            <h2>
              De coração colombiano.
              <br />
              Para a sua mesa.
            </h2>
            <p>
              Tem sabores que aproximam, trazem lembranças e transformam um momento simples em algo
              especial.
            </p>
            <div className="story-placeholder">
              <span>Nossa história</span>
              <p>
                Em breve, nossa trajetória, nossas inspirações e as pessoas por trás de cada sabor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
