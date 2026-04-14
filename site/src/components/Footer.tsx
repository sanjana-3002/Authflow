const footerLinks = {
  "Home page": ["How it works", "Letters", "Transcribe", "Practices", "Testimonials", "Safety", "Pricing", "Devices"],
  Navigation: ["Transcribe", "Letters", "Blog", "Pricing"],
  "Use Cases": ["Doctors", "Specialists", "Allied Health", "Psychologists", "General Practitioners", "Medical Practices"],
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <span className="text-lg font-bold"><span className="text-lg font-bold">📋 AuthFlow</span></span>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="text-sm font-semibold mb-3">{title}</p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-sm font-semibold mb-3">Socials</p>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">LinkedIn</a>
          <p className="text-sm font-semibold mt-6 mb-3 text-accent">Legal</p>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of use</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between text-xs text-muted-foreground">
        <p>All rights reserved</p>
        <p><p>Built by AuthFlow</p></p>
      </div>
    </footer>
  );
};

export default Footer;
