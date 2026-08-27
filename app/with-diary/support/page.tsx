import type { Metadata } from "next";
import SiteShell from "../../_components/SiteShell";
import WithDiaryNav from "../../_components/WithDiaryNav";

export const metadata: Metadata = {
  title: "Support — With Diary · NoMoreNight, LLC",
  description:
    "Get help with With Diary. Contact NoMoreNight, LLC for support, privacy questions, or account deletion.",
};

export default function WithDiarySupport() {
  return (
    <SiteShell>
      <div className="max-w-2xl mx-auto px-6 py-20 sm:py-28">
        <WithDiaryNav current="/with-diary/support" />

        <div className="mb-14">
          <p className="text-sm text-muted-fg mb-4">With Diary</p>
          <h1 className="text-3xl sm:text-4xl tracking-tight text-foreground mb-4">
            Support
          </h1>
          <p className="text-sm text-muted leading-relaxed">
            We respond to every inquiry. Email us from the address associated
            with your account when your request is about a specific diary.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-base text-foreground mb-3">Email</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            For help with the app, billing questions, or anything else:
          </p>
          <a
            href="mailto:with-support@nomorenight.com"
            className="text-sm underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            with-support@nomorenight.com
          </a>
        </section>

        <section className="mb-14">
          <h2 className="text-base text-foreground mb-3">Privacy &amp; data</h2>
          <p className="text-sm text-muted leading-relaxed">
            See the{" "}
            <a
              href="/with-diary/privacy"
              className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              privacy policy
            </a>{" "}
            for what we collect and how it is stored. To permanently remove
            your account and data, follow the{" "}
            <a
              href="/with-diary/delete-account"
              className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              delete account
            </a>{" "}
            instructions.
          </p>
        </section>
      </div>
    </SiteShell>
  );
}
