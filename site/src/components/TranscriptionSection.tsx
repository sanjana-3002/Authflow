const TranscriptionSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Gold-Standard Transcriptions
        </h2>
        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          Extensive medical vocabulary & custom dictionary to{" "}
          <strong className="text-foreground">supercharge transcription accuracy</strong>.
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto relative">
        <div className="flex flex-col items-center gap-4">
          {[
            { term: "Cholecystectomy", desc: "A cholecystectomy is a surgery to remove the gallbladder." },
            { term: "Pneumothorax", desc: "A pneumothorax is a collapsed lung. A pneumothorax occurs when air leaks into the space between your lung and chest wall." },
            { term: "Electrocardiogram", desc: "An electrocardiogram (ECG or EKG) is one of the simplest and fastest tests used to evaluate the heart." },
          ].map((item, i) => (
            <div
              key={item.term}
              className="bg-background border border-border rounded-xl p-5 max-w-sm shadow-sm"
              style={{ transform: `translateX(${(i - 1) * 40}px)` }}
            >
              <p className="font-bold text-sm">{item.term}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TranscriptionSection;
