import type { Metadata } from "next";
import SiteShell from "../_components/SiteShell";
import WithDiaryNav from "../_components/WithDiaryNav";

export const metadata: Metadata = {
  title: "With Diary — NoMoreNight, LLC",
  description:
    "Support, privacy, and account deletion for With Diary, a private journaling app by NoMoreNight, LLC.",
};

const links = [
  {
    href: "/with-diary/support",
    title: "Support",
    body: "Get help with With Diary or contact us by email.",
  },
  {
    href: "/with-diary/privacy",
    title: "Privacy Policy",
    body: "What data the app collects, how it is stored, and how we use it.",
  },
  {
    href: "/with-diary/delete-account",
    title: "Delete Account",
    body: "Permanently delete your account, diary entries, and photos.",
  },
];

export default function WithDiaryHub() {
  return (
    <SiteShell>
      <div className="max-w-2xl mx-auto px-6 py-20 sm:py-28">
        <WithDiaryNav current="/with-diary" />

        <div className="mb-14">
          <p className="text-sm text-muted-fg mb-4">NoMoreNight, LLC</p>
          <h1 className="text-3xl sm:text-4xl tracking-tight text-foreground mb-4">
            With Diary
          </h1>
          <p className="text-sm text-muted leading-relaxed">
            A private journaling app. Use the links below for support, privacy
            details, and account deletion.
          </p>
        </div>

        <ul className="space-y-8">
          {links.map(({ href, title, body }) => (
            <li key={href}>
              <p className="text-sm text-foreground mb-1">{title}</p>
              <p className="text-sm text-muted mb-2">{body}</p>
              <a
                href={href}
                className="text-sm underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SiteShell>
  );
}
