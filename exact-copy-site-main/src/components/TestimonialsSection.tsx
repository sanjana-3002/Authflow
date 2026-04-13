import { User } from "lucide-react";

const testimonials = [
  {
    quote:
      "In our cardiology department, a single prior authorization takes close to an hour — even for experienced staff. At the smaller clinic where I also work, there's simply no one with the time or knowledge to find the correct CPT codes or match the clinical language to what the payer requires. Errors are common. Denials follow. Patients wait weeks. What AuthFlow is building addresses something I see cause real harm every single day. If it gets the codes right and gets that hour down to 30 seconds, it will be one of the most useful things to come into this space in years.",
    name: "Dr. Bijal Mishra",
    role: "Lead Nurse Practitioner · Kaiser Permanente, LA",
  },
  {
    quote:
      "It is a long process — the pharmacist takes about an hour to finish a form. They take the clinical notes from Epic and the patient's insurance card to write up the form. Smaller clinics, maybe 10 or fewer doctors, can't afford Epic at $85,000 a month, so they still handwrite all their notes. The pharmacist handles all of it. I see about 20 patients a day and a good amount need prior authorization. This sounds really helpful for them. AuthFlow is much easier to work with and saves time of going through nearly 16,000 CPT codes for the prior auth to not be denied just because of a clerical error.",
    name: "Dr. Jasson Barrios, MD",
    role: "Internal Medicine · Mayo Clinic",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-card">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Based on early feedback from<br />the names you know and trust
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-background rounded-2xl p-8 relative mt-10">
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto -mt-16 mb-6 border-4 border-background">
              <User className="w-6 h-6 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.quote}</p>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm">
                <span className="font-bold">{t.name}</span>
                <span className="text-muted-foreground"> · {t.role}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
