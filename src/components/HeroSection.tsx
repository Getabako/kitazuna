import React from 'react';
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

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background: linear-gradient(135deg, rgba(15, 15, 35, 0.8) 0%, rgba(26, 26, 46, 0.8) 100%),
              url('https://picsum.photos/1920/1080?random=1');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(15, 15, 35, 0.7) 0%, rgba(26, 26, 46, 0.7) 100%);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const GameTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${breathe} 3s ease-in-out infinite;
  text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #b8b8b8;
  max-width: 600px;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 15px 40px;
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(45deg, #ff6b6b, #ffd700);
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${glow} 2s ease-in-out infinite;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 107, 107, 0.4);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover:before {
    left: 100%;
  }
`;

const GameLogo = styled(motion.div)`
  width: 200px;
  height: 200px;
  margin: 2rem auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  animation: ${breathe} 4s ease-in-out infinite;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://picsum.photos/200/200?random=2');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    font-size: 2rem;
  }
`;

const HeroImages = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
`;

const FloatingImage = styled(motion.img)<{ $top: string; $left: string; $size: string }>`
  position: absolute;
  top: ${props => props.$top};
  left: ${props => props.$left};
  width: ${props => props.$size};
  height: ${props => props.$size};
  border-radius: 15px;
  opacity: 0.1;
  filter: blur(1px);
  object-fit: cover;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffd700;
  cursor: pointer;
`;

const ScrollArrow = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ffd700;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
  animation: ${breathe} 2s ease-in-out infinite;
`;

const HeroSection: React.FC = () => {
  const handlePlayClick = () => {
    const gameSection = document.getElementById('game-section');
    gameSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollClick = () => {
    const gameSection = document.getElementById('game-section');
    gameSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingImages = [
    { id: 1, top: '10%', left: '5%', size: '120px', random: 3 },
    { id: 2, top: '20%', left: '85%', size: '100px', random: 4 },
    { id: 3, top: '60%', left: '10%', size: '90px', random: 5 },
    { id: 4, top: '70%', left: '80%', size: '110px', random: 6 },
    { id: 5, top: '40%', left: '90%', size: '80px', random: 7 },
  ];

  return (
    <HeroContainer>
      <HeroImages>
        {floatingImages.map((img) => (
          <FloatingImage
            key={img.id}
            src={`https://picsum.photos/200/200?random=${img.random}`}
            alt={`秋田県の美しい自然風景や伝統文化を表現したイメージ画像${img.id} - 日本の四季の移ろいと地域の魅力を視覚的に表現した装飾用画像、東北地方特有の山々や田園風景、伝統的な建築物や祭りの様子を連想させるビジュアル要素`}
            $top={img.top}
            $left={img.left}
            $size={img.size}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6 + img.id,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </HeroImages>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <GameLogo
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          北絆
        </GameLogo>
        
        <GameTitle
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Kitazuna: 未来杉の守護者
        </GameTitle>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
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
          transition={{ duration: 1, delay: 1.5 }}
        >
          物語を始める
        </CTAButton>
      </motion.div>

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