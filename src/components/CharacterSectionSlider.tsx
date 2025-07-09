import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const sparkle = keyframes`
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { transform: scale(1) rotate(180deg); opacity: 1; }
  100% { transform: scale(0) rotate(360deg); opacity: 0; }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const akitaFloat1 = keyframes`
  0% { transform: translate(0px, 0px) rotate(0deg) scale(1); opacity: 0.7; }
  25% { transform: translate(-15px, -20px) rotate(90deg) scale(1.1); opacity: 0.5; }
  50% { transform: translate(10px, -30px) rotate(180deg) scale(0.9); opacity: 0.8; }
  75% { transform: translate(20px, -10px) rotate(270deg) scale(1.2); opacity: 0.6; }
  100% { transform: translate(0px, 0px) rotate(360deg) scale(1); opacity: 0.7; }
`;

const akitaFloat2 = keyframes`
  0% { transform: translate(0px, 0px) rotate(0deg) scale(0.8); opacity: 0.6; }
  33% { transform: translate(25px, -15px) rotate(120deg) scale(1.1); opacity: 0.8; }
  66% { transform: translate(-10px, -25px) rotate(240deg) scale(0.9); opacity: 0.5; }
  100% { transform: translate(0px, 0px) rotate(360deg) scale(0.8); opacity: 0.6; }
`;

const akitaFloat3 = keyframes`
  0% { transform: translate(0px, 0px) rotate(0deg) scale(1.1); opacity: 0.5; }
  40% { transform: translate(-20px, -30px) rotate(144deg) scale(0.8); opacity: 0.7; }
  80% { transform: translate(30px, -5px) rotate(288deg) scale(1.3); opacity: 0.4; }
  100% { transform: translate(0px, 0px) rotate(360deg) scale(1.1); opacity: 0.5; }
`;

const AkitaMap = styled.div<{ 
  $left: number; 
  $top: number; 
  $color: string; 
  $size: number; 
  $animationType: number;
  $delay: number;
}>`
  position: absolute;
  left: ${props => props.$left}%;
  top: ${props => props.$top}%;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: radial-gradient(ellipse 80% 60% at center, 
    hsl(${props => props.$color}, 70%, 60%) 0%, 
    hsl(${props => props.$color}, 80%, 50%) 40%, 
    transparent 100%);
  border-radius: 50% 40% 60% 30%;
  animation: ${props => 
    props.$animationType === 1 ? akitaFloat1 : 
    props.$animationType === 2 ? akitaFloat2 : akitaFloat3
  } ${props => 8 + props.$delay}s ease-in-out infinite;
  animation-delay: ${props => props.$delay * 0.5}s;
  pointer-events: none;
  z-index: 3;
  opacity: 0.6;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 40%;
    background: url('/images/akitapref.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: brightness(1.5) contrast(1.2);
  }
`;

const CharacterContainer = styled.section`
  height: 100vh;
  padding: 2rem;
  background: 
    radial-gradient(ellipse at top, rgba(30, 144, 255, 0.2) 0%, transparent 60%),
    linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%);
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #ff6b6b;
  flex-shrink: 0;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const SliderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  z-index: 5;
`;

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CharacterCard = styled(motion.div)`
  position: relative;
  width: 800px;
  height: 450px;
  background: linear-gradient(145deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%);
  border-radius: 20px;
  border: 4px solid #ffd700;
  padding: 3rem;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    inset 0 2px 10px rgba(255, 255, 255, 0.2),
    0 0 40px rgba(255, 215, 0, 0.3);
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 2rem;
  align-items: center;
  transform-style: preserve-3d;
  animation: ${floatAnimation} 4s ease-in-out infinite;
  
  @media (max-width: 768px) {
    width: 350px;
    height: 500px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-template-columns: none;
    grid-template-rows: none;
  }
`;

const CharacterEmoji = styled.div`
  font-size: 10rem;
  position: relative;
  grid-row: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
    animation: ${sparkle} 3s ease-in-out infinite;
  }
  
  @media (max-width: 768px) {
    font-size: 6rem;
    margin-bottom: 1.5rem;
    grid-row: auto;
  }
`;

const CharacterName = styled.h3`
  color: #ffd700;
  font-size: 3rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  grid-column: 2;
  grid-row: 1;
  align-self: end;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 0.5rem;
    grid-column: auto;
    grid-row: auto;
    align-self: auto;
  }
