import { useState } from "react";
import { Check } from "lucide-react";
import pricingBg from "@/assets/pricing-bg.jpg";

interface PricingSectionProps {
  onSignUp: () => void
}

const PricingSection = ({ onSignUp }: PricingSectionProps) => {
  const [annual, setAnnual] = useState(true);

  return (
    <section
      id="pricing"
      className="py-20 px-6 relative"
      style={{
        backgroundImage: `url(${pricingBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground/80">
          Flexible pricing
        </h2>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-background/80 backdrop-blur rounded-full p-1 flex text-sm font-medium">
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-2 rounded-full transition-colors ${annual ? "bg-background shadow text-foreground" : "text-muted-foreground"}`}
          >
            Annual <span className="text-accent">-16.7%</span>
          </button>
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-2 rounded-full transition-colors ${!annual ? "bg-background shadow text-foreground" : "text-muted-foreground"}`}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Basic */}
        <div className="bg-background rounded-2xl p-8 flex flex-col">
          <p className="text-sm font-medium text-muted-foreground">AuthFlow Basic</p>
          <p className="text-4xl font-bold mt-1">Free</p>
          <p className="text-sm text-muted-foreground mt-3">For solo use with light needs.</p>
          <ul className="mt-6 space-y-3 flex-1">
            {["10 prior auths / month", "Top 5 payers", "No credit card required"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-foreground" /> {f}
              </li>
            ))}
          </ul>
          <button
            onClick={onSignUp}
            className="mt-8 w-full py-3 rounded-full bg-muted text-sm font-medium hover:bg-muted/80 transition-colors"
          >
            Start for Free
          </button>
        </div>

        {/* Pro */}
        <div className="bg-background rounded-2xl p-8 flex flex-col">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-muted-foreground">AuthFlow Pro</p>
            <span className="text-xs text-accent font-medium">Save ${annual ? "598" : "0"}</span>
          </div>
          <p className="text-4xl font-bold mt-1">
            ${annual ? "249" : "299"}<span className="text-lg font-normal text-muted-foreground">/mo</span>
          </p>
          <p className="text-sm text-muted-foreground mt-3">For busy doctors &amp; growing practices.</p>
          <ul className="mt-6 space-y-3 flex-1">
            {[
              "Unlimited prior auths",
              "All major payers",
              "Appeal letter generator",
              "Denial tracking + status log",
              "Priority support",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-foreground" /> {f}
              </li>
            ))}
          </ul>
          <button
            onClick={onSignUp}
            className="mt-8 w-full py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Start 2-Week Trial
          </button>
          <p className="text-xs text-muted-foreground text-center mt-2">No credit card required</p>
        </div>

        {/* Enterprise */}
        <div className="bg-background rounded-2xl p-8 flex flex-col">
          <p className="text-sm font-medium text-muted-foreground">AuthFlow Enterprise</p>
          <p className="text-4xl font-bold mt-1">Flexible</p>
          <p className="text-sm text-muted-foreground mt-3">For practices, clinics and beyond.</p>
          <ul className="mt-6 space-y-3 flex-1">
            {["Discounted pricing", "Custom features", "Priority support", "Deployment options"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-foreground" /> {f}
              </li>
            ))}
          </ul>
          <a
            href="mailto:hello@authflow.ai"
            className="mt-8 w-full py-3 rounded-full bg-muted text-sm font-medium hover:bg-muted/80 transition-colors text-center block"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
