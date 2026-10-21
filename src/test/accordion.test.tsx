import { createRef } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

describe("Accordion", () => {
  it("preserva o comportamento do Radix e encaminha ref no React 19", () => {
    const triggerRef = createRef<HTMLButtonElement>();

    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger ref={triggerRef}>Pergunta frequente</AccordionTrigger>
          <AccordionContent>Resposta da pergunta</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: "Pergunta frequente" });
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(triggerRef.current).toBe(trigger);
    expect(screen.getByText("Resposta da pergunta")).toBeInTheDocument();

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
});
