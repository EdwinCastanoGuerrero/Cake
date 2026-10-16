import { ContactBand } from "@/features/contact/contact-band";
import { ProductCollection } from "@/features/products/product-collection";
import { usePageMetadata } from "@/lib/page-metadata";

export function ProductsPage() {
  usePageMetadata(
    "Produtos | Confeitaria Colômbia",
    "Explore nossas categorias de obleas, alfajores, doces e arequipe. Consulte opções pelo WhatsApp.",
  );

  return (
    <main>
      <ProductCollection />
      <ContactBand />
    </main>
  );
}
