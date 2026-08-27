import type { Metadata } from "next";
import SiteShell from "../../_components/SiteShell";
import WithDiaryNav from "../../_components/WithDiaryNav";

export const metadata: Metadata = {
  title: "Delete Account — With Diary · NoMoreNight, LLC",
  description:
    "How to delete your account and all associated data from With Diary, a product of NoMoreNight, LLC.",
};

const steps = [
  "Open With Diary on your device.",
  "On the main calendar screen, tap the gear icon in the top-right corner to open Settings.",
  'Scroll to the bottom and tap "Delete account".',
  "Read the confirmation prompt and tap to confirm.",
];

export default function WithDiaryDeleteAccount() {
  return (
    <SiteShell>
      <div className="max-w-2xl mx-auto px-6 py-20 sm:py-28">
        <WithDiaryNav current="/with-diary/delete-account" />

        <div className="mb-14">
          <p className="text-sm text-muted-fg mb-4">With Diary</p>
          <h1 className="text-3xl sm:text-4xl tracking-tight text-foreground mb-4">
            Delete Your Account
          </h1>
          <p className="text-sm text-muted leading-relaxed">
            You can permanently delete your With Diary account and all
            associated data directly from inside the app — no email required.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-base text-foreground mb-4">What is deleted</h2>
          <ul className="list-none space-y-3 text-sm text-muted">
            {[
              "Your account and email address",
              "All diary entries",
              "All photo attachments",
              "All account metadata and preferences",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-fg">
            Deletion is{" "}
            <strong className="text-foreground font-medium">
              permanent and irreversible
            </strong>
            . Data is removed from our systems within 30 days.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-base text-foreground mb-6">
            How to delete from the app
          </h2>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="shrink-0 text-xs text-muted-fg pt-0.5 w-5">
                  {i + 1}.
                </span>
                <span className="text-sm text-muted leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-base text-foreground mb-3">
            Need help? Request by email
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            If you are unable to access the app or prefer to request deletion
            by email, send us a message and we will process it within{" "}
            <strong className="text-foreground font-medium">
              7 business days
            </strong>
            .
          </p>
          <a
            href="mailto:with-support@nomorenight.com?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20With%20Diary%20account%20associated%20with%20this%20email%20address."
            className="text-sm underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            Email deletion request
          </a>
          <p className="mt-4 text-xs text-muted-fg">
            Send from the email address associated with your account so we can
            locate it. You can also reach us on the{" "}
            <a
              href="/with-diary/support"
              className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              support page
            </a>
            .
          </p>
        </section>

        <p className="mt-12 text-xs text-muted-fg">
          For full details on data retention and your privacy rights, see the{" "}
          <a
            href="/with-diary/privacy"
            className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            With Diary privacy policy
          </a>
          .
        </p>
      </div>
    </SiteShell>
  );
}
