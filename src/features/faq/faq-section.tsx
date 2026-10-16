import { useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/contact-links";
import { faqs } from "./faq-data";

export function FaqSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <div className="container faq-layout">
        <div>
          <div className="eyebrow">PODEMOS AJUDAR?</div>
          <h2>
            Uma doce resposta
            <br />
            para cada dúvida.
          </h2>
          <p>
            Se a sua pergunta não está aqui,
            <br />a gente conversa pelo WhatsApp.
          </p>
          <Button variant="link" asChild>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Fale com a gente <ArrowRight />
            </a>
          </Button>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${active === index ? "expanded" : ""}`} key={faq.q}>
              <Button
                variant="ghost"
                className="faq-trigger"
                aria-expanded={active === index}
                aria-controls={`faq-${index}`}
                onClick={() => setActive(active === index ? null : index)}
              >
                {faq.q}
                {active === index ? <Minus size={18} /> : <Plus size={18} />}
              </Button>
              <div id={`faq-${index}`} hidden={active !== index} className="faq-answer">
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
