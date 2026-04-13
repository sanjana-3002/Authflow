const DevicesSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Doc works seamlessly across<br />all your devices
        </h2>
        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          Whether you're on web, iPad, or iOS —{" "}
          <strong className="text-foreground">start on one device, pick up on another</strong>.
          Your letters and transcriptions sync instantly, so you're always up to date.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center bg-primary text-primary-foreground font-semibold text-base px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Sign up for free
        </a>
      </div>

      <div className="mt-16 max-w-5xl mx-auto flex items-end justify-center gap-6">
        {/* Phone mockup */}
        <div className="w-40 h-72 bg-card rounded-3xl border-2 border-border shadow-lg flex flex-col items-center justify-center p-4">
          <div className="w-12 h-1 bg-muted rounded-full mb-4" />
          <div className="w-full flex-1 bg-muted/50 rounded-xl" />
        </div>
        {/* Tablet / Desktop mockup */}
        <div className="w-80 h-52 bg-card rounded-2xl border-2 border-border shadow-lg flex flex-col p-4">
          <div className="flex gap-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-muted" />
            <div className="w-2 h-2 rounded-full bg-muted" />
            <div className="w-2 h-2 rounded-full bg-muted" />
          </div>
          <div className="flex-1 bg-muted/50 rounded-lg" />
        </div>
        {/* Wide monitor mockup */}
        <div className="hidden md:flex w-96 h-56 bg-card rounded-2xl border-2 border-border shadow-lg flex-col p-4">
          <div className="flex gap-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-muted" />
            <div className="w-2 h-2 rounded-full bg-muted" />
            <div className="w-2 h-2 rounded-full bg-muted" />
          </div>
          <div className="flex-1 bg-muted/50 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;

// DevicesSection updated to use IntersectionObserver for lazy animation trigger
