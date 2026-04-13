import { Camera, Scan, FileCheck } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: <Camera className="w-5 h-5 text-accent" />,
    title: "Capture",
    description:
      "Snap or upload clinical notes, insurance cards, and supporting records.",
  },
  {
    num: "2",
    icon: <Scan className="w-5 h-5 text-accent" />,
    title: "Extract",
    description:
      "We identify patient details, plan information, relevant diagnoses, treatment history, and documentation signals.",
  },
  {
    num: "3",
    icon: <FileCheck className="w-5 h-5 text-accent" />,
    title: "Done",
    description:
      "AuthFlow generates a prior auth form draft with the right structure, insurer-aware wording, and coding support.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.title} className="bg-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">
                {s.num}
              </div>
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                {s.icon}
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
