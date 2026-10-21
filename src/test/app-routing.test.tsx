import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { AppRoutes } from "@/App";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

describe("Navegação do site", () => {
  it("abre a página inicial e navega para produtos", () => {
    renderAt("/");

    expect(screen.getByText("Uma doce tradição.")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("link", { name: "Produtos" }));
    expect(screen.getByRole("heading", { name: /Nossos produtos/ })).toBeInTheDocument();
  });

  it("abre a página de contato por URL", () => {
    renderAt("/contato");

    expect(screen.getByRole("heading", { name: /possibilidades doces/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /iniciar uma conversa/i })).toHaveAttribute(
      "href",
      "https://wa.me/5541984318684",
    );
  });

  it("mostra a página de não encontrado para caminhos inexistentes", () => {
    renderAt("/pagina-inexistente");

    expect(screen.getByRole("heading", { name: "Página não encontrada" })).toBeInTheDocument();
  });
});
