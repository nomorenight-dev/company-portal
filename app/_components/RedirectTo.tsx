"use client";

import { useEffect } from "react";

export default function RedirectTo({ href }: { href: string }) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <p className="text-sm text-muted">
      This page has moved.{" "}
      <a
        href={href}
        className="underline underline-offset-4 decoration-border hover:decoration-foreground"
      >
        Continue
      </a>
      .
    </p>
  );
}
