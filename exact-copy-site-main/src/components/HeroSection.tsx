import { FileText, Camera } from "lucide-react";

interface HeroSectionProps {
  onSignUp: () => void
}

const HeroSection = ({ onSignUp }: HeroSectionProps) => {
  return (
    <section
      className="relative flex flex-col items-center text-center pt-28 px-6 overflow-hidden min-h-[90vh]"
      style={{
        background: "linear-gradient(180deg, #1a2744 0%, #2c4a6e 35%, #5a8aad 65%, #8fb8d4 85%, #b8d4e4 100%)",
      }}
    >
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] max-w-3xl">
        Patients, not paperwork
      </h1>

      <div className="flex-1 min-h-[80px]" />

      <div className="space-y-0.5 text-sm md:text-base text-white/70 max-w-lg">
        <p>
          Turn clinical notes + insurance cards into{" "}
          <strong className="text-white">submission-ready prior authorization forms</strong> in minutes.
        </p>
        <p className="mt-3 text-xs md:text-sm text-white/60 leading-relaxed">
          Snap a photo of clinical notes and the insurance card. AuthFlow extracts the right details, maps the right codes, and drafts the PA with the language insurers expect — so your claims are faster, cleaner, and less likely to be rejected.
        </p>
      </div>

      <button
        onClick={onSignUp}
        className="mt-7 inline-flex items-center bg-foreground text-background font-semibold text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
      >
        Sign up for free
      </button>

      <div className="flex-1 min-h-[60px]" />

      <div className="relative w-full max-w-2xl mx-auto mb-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-[180px]">
          <div className="absolute inset-0 bg-white/15 rounded-t-xl transform -rotate-3 -translate-x-4" />
          <div className="absolute inset-0 bg-white/20 rounded-t-xl transform rotate-2 translate-x-4" />
          <div className="absolute inset-0 bg-white/25 rounded-t-xl" />
        </div>
        <div className="relative flex justify-center gap-3">
          <div className="bg-background rounded-xl shadow-lg p-4 max-w-[200px] transform -rotate-3">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-semibold text-foreground">Clinical Notes</span>
            </div>
            <p className="text-[11px] text-muted-foreground italic font-serif leading-relaxed">
              Pt presents with chronic lower back pain. MRI reveals L4-L5 disc herniation. Conservative treatment failed over 6 months...
            </p>
          </div>
          <div className="bg-background rounded-xl shadow-lg p-4 max-w-[220px] transform rotate-2 -mt-3">
            <div className="flex items-center gap-2 mb-2">
              <Camera className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-semibold text-foreground">PA Draft</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Prior Authorization Request<br /><br />
              Patient: John D. — DOB: 03/15/1978<br />
              Diagnosis: M51.16 — Lumbar disc herniation<br />
              Requested: Epidural steroid injection series
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
