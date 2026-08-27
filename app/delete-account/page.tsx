import type { Metadata } from "next";
import SiteShell from "../_components/SiteShell";

export const metadata: Metadata = {
  title: "Delete Account — NoMoreNight, LLC",
  description:
    "How to delete your account and data from any NoMoreNight product.",
};

const apps = [
  {
    name: "With Diary",
    description:
      "Permanently delete your diary account, all entries, and photo attachments.",
    href: "/with-diary/delete-account",
  },
];

export default function DeleteAccountIndex() {
  return (
    <SiteShell>
      <div className="max-w-2xl mx-auto px-6 py-20 sm:py-28">

        <div className="mb-14">
          <p className="text-sm text-muted-fg mb-4">
            NoMoreNight, LLC
          </p>
          <h1 className="text-3xl sm:text-4xl tracking-tight text-foreground mb-4">
            Delete Account
          </h1>
          <p className="text-sm text-muted leading-relaxed">
            Select the app you want to delete your account from. All deletion
            requests are permanent and irreversible.
          </p>
        </div>

        <ul className="space-y-8">
          {apps.map(({ name, description, href }) => (
            <li key={name}>
              <p className="text-sm text-foreground mb-1">{name}</p>
              <p className="text-sm text-muted mb-2">{description}</p>
              <a
                href={href}
                className="text-sm underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
              >
                Instructions
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-xs text-muted-fg">
          Can&apos;t find what you need? Email us at{" "}
          <a
            href="mailto:support@nomorenight.com"
            className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            support@nomorenight.com
          </a>
          .
        </p>

      </div>
    </SiteShell>
  );
}
