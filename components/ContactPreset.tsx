"use client";
import { useSearchParams } from "next/navigation";
import { ContactForm } from "./ContactForm";

/** Reads ?onderwerp= so links from service pages open the form on the right subject. */
export function ContactPreset() {
  const q = useSearchParams().get("onderwerp") ?? undefined;
  return <ContactForm key={q} preset={q} />;
}
