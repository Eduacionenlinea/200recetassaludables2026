
import React from 'react';
import { Hero } from './components/Hero';
import { WhatsInside } from './components/WhatsInside';
import { RecipePreview } from './components/RecipePreview';
import { Authority } from './components/Authority';
import { Bonuses } from './components/Bonuses';
import { ProblemSolution } from './components/ProblemSolution';
import { SocialProof } from './components/SocialProof';
import { Offer } from './components/Offer';
import { Guarantee } from './components/Guarantee';
import { HowToReceive } from './components/HowToReceive';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#F9F7F3] text-gray-800">
      <Hero />
      <main>
        <WhatsInside />
        <RecipePreview />
        <Authority />
        <Bonuses />
        <ProblemSolution />
        <SocialProof />
        <Offer />
        <Guarantee />
        <HowToReceive />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
