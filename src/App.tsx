import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import HeroSection from './components/HeroSection';
import GameSection from './components/GameSection';
import CharacterSection from './components/CharacterSection';
import ECSection from './components/ECSection';
import StorySection from './components/StorySection';
import CreatorSection from './components/CreatorSection';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', Meiryo, メイリオ, Osaka, 'MS PGothic', arial, helvetica, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #764ba2, #667eea);
  }
`;

const floatingParticles = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
  }
`;

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
`;

const ParticleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const Particle = styled.div<{ delay: number; left: number; size: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  left: ${props => props.left}%;
  bottom: -50px;
  animation: ${floatingParticles} 15s infinite linear;
  animation-delay: ${props => props.delay}s;
  box-shadow: 0 0 20px ${props => props.color};
`;

const MainContent = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 15,
    left: Math.random() * 100,
    size: Math.random() * 8 + 4,
    color: ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'][Math.floor(Math.random() * 5)]
  }));

  return (
    <AppContainer>
      <GlobalStyle />
      <ParticleContainer>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            delay={particle.delay}
            left={particle.left}
            size={particle.size}
            color={particle.color}
          />
        ))}
      </ParticleContainer>
      <MainContent>
        <HeroSection />
        <StorySection />
        <CharacterSection />
        <GameSection />
        <ECSection />
        <CreatorSection />
        <Footer />
      </MainContent>
    </AppContainer>
  );
}

export default App;
