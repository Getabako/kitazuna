import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const breathe = keyframes`
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.05) rotate(1deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px #ffd700, 0 0 40px #ffd700, 0 0 60px #ffd700; }
  50% { box-shadow: 0 0 40px #ff6b6b, 0 0 80px #ff6b6b, 0 0 120px #ff6b6b; }
`;

const buttonPulse = keyframes`
  0% { transform: translateY(0px); box-shadow: 0 4px 0 #8B4513, 0 8px 15px rgba(0,0,0,0.3); }
  50% { transform: translateY(2px); box-shadow: 0 2px 0 #8B4513, 0 4px 10px rgba(0,0,0,0.3); }
  100% { transform: translateY(0px); box-shadow: 0 4px 0 #8B4513, 0 8px 15px rgba(0,0,0,0.3); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const HeroContainer = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://picsum.photos/1920/1080?random=30');
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 2;
`;

const Logo = styled(motion.img)`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 80px;
  width: auto;
  z-index: 10;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
  
  @media (max-width: 768px) {
    height: 60px;
    top: 15px;
    left: 15px;
  }
`;

const NavigationMenu = styled(motion.nav)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    gap: 10px;
    flex-wrap: wrap;
    max-width: 200px;
  }
`;

const FamicomButton = styled(motion.button)<{ $color: string }>`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(145deg, ${props => props.$color}, ${props => props.$color}dd);
  color: white;
  font-family: 'Arial', monospace;
  font-size: 0.8rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  position: relative;
  border: 3px solid #2c1810;
  box-shadow: 
    0 4px 0 #8B4513,
    0 8px 15px rgba(0, 0, 0, 0.3),
    inset 0 2px 0 rgba(255, 255, 255, 0.3),
    inset 0 -2px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease;
  
  &:hover {
    animation: ${buttonPulse} 0.6s ease-in-out infinite;
    transform: scale(1.05);
  }
  
  &:active {
    transform: translateY(3px);
    box-shadow: 
      0 1px 0 #8B4513,
      0 3px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 0 rgba(255, 255, 255, 0.3),
      inset 0 -2px 0 rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 0.7rem;
  }
`;

const MainContent = styled(motion.div)`
  position: relative;
  z-index: 5;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const GameTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ffd700;
  text-shadow: 
    2px 2px 0 #8B4513,
    4px 4px 0 #654321,
    6px 6px 10px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(255, 215, 0, 0.8);
  animation: ${float} 3s ease-in-out infinite;
  font-family: serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: white;
  max-width: 600px;
  line-height: 1.8;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.3);
  padding: 15px 20px;
  border-radius: 10px;
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 12px 16px;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 20px 50px;
  font-size: 1.3rem;
  font-weight: bold;
  background: linear-gradient(145deg, #ff6b6b, #ff4444);
  border: 4px solid #2c1810;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: sans-serif;
  box-shadow: 
    0 6px 0 #cc3333,
    0 12px 20px rgba(0, 0, 0, 0.4),
    inset 0 3px 0 rgba(255, 255, 255, 0.3),
    inset 0 -3px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease;
  
  &:hover {
    animation: ${buttonPulse} 0.8s ease-in-out infinite;
    transform: scale(1.05);
  }
  
  &:active {
    transform: translateY(4px);
    box-shadow: 
      0 2px 0 #cc3333,
      0 6px 15px rgba(0, 0, 0, 0.4),
      inset 0 3px 0 rgba(255, 255, 255, 0.3),
      inset 0 -3px 0 rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 16px 35px;
    font-size: 1.1rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
  z-index: 10;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const ScrollArrow = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
  animation: ${float} 2s ease-in-out infinite;
`;

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePlayClick = () => {
    const storySection = document.getElementById('story-section');
    storySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollClick = () => {
    const storySection = document.getElementById('story-section');
    storySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationButtons = [
    { label: 'ストーリー', color: '#4ecdc4', section: 'story-section' },
    { label: 'キャラクター', color: '#ff6b6b', section: 'character-section' },
    { label: 'ゲーム', color: '#ffd700', section: 'game-section' },
    { label: 'EC', color: '#96ceb4', section: 'ec-section' }
  ];

  return (
    <HeroContainer>
      {!videoError ? (
        <VideoBackground
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
        >
          <source 
            src={isMobile ? '/movies/topmoviesp.mp4' : '/movies/topmoviepc.mp4'} 
            type="video/mp4" 
          />
        </VideoBackground>
      ) : (
        <BackgroundImage />
      )}
      
      <VideoOverlay />
      
      <Logo
        src="/images/kitazunalogo.png"
        alt="Kitazuna ロゴ"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      <NavigationMenu
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {navigationButtons.map((button, index) => (
          <FamicomButton
            key={button.section}
            $color={button.color}
            onClick={() => navigateToSection(button.section)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {button.label}
          </FamicomButton>
        ))}
      </NavigationMenu>

      <MainContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <GameTitle
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Kitazuna: 未来杉の守護者
        </GameTitle>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          伝統と現代が交差する秋田県を舞台に<br />
          内向的な青年・健太が仲間たちと共に巡る感動のRPG
        </Subtitle>
        
        <CTAButton
          onClick={handlePlayClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          物語を始める
        </CTAButton>
      </MainContent>

      <ScrollIndicator
        onClick={handleScrollClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span style={{ marginBottom: '10px', fontSize: '0.9rem' }}>SCROLL</span>
        <ScrollArrow />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;