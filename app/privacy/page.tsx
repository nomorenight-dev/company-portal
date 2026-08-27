import type { Metadata } from "next";
import SiteShell from "../_components/SiteShell";

export const metadata: Metadata = {
  title: "Privacy Policy — NoMoreNight, LLC",
  description:
    "Privacy practices of NoMoreNight, LLC across all of its products and services.",
};

const LAST_UPDATED = "August 26, 2026";

const apps = [
  {
    name: "With Diary",
    description:
      "A private journaling app. Collects email, diary entries, and optional photo attachments.",
    href: "/with-diary/privacy",
  },
];

const sections = [
  {
    id: "overview",
    heading: "Overview",
    content: (
      <>
        <p>
          This Privacy Policy describes the general privacy practices of{" "}
          <strong>NoMoreNight, LLC</strong> ("we", "us", or "our") — a
          software engineering company based in Georgia, United States.
        </p>
        <p>
          Each product we publish may collect data specific to its features.
          This document covers the principles that apply across{" "}
          <strong>all</strong> of our products. For data collected by a
          specific app, see the per-product policies linked in the{" "}
          <a href="#products" className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">
            Our Products
          </a>{" "}
          section below.
        </p>
        <p>
          If you have questions, contact us at{" "}
          <a
            href="mailto:support@nomorenight.com"
            className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            support@nomorenight.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "products",
    heading: "Our Products",
    content: (
      <>
        <p>
          The following products are published by NoMoreNight, LLC. Each has
          its own supplemental privacy policy that describes what data is
          collected, how it is stored, and how you can delete it.
        </p>
        <ul className="mt-6 space-y-6">
          {apps.map(({ name, description, href }) => (
            <li key={name}>
              <p className="text-sm text-foreground mb-1">{name}</p>
              <p className="text-sm text-muted-fg mb-2">{description}</p>
              <a
                href={href}
                className="text-sm underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
              >
                View policy
              </a>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "principles",
    heading: "Our Privacy Principles",
    content: (
      <>
        <p>
          These principles apply to every product we build, regardless of
          which platform it runs on:
        </p>
        <ul className="list-none space-y-4 mt-4">
          {[
            {
              label: "Minimal collection",
              detail:
                "We collect only the data required to make a product work. We do not collect advertising identifiers, device fingerprints, or behavioral analytics.",
            },
            {
              label: "No selling of data",
              detail:
                "We do not sell, rent, or trade your personal information to any third party, ever.",
            },
            {
              label: "No advertising",
              detail:
                "We do not serve ads in our products and we do not share data with advertising networks.",
            },
            {
              label: "User control",
              detail:
                "Every consumer product we publish provides a way to delete your account and data from inside the app, and a corresponding page on this website.",
            },
            {
              label: "Security first",
              detail:
                "Product data is transmitted over HTTPS and stored encrypted at rest. Access to a user's data is restricted to that account via row-level or equivalent access controls.",
            },
          ].map(({ label, detail }) => (
            <li key={label} className="flex gap-3">
              <span className="mt-0.5 text-muted-fg text-xs shrink-0 pt-0.5">
                ·
              </span>
              <span>
                <span className="font-semibold text-foreground">{label} — </span>
                {detail}
              </span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "sub-processors",
    heading: "Infrastructure & Sub-Processors",
    content: (
      <>
        <p>
          Our published apps are built on the following cloud infrastructure
          providers. These providers act as data processors under our
          direction and do not use your data for their own purposes. This
          list applies to consumer products such as With Diary — not to
          custom software we build for clients, which uses infrastructure
          those clients control.
        </p>
        <ul className="list-none space-y-3 mt-4">
          {[
            {
              label: "Supabase",
              detail:
                "Provides database (PostgreSQL) and authentication services. User data is stored in Supabase projects hosted on AWS, with row-level security ensuring each user can only access their own data.",
            },
            {
              label: "Amazon Web Services (AWS)",
              detail:
                "Provides cloud storage (S3) for binary assets such as photos. All buckets are private; access requires a signed, time-limited URL.",
            },
          ].map(({ label, detail }) => (
            <li key={label} className="flex gap-3">
              <span className="mt-0.5 text-muted-fg text-xs shrink-0 pt-0.5">
                ·
              </span>
              <span>
                <span className="font-semibold text-foreground">{label} — </span>
                {detail}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Individual product policies specify which sub-processors apply to
          that product.
        </p>
      </>
    ),
  },
  {
    id: "this-website",
    heading: "This Website",
    content: (
      <p>
        This website (nomorenight.com) is a static company site. It does not
        require an account, does not set analytics or advertising cookies, and
        does not collect personal information except what you choose to send
        us by email.
      </p>
    ),
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    content: (
      <p>
        Depending on where you live, you may have the right to access,
        correct, or delete personal information we hold about you. To make a
        request, email{" "}
        <a
          href="mailto:support@nomorenight.com"
          className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          support@nomorenight.com
        </a>
        . For product-specific deletion, see the{" "}
        <a
          href="/delete-account"
          className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          Delete Account
        </a>{" "}
        page.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    heading: "Children's Privacy",
    content: (
      <p>
        None of our products are directed to children under the age of 13. We
        do not knowingly collect personal information from children under 13.
        If you believe a child has provided us with personal data, contact us
        at{" "}
        <a
          href="mailto:support@nomorenight.com"
          className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          support@nomorenight.com
        </a>{" "}
        and we will delete it promptly.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to This Policy",
    content: (
      <p>
        We may update this policy from time to time. When we do, we will
        revise the "Last updated" date at the top of this page. Significant
        changes will also be reflected in the affected product's own policy
        page.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact",
    content: (
      <p>
        For any privacy-related questions or data requests, contact us at{" "}
        <a
          href="mailto:support@nomorenight.com"
          className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          support@nomorenight.com
        </a>
        . We respond to every inquiry.
      </p>
    ),
  },
];

export default function PrivacyIndex() {
  return (
    <SiteShell>
      <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28">

        {/* Header */}
        <div className="mb-14">
          <p className="text-sm text-muted-fg mb-4">
            NoMoreNight, LLC
          </p>
          <h1 className="text-3xl sm:text-4xl tracking-tight text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-fg">Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-14">
          <p className="text-sm text-muted-fg mb-4">
            Contents
          </p>
          <ol className="space-y-2">
            {sections.map(({ id, heading }, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors"
                >
                  <span className="text-xs text-muted-fg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-14 text-sm text-muted leading-relaxed">
          {sections.map(({ id, heading, content }) => (
            <section key={id} id={id} className="scroll-mt-24">
              <h2 className="text-base font-semibold text-foreground mb-4">
                {heading}
              </h2>
              <div className="space-y-3">{content}</div>
            </section>
          ))}
        </div>

      </div>
    </SiteShell>
  );
}
