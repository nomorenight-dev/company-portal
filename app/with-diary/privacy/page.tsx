import type { Metadata } from "next";
import SiteShell from "../../_components/SiteShell";
import WithDiaryNav from "../../_components/WithDiaryNav";

export const metadata: Metadata = {
  title: "Privacy Policy — With Diary · NoMoreNight, LLC",
  description:
    "Privacy policy for With Diary. Learn what data the app collects, how it is stored on Supabase and AWS, and how to delete your account.",
};

const LAST_UPDATED = "August 26, 2026";

const sections = [
  {
    id: "about",
    heading: "About This Policy",
    content: (
      <>
        <p>
          This policy applies specifically to <strong>With Diary</strong>, a
          private journaling app published by <strong>NoMoreNight, LLC</strong>.
          It supplements the{" "}
          <a
            href="/privacy"
            className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            NoMoreNight general privacy policy
          </a>
          , which covers the company-wide principles that apply to all of our
          products.
        </p>
        <p>
          By using With Diary you agree to the data practices described here.
          Questions? Reach us at{" "}
          <a
            href="mailto:with-support@nomorenight.com"
            className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            with-support@nomorenight.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "data-collected",
    heading: "Data Collected",
    content: (
      <>
        <p>
          With Diary collects only what is necessary to provide a private
          journaling experience:
        </p>
        <ul className="list-none space-y-4 mt-4">
          {[
            {
              label: "Email address",
              detail:
                "Required to create and authenticate your account. Collected at sign-up via email/password, Sign in with Apple, or Sign in with Google.",
            },
            {
              label: "Diary entries",
              detail:
                "The text content you write. Entries are stored privately and associated only with your account. We do not read diary contents as part of ordinary operations, and we do not use them for advertising, analytics, or training.",
            },
            {
              label: "Photos",
              detail:
                "Images you choose to attach to entries. Stored in a private, access-controlled bucket; never publicly accessible.",
            },
            {
              label: "Account metadata",
              detail:
                "Timestamps (created at, updated at), entry counts, and similar lightweight operational data. No advertising identifiers, device fingerprints, or location data are collected.",
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
    id: "how-we-use-data",
    heading: "How We Use Data",
    content: (
      <p>
        We use the data described above only to operate With Diary: create and
        authenticate your account, sync your entries and photos across your
        devices, and provide customer support when you contact us. We do not
        use diary contents or photos for advertising, profiling, or analytics.
      </p>
    ),
  },
  {
    id: "storage",
    heading: "How Data Is Stored",
    content: (
      <>
        <p>
          With Diary uses the following infrastructure to store your data:
        </p>
        <ul className="list-none space-y-4 mt-4">
          {[
            {
              label: "Supabase (database & auth)",
              detail:
                "Your email address, diary text, and account metadata are stored in a PostgreSQL database managed by Supabase. Row-level security (RLS) policies are enforced at the database level, ensuring your data is readable only by your own authenticated session. Supabase infrastructure runs on AWS.",
            },
            {
              label: "Amazon Web Services — S3 (photo storage)",
              detail:
                "Photo attachments are stored in a private Amazon S3 bucket. Objects have no public ACL. Access is granted only via short-lived, signed URLs generated server-side by Supabase when your authenticated session requests them.",
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
          All data is transmitted over HTTPS and stored encrypted at rest
          using AES-256 (managed by AWS). Data is hosted in the United
          States. If you use With Diary from another country, your
          information is transferred to and processed in the U.S.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    heading: "Third-Party Sharing",
    content: (
      <>
        <p>
          We do <strong>not</strong> sell, rent, or share your data with any
          third party for marketing, advertising, or analytics purposes.
        </p>
        <p>
          The only external parties that ever touch your data are:
        </p>
        <ul className="list-none space-y-3 mt-3">
          {[
            {
              label: "Supabase & AWS",
              detail:
                "Act as infrastructure sub-processors under our direction. They do not use your data for their own purposes.",
            },
            {
              label: "Apple / Google (auth only)",
              detail:
                "If you sign in with Apple or Google, that provider confirms your identity and supplies your email address. No diary content is shared with them.",
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
          We may disclose information if required by law or to protect the
          safety of our users.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    heading: "Data Retention",
    content: (
      <p>
        Your data is retained for as long as your account is active. When
        you delete your account, all associated personal data — email
        address, diary entries, and photos — is permanently and
        irreversibly deleted from our systems within <strong>30 days</strong>.
      </p>
    ),
  },
  {
    id: "deletion",
    heading: "Deleting Your Account & Data",
    content: (
      <>
        <p>
          You have the right to delete your account and all of its data at
          any time, free of charge. Deletion is permanent and cannot be
          undone.
        </p>
        <p className="mt-4">
          Step-by-step instructions — including in-app steps and an email
          option — are on the{" "}
          <a
            href="/with-diary/delete-account"
            className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            With Diary delete account
          </a>{" "}
          page. In-app deletion takes effect immediately; emailed requests
          are processed within <strong>7 business days</strong>. Personal
          data is removed from our systems within <strong>30 days</strong>.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    heading: "Children's Privacy",
    content: (
      <p>
        With Diary is not directed to children under the age of 13. We do
        not knowingly collect personal information from children under 13.
        If you believe a child under 13 has provided data through the app,
        contact us at{" "}
        <a
          href="mailto:with-support@nomorenight.com"
          className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          with-support@nomorenight.com
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
        We may update this policy when the app's data practices change. The
        "Last updated" date at the top of this page will reflect any
        revisions. For material changes we will provide in-app notice.
        Continued use of With Diary after changes are posted constitutes
        acceptance of the revised policy.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact",
    content: (
      <p>
        Questions or requests related to your privacy or data in With Diary
        can be sent to{" "}
        <a
          href="mailto:with-support@nomorenight.com"
          className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          with-support@nomorenight.com
        </a>{" "}
        or via the{" "}
        <a
          href="/with-diary/support"
          className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          support page
        </a>
        . We respond to every inquiry.
      </p>
    ),
  },
];

export default function WithDiaryPrivacy() {
  return (
    <SiteShell>
      <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
        <WithDiaryNav current="/with-diary/privacy" />

        <div className="mb-14">
          <p className="text-sm text-muted-fg mb-4">With Diary</p>
          <h1 className="text-3xl sm:text-4xl tracking-tight text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-fg">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <nav className="mb-14">
          <p className="text-sm text-muted-fg mb-4">Contents</p>
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
