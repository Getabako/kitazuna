import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.6); }
`;

const TeamContainer = styled.section`
  height: 100vh;
  padding: 2rem;
  background: 
    radial-gradient(ellipse at bottom, rgba(255, 107, 107, 0.2) 0%, transparent 60%),
    linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%);
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
  background: linear-gradient(45deg, #ffd700, #ff6b6b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const TeamContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const TeamCard = styled(motion.div)`
  background: linear-gradient(145deg, #2563eb 0%, #1e40af 50%, #1e3a8a 100%);
  border-radius: 20px;
  border: 4px solid #ffd700;
  padding: 3rem;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    inset 0 2px 10px rgba(255, 255, 255, 0.2),
    0 0 40px rgba(255, 215, 0, 0.3);
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto auto auto 1fr;
  gap: 2rem;
  align-items: start;
  animation: ${glow} 4s ease-in-out infinite;
  width: 100%;
  max-width: 900px;
  
  @media (max-width: 768px) {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    grid-template-columns: none;
    grid-template-rows: none;
    gap: 1.5rem;
  }
`;

const CreatorEmoji = styled.div`
  font-size: 8rem;
  grid-row: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
    animation: ${glow} 3s ease-in-out infinite;
  }
  
  @media (max-width: 768px) {
    font-size: 6rem;
    grid-row: auto;
  }
`;

const CreatorName = styled.h3`
  color: #ffd700;
  font-size: 2.5rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  grid-column: 2;
  grid-row: 1;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    grid-column: auto;
    grid-row: auto;
  }
`;

const CreatorRole = styled.p`
  color: #ff6b6b;
  font-weight: bold;
  margin: 0;
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  grid-column: 2;
  grid-row: 2;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    grid-column: auto;
    grid-row: auto;
  }
`;

const CreatorDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
  font-size: 1.1rem;
  margin: 0;
  grid-column: 2;
  grid-row: 3;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    grid-column: auto;
    grid-row: auto;
  }
`;

const SkillsList = styled.div`
  grid-column: 2;
  grid-row: 4;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const SkillItem = styled.div`
  color: #4ecdc4;
  font-size: 0.95rem;
  padding: 0.3rem 0;
  border-left: 3px solid #ffd700;
  padding-left: 1rem;
  
  &::before {
    content: '▸ ';
    color: #ffd700;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: left;
  }
`;

const TeamSection: React.FC = () => {
  return (
    <TeamContainer id="team-section">
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        制作チーム紹介
      </SectionTitle>

      <TeamContent>
        <TeamCard
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <CreatorEmoji>🎨</CreatorEmoji>
          
          <CreatorName>緒方孝治</CreatorName>
          
          <CreatorRole>キャラクターデザイナー</CreatorRole>
          
          <CreatorDescription>
            「くにおくん」シリーズで知られる日本を代表するキャラクターデザイナー。
            30年以上にわたってゲーム業界で活躍し、多くのプレイヤーに愛されるキャラクターを生み出してきました。
            KITAZUNA'sプロジェクトでは、レトロゲームの魅力と現代的なセンスを融合した独自の世界観を創造しています。
          </CreatorDescription>
          
          <SkillsList>
            <SkillItem>くにおくんシリーズ キャラクターデザイン</SkillItem>
            <SkillItem>30年以上のゲーム業界での実績</SkillItem>
            <SkillItem>秋田県との地域密着型プロジェクト参画</SkillItem>
            <SkillItem>レトロ×モダンの融合デザイン確立</SkillItem>
          </SkillsList>
        </TeamCard>
      </TeamContent>
    </TeamContainer>
  );
};

export default TeamSection;