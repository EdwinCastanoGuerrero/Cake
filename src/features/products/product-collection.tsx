import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { WhatsAppIcon } from "@/components/layout/site-shell";
import { products } from "@/features/products/products-data";
import { whatsappUrl } from "@/lib/contact-links";

type Product = (typeof products)[number];

export function ProductCollection({ compact = false }: { compact?: boolean }) {
  const [category, setCategory] = useState("Todos");
  const [selected, setSelected] = useState<Product | null>(null);
  const categories = ["Todos", ...products.map((product) => product.category)];
  const filteredProducts = products.filter(
    (product) => category === "Todos" || product.category === category,
  );

  return (
    <section className="products-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">UM ENCONTRO COM O SABOR</div>
            <h2>
              {compact ? "Nossos queridinhos" : "Nossos produtos"}
              <span className="heading-dot">.</span>
            </h2>
            <p>Descubra o seu novo motivo para adoçar o dia.</p>
          </div>
          {compact && (
            <Button asChild variant="link">
              <Link to="/produtos">
                Ver todos os produtos <ArrowRight />
              </Link>
            </Button>
          )}
        </div>

        {!compact && (
          <div className="product-tabs" role="tablist" aria-label="Categorias de produtos">
            {categories.map((item) => (
              <Button
                key={item}
                variant={category === item ? "default" : "ghost"}
                role="tab"
                aria-selected={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        )}

        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div className="col-md-4" key={product.name}>
              <article className="product-card">
                <div className="product-photo">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={1024}
                    height={768}
                    loading="lazy"
                  />
                  <span className="photo-label">
                    {product.category === "Obleas"
                      ? "O sabor da Colômbia"
                      : product.category === "Alfajores"
                        ? "Irresistíveis"
                        : "Doce tradição"}
                  </span>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="product-open"
                    aria-label={`Conhecer ${product.name}`}
                    onClick={() => setSelected(product)}
                  >
                    <ArrowRight />
                  </Button>
                </div>
                <div className="product-copy">
                  <span className="product-eyebrow">{product.label}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>

        <Dialog
          open={Boolean(selected)}
          onOpenChange={(open) => {
            if (!open) setSelected(null);
          }}
        >
          <DialogContent className="product-dialog">
            {selected && (
              <>
                <img src={selected.image} alt={selected.name} width={1024} height={768} />
                <DialogTitle>{selected.name}</DialogTitle>
                <DialogDescription>{selected.detail}</DialogDescription>
                <Button asChild>
                  <a
                    href={`${whatsappUrl}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${selected.name}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon />
                    Consultar pelo WhatsApp
                  </a>
                </Button>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
