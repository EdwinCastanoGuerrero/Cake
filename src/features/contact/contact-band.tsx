import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/layout/site-shell";
import { whatsappUrl } from "@/lib/contact-links";

export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="container">
        <div>
          <div className="eyebrow">VAMOS ADOÇAR O SEU DIA?</div>
          <h2>
            O próximo momento especial
            <br />
            começa com um olá.
          </h2>
        </div>
        <Button asChild size="lg">
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            Fale pelo WhatsApp <ArrowRight />
          </a>
        </Button>
      </div>
    </section>
  );
}