`;

const CharacterRole = styled.p`
  color: #ff6b6b;
  font-weight: bold;
  margin: 0;
  font-size: 1.3rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  grid-column: 2;
  grid-row: 2;
  align-self: start;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 1rem;
    grid-column: auto;
    grid-row: auto;
    align-self: auto;
  }
`;

const CharacterDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
  font-size: 1.2rem;
  margin: 0;
  grid-column: 2;
  grid-row: 3;
  align-self: start;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    grid-column: auto;
    grid-row: auto;
    align-self: auto;
  }
`;

const NavigationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const NavButton = styled(motion.button)`
  width: 60px;
  height: 60px;
  border: 3px solid #ffd700;
  border-radius: 50%;
  background: linear-gradient(145deg, #1e40af, #2563eb);
  color: #ffd700;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 
      0 6px 12px rgba(0, 0, 0, 0.4),
      inset 0 2px 4px rgba(255, 255, 255, 0.3),
      0 0 20px rgba(255, 215, 0, 0.5);
  }
  
  &:active {
    transform: translateY(2px);
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const CardIndicators = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const Indicator = styled(motion.div)<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$isActive ? '#ffd700' : 'rgba(255, 215, 0, 0.3)'};
  border: 2px solid #ffd700;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const DesignerCredit = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 1rem;
    max-width: 100%;
  }
`;

const DesignerTitle = styled.h3`
  color: #ffd700;
  margin-bottom: 1rem;
`;

const DesignerDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
`;

interface Character {
  id: number;
  name: string;
  role: string;
  emoji: string;
  description: string;
}

// 横回転メインのアニメーション
const cardVariants = {
  // 横回転アニメーション
  horizontal: {
    initial: { 
      opacity: 0, 
      rotateY: -90,
      scale: 0.8
    },
    animate: { 
      opacity: 1, 
      rotateY: 0,
      scale: 1
    },
    exit: { 
      opacity: 0, 
      rotateY: 90,
      scale: 0.8
    }
  }
};

const CharacterSectionSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ランダムな秋田県地図を生成
  const generateAkitaMaps = () => {
    const maps = [];
    const colors = [0, 60, 120, 180, 240, 300]; // 色相環の6色
    
    for (let i = 0; i < 18; i++) {
      maps.push({
        id: i,
        left: Math.random() * 90 + 5, // 5% - 95%
        top: Math.random() * 80 + 10, // 10% - 90%
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 80 + 60, // 60px - 140px
        animationType: Math.floor(Math.random() * 3) + 1, // 1, 2, 3
        delay: Math.random() * 4 // 0-4秒のランダム遅延
      });
    }
    return maps;
  };

  const [akitaMaps] = useState(() => generateAkitaMaps());

  const characters: Character[] = [
    {
      id: 1,
      name: '杉野健太',
      role: '主人公・真のKitazuna',
      emoji: '🌱',
      description: '内向的な大学生が、秋田での出会いを通じて真のリーダーへと成長する物語の主人公。'
    },
    {
      id: 2,
      name: 'ナギサ',
      role: '真のナマハゲ精神の継承者',
      emoji: '👹',
      description: '性別の壁を越えてナマハゲの真の精神を習得。伝統を守りながらも革新する勇敢な少女。'
    },
    {
      id: 3,
      name: 'コマチ',
      role: '伝統と現代を繋ぐインフルエンサー',
      emoji: '🌸',
      description: '小野小町の化身。平安時代からの美の知識をSNSで現代に伝える革新的な存在。'
    },
    {
      id: 4,
      name: 'イナニワ',
      role: '伝統を守る稲庭うどん職人',
      emoji: '🍜',
      description: '稲庭うどんの老舗店主。息子カントとの世代間の葛藤を乗り越え、伝統と革新の融合を学ぶ。'
    },
    {
      id: 5,
      name: 'カント',
      role: '革新を求める竿燈士',
      emoji: '🏮',
      description: 'イナニワの息子。父の稲庭うどんの技術を竿燈に活かし、新技「足竿燈」を完成させる。'
    },
    {
      id: 6,
      name: 'タツコ',
      role: '田沢湖の美しき龍神',
      emoji: '💙',
      description: '美を求めて龍になった田沢湖の守り神。ハチロウとの純愛を通じて真の美しさを知る。'
    },
    {
      id: 7,
      name: 'ハチロウ',
      role: '八郎潟の優しき守護者',
      emoji: '🌊',
      description: '八郎潟に住む心優しい男性。タツコへの純粋な愛で、凍った田沢湖を溶かす奇跡を起こす。'
    },
    {
      id: 8,
      name: 'アキタ',
      role: '技術と伝統を融合したAI秋田犬',
      emoji: '🤖',
      description: 'サイボーグ化された秋田犬。最先端技術と忠誠心を兼ね備えた秋田の守護者。'
    },
    {
      id: 9,
      name: 'トリオ',
      role: '比内地鶏の誇り高きギャング',
      emoji: '🐓',
      description: 'アメリカかぶれのギャング風比内地鶏。タンポとの料理対決を通じて協力の大切さを学ぶ。'
    },
    {
      id: 10,
      name: 'タンポ',
      role: 'きりたんぽ魂を持つヤンキー',
      emoji: '🍢',
      description: '秋田の米文化を愛するきりたんぽの化身。トリオとの和解により秋田統一への道を開く。'
    }
  ];


  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % characters.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const goToCard = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CharacterContainer id="character-section">
      {/* フワフワ動く秋田県地図の背景 */}
      {akitaMaps.map((map) => (
        <AkitaMap
          key={map.id}
          $left={map.left}
          $top={map.top}
          $color={map.color.toString()}
          $size={map.size}
          $animationType={map.animationType}
          $delay={map.delay}
        />
      ))}

      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        秋田名物Kitazuna's
      </SectionTitle>

      <SliderContainer>
        <CardWrapper>
          <AnimatePresence mode="wait">
            <CharacterCard
              key={characters[currentIndex].id}
              initial={cardVariants.horizontal.initial}
              animate={cardVariants.horizontal.animate}
              exit={cardVariants.horizontal.exit}
              transition={{ 
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {currentIndex <= 4 ? (
                <img 
                  src={`/images/chara${currentIndex}.png`}
                  alt={characters[currentIndex].name}
                  style={{
                    width: '250px',
                    height: '250px',
                    objectFit: 'contain',
                    gridRow: '1 / -1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                />
              ) : currentIndex === 5 ? (
                <img 
                  src="/images/chara5.png"
                  alt={characters[currentIndex].name}
                  style={{
                    width: '250px',
                    height: '250px',
                    objectFit: 'contain',
                    gridRow: '1 / -1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                />
              ) : currentIndex === 6 ? (
                <img 
                  src="/images/chara6.png"
                  alt={characters[currentIndex].name}
                  style={{
                    width: '250px',
                    height: '250px',
                    objectFit: 'contain',
                    gridRow: '1 / -1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                />
              ) : currentIndex === 7 ? (
                <img 
                  src="/images/chara7.png"
                  alt={characters[currentIndex].name}
                  style={{
                    width: '250px',
                    height: '250px',
                    objectFit: 'contain',
                    gridRow: '1 / -1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                />
              ) : currentIndex === 8 ? (
                <img 
                  src="/images/chara9.png"
                  alt={characters[currentIndex].name}
                  style={{
                    width: '250px',
                    height: '250px',
                    objectFit: 'contain',
                    gridRow: '1 / -1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                />
              ) : currentIndex === 9 ? (
                <img 
                  src="/images/chara8.png"
                  alt={characters[currentIndex].name}
                  style={{
                    width: '250px',
                    height: '250px',
                    objectFit: 'contain',
                    gridRow: '1 / -1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                />
              ) : (
                <CharacterEmoji>{characters[currentIndex].emoji}</CharacterEmoji>
              )}
              <CharacterName>{characters[currentIndex].name}</CharacterName>
              <CharacterRole>{characters[currentIndex].role}</CharacterRole>
              <CharacterDescription>{characters[currentIndex].description}</CharacterDescription>
            </CharacterCard>
          </AnimatePresence>
        </CardWrapper>
      </SliderContainer>
      
      <NavigationControls>
        <NavButton 
          onClick={prevCard}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </NavButton>
        
        <CardIndicators>
          {characters.map((_, index) => (
            <Indicator
              key={index}
              $isActive={index === currentIndex}
              onClick={() => goToCard(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </CardIndicators>
        
        <NavButton 
          onClick={nextCard}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </NavButton>
      </NavigationControls>

    </CharacterContainer>
  );
};

export default CharacterSectionSlider;