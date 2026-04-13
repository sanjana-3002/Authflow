import { useState } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import Footer from '@/components/Footer'
import AuthModal from '@/components/AuthModal'

type AuthMode = 'signup' | 'signin'

const Index = () => {
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<AuthMode>('signup')

  const openSignUp = () => { setAuthMode('signup'); setAuthOpen(true) }
  const openSignIn = () => { setAuthMode('signin'); setAuthOpen(true) }

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSignUp={openSignUp} onSignIn={openSignIn} />
      <HeroSection onSignUp={openSignUp} />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection onSignUp={openSignUp} />
      <Footer />
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} mode={authMode} />
    </div>
  )
}

export default Index
