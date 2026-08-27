import SiteShell from "./_components/SiteShell";

const services = [
  {
    title: "Custom Software Development",
    body: "We build purpose-built web and mobile applications tailored to your business processes. From initial scoping through launch and ongoing iteration, we own every phase of the software development lifecycle.",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    body: "We architect and manage cloud-native infrastructure on AWS, GCP, and Azure. Automated CI/CD pipelines, infrastructure-as-code, and production monitoring keep systems reliable and cost-efficient.",
  },
  {
    title: "API Design & Systems Integration",
    body: "We design RESTful and GraphQL APIs that connect your internal systems, third-party services, and customer-facing products — creating a unified, maintainable software ecosystem.",
  },
  {
    title: "Technical Consulting",
    body: "Struggling with technical debt, architecture decisions, or scaling challenges? We provide hands-on consulting to help engineering teams move faster with greater confidence.",
  },
];

const values = [
  {
    label: "01",
    title: "Resilient by Default",
    body: "Every system we build is designed for availability, graceful degradation, and fast recovery. Reliability is not an afterthought — it is a first-class engineering requirement.",
  },
  {
    label: "02",
    title: "End-to-End Accountability",
    body: "We take full ownership from requirements through deployment and beyond. Our clients get a single, trusted partner — not a handoff chain.",
  },
  {
    label: "03",
    title: "Continuous Improvement",
    body: "Automated testing, observability tooling, and disciplined release practices ensure that every new version of your software ships with confidence.",
  },
];

export default function Home() {
  return (
    <SiteShell
      navLinks={[
        { href: "#services", label: "Services" },
        { href: "#about", label: "About" },
      ]}
    >
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p className="text-sm text-muted mb-6">
          Software &amp; technology · Georgia, USA
        </p>
        <h1 className="text-4xl sm:text-5xl leading-[1.15] text-foreground mb-6 max-w-xl">
          Building robust software ecosystems
        </h1>
        <p className="max-w-xl text-[15px] text-muted leading-relaxed mb-10">
          NoMoreNight, LLC designs, builds, and operates end-to-end technology
          solutions for businesses. From cloud infrastructure to user-facing
          products, we deliver systems that are reliable, maintainable, and
          built to grow.
        </p>
        <a
          href="mailto:support@nomorenight.com"
          className="text-sm text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          support@nomorenight.com
        </a>
      </section>

      <section id="services" className="max-w-3xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-2xl text-foreground mb-12">Services</h2>
        <div className="space-y-10">
          {services.map(({ title, body }) => (
            <div key={title}>
              <h3 className="text-[15px] text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-3xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-2xl text-foreground mb-8">Who we are</h2>
        <div className="space-y-4 text-[15px] text-muted leading-relaxed mb-16">
          <p>
            NoMoreNight, LLC is a Georgia-based software engineering company
            founded with a single purpose: to eliminate the uncertainty and
            instability that plagues too many technology organizations.
          </p>
          <p>
            We work with businesses that need more than a vendor — they need a
            committed technical partner who takes full ownership of outcomes.
            Whether you are launching a new product, scaling an existing
            platform, or modernizing legacy infrastructure, we bring
            senior-level engineering discipline to every engagement.
          </p>
          <p>
            Our approach is direct: understand the problem deeply, design the
            right solution, build it with care, and support it over time. No
            unnecessary complexity, no bloated processes — just software that
            works.
          </p>
          <p>
            We also publish our own products, including{" "}
            <a
              href="/with-diary"
              className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              With Diary
            </a>
            , a private journaling app.
          </p>
        </div>
        <div className="space-y-10">
          {values.map(({ label, title, body }) => (
            <div key={title}>
              <p className="text-xs text-muted-fg mb-2">{label}</p>
              <h3 className="text-[15px] text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-3xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-2xl text-foreground mb-4">Get in touch</h2>
        <p className="max-w-md text-[15px] text-muted leading-relaxed mb-6">
          Tell us about your project. We respond to every inquiry and are happy
          to discuss your requirements before any commitment.
        </p>
        <a
          href="mailto:support@nomorenight.com"
          className="text-sm text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          support@nomorenight.com
        </a>
      </section>
    </SiteShell>
  );
}
