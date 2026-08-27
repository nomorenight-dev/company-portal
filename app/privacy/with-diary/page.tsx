import type { Metadata } from "next";
import SiteShell from "../../_components/SiteShell";
import RedirectTo from "../../_components/RedirectTo";

export const metadata: Metadata = {
  title: "Redirecting…",
  robots: { index: false, follow: true },
};

export default function LegacyWithDiaryPrivacy() {
  return (
    <SiteShell>
      <div className="max-w-2xl mx-auto px-6 py-20">
        <RedirectTo href="/with-diary/privacy" />
      </div>
    </SiteShell>
  );
}
