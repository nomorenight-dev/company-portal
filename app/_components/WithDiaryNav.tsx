const pages = [
  { href: "/with-diary/support", label: "Support" },
  { href: "/with-diary/privacy", label: "Privacy" },
  { href: "/with-diary/delete-account", label: "Delete Account" },
];

export default function WithDiaryNav({ current }: { current?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-fg mb-10">
      <a href="/with-diary" className="hover:text-foreground transition-colors">
        With Diary
      </a>
      {pages.map(({ href, label }) => (
        <span key={href} className="contents">
          <span aria-hidden="true">·</span>
          {current === href ? (
            <span className="text-foreground">{label}</span>
          ) : (
            <a href={href} className="hover:text-foreground transition-colors">
              {label}
            </a>
          )}
        </span>
      ))}
    </div>
  );
}
