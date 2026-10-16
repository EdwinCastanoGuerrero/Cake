import { Route, Routes } from "react-router";
import { SiteLayout } from "@/components/layout/site-shell";
import { ContactPage } from "@/routes/contato";
import { HomePage } from "@/routes/index";
import { NotFoundPage } from "@/routes/not-found";
import { ProductsPage } from "@/routes/produtos";
import { AboutPage } from "@/routes/quem-somos";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="quem-somos" element={<AboutPage />} />
        <Route path="produtos" element={<ProductsPage />} />
        <Route path="contato" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
