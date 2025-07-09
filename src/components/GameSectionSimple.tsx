import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GameContainer = styled.section`
  height: 100vh;
  padding: 2rem;
  background: 
    linear-gradient(135deg, rgba(26, 31, 46, 0.8) 0%, rgba(15, 20, 25, 0.9) 100%),
    url('/images/kantou.png') center/cover;
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
  margin-bottom: 1rem;
  color: #4ecdc4;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const GameTitle = styled(motion.h3)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #ffd700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

const GameDescription = styled(motion.div)`
  font-size: 1.2rem;
  text-align: left;
  line-height: 1.6;
  color: #e0e0e0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const GameImage = styled(motion.div)`
  width: 100%;
  height: 300px;
  background: url('https://picsum.photos/400/300?random=50') center/cover;
  border-radius: 15px;
  border: 3px solid #4ecdc4;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: linear-gradient(145deg, #2563eb 0%, #1e40af 100%);
  border-radius: 15px;
  border: 3px solid #4ecdc4;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 2px 10px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 15px 40px rgba(0, 0, 0, 0.4),
      inset 0 2px 10px rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const FeatureTitle = styled.h4`
  color: #ffd700;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FeatureDescription = styled.p`
  color: #e0e0e0;
  font-size: 0.95rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ThemesList = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
`;

const ThemesText = styled.p`
  font-size: 1.4rem;
  color: #ff6b6b;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const GameSectionSimple: React.FC = () => {
  const features = [
    {
      title: "緒方孝治氏デザイン",
      description: "くにおくんシリーズで知られるキャラクターデザイナーによる魅力的なキャラクター"
    },
    {
      title: "秋田県聖地巡礼",
      description: "実在する秋田県の名所や文化を巡る本格的な地域密着型ゲーム体験"
    },
    {
      title: "多言語対応",
      description: "世界展開を見据えた多言語対応で秋田の魅力を世界に発信"
    },
    {
      title: "AI×レトロ融合",
      description: "最新AIテクノロジーとレトロゲームの魅力を融合した新感覚ゲーム"
    }
  ];

  return (
    <GameContainer id="game-section">
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        ゲームの世界
      </SectionTitle>

      <ContentSection>
        <GameDescription
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            内向的な大学生・杉野健太が、祖父からの緊急依頼で秋田を訪れることに。
            「スギノオウ」の復活を阻止するため、「魂の提灯」を集める使命を帯びています。
          </p>
          <br />
          <p>
            男鹿、湯沢、秋田、三湖、大館、鹿角。秋田県の各地で出会う個性豊かな仲間たちと共に、
            伝統と現代、父と子、男と女、人とAIの枠を越えて絆を深めていく感動の物語です。
          </p>
        </GameDescription>
        
        <GameImage
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        />
      </ContentSection>

      <ThemesList
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <ThemesText>伝統と現代の融合、人と人の絆、個人の成長、秋田から世界へ</ThemesText>
      </ThemesList>

      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </GameContainer>
  );
};

export default GameSectionSimple;