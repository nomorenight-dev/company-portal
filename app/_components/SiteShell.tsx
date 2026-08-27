import type { ReactNode } from "react";

interface NavLink {
  href: string;
  label: string;
}

interface SiteShellProps {
  children: ReactNode;
  navLinks?: NavLink[];
}

export default function SiteShell({ children, navLinks = [] }: SiteShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">

      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="/"
            className="font-serif text-[15px] text-foreground"
          >
            NoMoreNight
          </a>
          <nav className="flex items-center gap-6 text-sm text-muted">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hidden sm:block hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:support@nomorenight.com"
              className="text-foreground hover:text-muted transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-muted-fg">
          <div className="space-y-1">
            <p className="text-foreground">NoMoreNight, LLC</p>
            <p>
              <a
                href="mailto:support@nomorenight.com"
                className="hover:text-foreground transition-colors"
              >
                support@nomorenight.com
              </a>
            </p>
            <p>Georgia, United States</p>
          </div>
          <div className="text-xs space-y-1 sm:text-right">
            <p>&copy; {new Date().getFullYear()} NoMoreNight, LLC</p>
            <p className="space-x-3">
              <a href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/delete-account" className="hover:text-foreground transition-colors">
                Delete Account
              </a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
