import heroImg from "@/assets/hero-abstract.jpg";

const Index = () => (
  <main className="font-body">
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <img
        src={heroImg}
        alt=""
        width={1280}
        height={720}
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="relative z-10 container mx-auto px-6 py-24 max-w-3xl text-center">
        <p className="font-body text-sm font-semibold tracking-[0.25em] uppercase text-primary mb-5">
          Frontend Developer
        </p>
        <h1 className="text-5xl sm:text-7xl text-foreground leading-[1.08] mb-5 font-serif">
          Hi, I'm Omolara
        </h1>
        <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
          I build beautiful, accessible, and performant web interfaces — turning creative ideas into delightful digital experiences.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center px-8 py-3.5 rounded-lg font-body font-semibold text-primary-foreground text-base tracking-wide transition-transform hover:scale-105"
          style={{ background: "var(--gradient-hero)" }}
        >
          View My Projects
        </a>
      </div>
    </section>
  </main>
);

export default Index;
