import { FileUp, Scan, MessageSquare, Camera, FileText, Upload } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Save lives<br />with AuthFlow
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
        {/* PA Drafts Card */}
        <div className="bg-card rounded-2xl p-8 flex flex-col min-h-[420px]">
          <div className="inline-flex items-center gap-2 bg-background rounded-full px-4 py-2 w-fit text-sm font-medium border border-border">
            <FileUp className="w-4 h-4" />
            Prior Auth Drafts
          </div>
          <h3 className="text-2xl font-bold mt-6 leading-tight">
            Instantly generate prior auth<br />drafts that are insurer-aware
          </h3>

          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Upload or snap a photo of:
          </p>

          <div className="mt-4 flex flex-col gap-3">
            <div className="bg-background rounded-xl px-4 py-3 border border-border flex items-center gap-3">
              <FileText className="w-4 h-4 text-accent" />
              <p className="text-sm font-medium">Clinical notes</p>
            </div>
            <div className="bg-background rounded-xl px-4 py-3 border border-border flex items-center gap-3">
              <Camera className="w-4 h-4 text-accent" />
              <p className="text-sm font-medium">Insurance card</p>
            </div>
            <div className="bg-background rounded-xl px-4 py-3 border border-border flex items-center gap-3">
              <Upload className="w-4 h-4 text-accent" />
              <p className="text-sm font-medium">Supporting documents</p>
            </div>
          </div>

          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            AuthFlow extracts the important details and turns them into a structured prior authorization draft your team can review, edit, and submit.
          </p>

          <div className="mt-auto pt-8">
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium border border-border rounded-full px-5 py-2.5 hover:bg-muted transition-colors">
              Learn more <span>→</span>
            </a>
          </div>
        </div>

        {/* Document Reading Card */}
        <div className="bg-card rounded-2xl p-8 flex flex-col min-h-[420px]">
          <div className="inline-flex items-center gap-2 bg-background rounded-full px-4 py-2 w-fit text-sm font-medium border border-border">
            <Scan className="w-4 h-4 text-accent" />
            Smart Extraction
          </div>
          <h3 className="text-2xl font-bold mt-6 leading-tight">
            Read complex documents<br />without the manual headache
          </h3>

          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Clinical notes are long. Insurance requirements are inconsistent. Manual review creates bottlenecks and mistakes.
          </p>

          <div className="mt-6 bg-background rounded-xl p-4 border border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              AuthFlow helps your team pull out the relevant facts, identify treatment history, highlight diagnosis context, and organize the information needed for approval.
            </p>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-xs">✓</span>
              </div>
              <span className="text-sm text-foreground">Patient details extracted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-xs">✓</span>
              </div>
              <span className="text-sm text-foreground">Diagnosis codes mapped</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-xs">✓</span>
              </div>
              <span className="text-sm text-foreground">Treatment history organized</span>
            </div>
          </div>

          <div className="mt-auto pt-8">
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium border border-border rounded-full px-5 py-2.5 hover:bg-muted transition-colors">
              Learn more <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
