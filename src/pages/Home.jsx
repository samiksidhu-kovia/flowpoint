import React from 'react';
import HeroSection from '../components/home/HeroSection';
import WhyFlowPoint from '../components/home/WhyFlowPoint';
import SavingsCalculator from '../components/home/SavingsCalculator';
import MerchantTiers from '../components/home/MerchantTiers';
import SecuritySection from '../components/home/SecuritySection';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyFlowPoint />
      <SavingsCalculator />
      <MerchantTiers />
      <SecuritySection />
      <FinalCTA />
    </>
  );
}