import { createRef } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

describe("Componentes UI", () => {
  it("renderiza botões nativos e encaminha ref no React 19", () => {
    const buttonRef = createRef<HTMLButtonElement>();

    render(<Button ref={buttonRef}>Continuar</Button>);

    const button = screen.getByRole("button", { name: "Continuar" });
    expect(buttonRef.current).toBe(button);
  });

  it("mantém o modo asChild para compor botão e link", () => {
    render(
      <Button asChild>
        <a href="/produtos">Ver produtos</a>
      </Button>,
    );

    expect(screen.getByRole("link", { name: "Ver produtos" })).toHaveAttribute("href", "/produtos");
  });

  it("mantém o comportamento acessível do Radix Dialog e encaminha ref", () => {
    const contentRef = createRef<HTMLDivElement>();

    render(
      <Dialog defaultOpen>
        <DialogContent ref={contentRef}>
          <DialogTitle>Detalhes do produto</DialogTitle>
          <DialogDescription>Informações sobre o produto.</DialogDescription>
        </DialogContent>
      </Dialog>,
    );

    const dialog = screen.getByRole("dialog", { name: "Detalhes do produto" });
    expect(contentRef.current).toBe(dialog);
    expect(screen.getByText("Informações sobre o produto.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Close" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
