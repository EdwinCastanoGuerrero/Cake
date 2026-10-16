import { ArrowUpRight, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/features/faq/faq-section";
import { WhatsAppIcon } from "@/components/layout/site-shell";
import { instagramUrl, whatsappUrl } from "@/lib/contact-links";
import { usePageMetadata } from "@/lib/page-metadata";

export function ContactPage() {
  usePageMetadata(
    "Contato | Confeitaria Colômbia",
    "Converse com a Confeitaria Colômbia pelo WhatsApp (41) 98431-8684 ou pelo Instagram @confeitariacolombia.",
  );

  return (
    <main>
      <section className="contact-page container">
        <div className="eyebrow">VAMOS CONVERSAR</div>
        <h1>
          Um olá. Muitas
          <br />
          possibilidades doces<span className="heading-dot">.</span>
        </h1>
        <p>
          Para pedidos, encomendas ou só para tirar uma dúvida.
          <br />
          Vai ser um prazer falar com você.
        </p>
        <div className="row g-4 contact-options">
          <div className="col-md-6">
            <div className="contact-option">
              <WhatsAppIcon size={32} />
              <h2>WhatsApp</h2>
              <p>
                <Phone size={16} /> (41) 98431-8684
              </p>
              <Button asChild>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Iniciar uma conversa <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-option">
              <Instagram size={32} />
              <h2>Instagram</h2>
              <p>@confeitariacolombia</p>
              <Button asChild variant="outline">
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  Acompanhe nossos sabores <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <FaqSection />
    </main>
  );
}
