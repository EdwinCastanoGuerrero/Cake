import { useEffect } from "react";

export function usePageMetadata(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", description);
  }, [title, description]);
}
