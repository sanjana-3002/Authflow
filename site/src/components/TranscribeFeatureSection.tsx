import { Mic, MessageSquare } from "lucide-react";

const TranscribeFeatureSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Reduce your 📋 paperwork<br />with Transcribe
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Record without limits */}
        <div className="bg-card rounded-2xl p-8 flex flex-col">
          <div className="inline-flex items-center gap-2 bg-background rounded-full px-4 py-2 w-fit text-sm font-medium border border-border">
            <Mic className="w-4 h-4 text-accent" />
            Record without limits
          </div>
          <h3 className="text-2xl font-bold mt-6 leading-tight">
            Unlimited effortless &<br />accurate transcriptions
          </h3>

          <div className="mt-10 bg-background rounded-xl p-5 border border-border text-center">
            <p className="text-sm text-muted-foreground">Transcribing Complete ✓</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Complete</p>
            <p className="text-4xl font-light mt-1 tracking-wide">03:00<span className="text-muted-foreground/50">:00</span></p>
            <p className="text-sm text-accent mt-2 cursor-pointer">▶ Start Again</p>
          </div>

          <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Automatically transcribe</strong> with speed and precision.
            Punctuation & medications are handled automatically — delivering clear, ready-to-use transcripts every time.
          </p>
        </div>

        {/* Engage in conversation */}
        <div className="bg-card rounded-2xl p-8 flex flex-col">
          <div className="inline-flex items-center gap-2 bg-background rounded-full px-4 py-2 w-fit text-sm font-medium border border-border">
            <Mic className="w-4 h-4 text-accent" />
            Engage in any conversation
          </div>
          <h3 className="text-2xl font-bold mt-6 leading-tight">
            Seamlessly capture<br />consultations
          </h3>

          <div className="mt-10 space-y-3">
            <div className="flex justify-end">
              <div className="bg-accent/80 text-accent-foreground text-sm rounded-2xl rounded-br-sm px-4 py-3 max-w-[260px]">
                On examination, your chest sounds clear, but there's mild postnasal drip. I'll prescribe a short course of inhaled salbutamol and a nasal corticosteroid.
              </div>
            </div>
            <div className="flex justify-end text-xs text-muted-foreground gap-6">
              <span>You</span><span>00:12:50</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mt-1">
                <MessageSquare className="w-3 h-3" />
              </div>
              <div className="bg-background border border-border text-sm rounded-2xl rounded-bl-sm px-4 py-3 max-w-[240px]">
                Okay, that sounds good. Should I take the inhaler regularly or just when the cough gets worse?
              </div>
            </div>
            <div className="text-xs text-muted-foreground flex gap-6 pl-8">
              <span>Patient</span><span>00:13:24</span>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Record dictations</strong> and multi-speaker consultations.
            We identify speakers and add precise timestamps. No more manually editing & correcting transcripts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TranscribeFeatureSection;
