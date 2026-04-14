import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onSignUp: () => void
  onSignIn: () => void
}

const Navbar = ({ onSignUp, onSignIn }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">AuthFlow</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Our doctors</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onSignIn}
            className="text-sm font-medium hover:text-foreground transition-colors text-muted-foreground"
          >
            Login
          </button>
          <button
            onClick={onSignUp}
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Sign up
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3">
          <a href="#how-it-works" className="text-sm py-2" onClick={() => setMobileOpen(false)}>How it works</a>
          <a href="#testimonials" className="text-sm py-2" onClick={() => setMobileOpen(false)}>Our doctors</a>
          <a href="#pricing" className="text-sm py-2" onClick={() => setMobileOpen(false)}>Pricing</a>
          <div className="flex gap-3 pt-2">
            <button onClick={() => { setMobileOpen(false); onSignIn() }} className="text-sm font-medium">
              Login
            </button>
            <button
              onClick={() => { setMobileOpen(false); onSignUp() }}
              className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-full"
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
