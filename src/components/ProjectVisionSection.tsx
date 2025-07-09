import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const VisionContainer = styled.section`
  height: 100vh;
  padding: 2rem;
  background: 
    linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(139, 69, 19, 0.8) 100%),
    url('/images/concept.png') center/cover no-repeat;
  color: white;
  position: relative;
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
  color: #ffffff;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.5);
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const VisionSection = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem 3rem 3rem 3rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  border: 2px solid rgba(255, 140, 0, 0.8);
  backdrop-filter: blur(10px);
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 140, 0, 0.3);
  
  @media (max-width: 768px) {
    padding: 1.5rem 2rem 2rem 2rem;
    margin-bottom: 1.5rem;
  }
`;

const VisionTitle = styled.h3`
  font-size: 1.8rem;
  color: #ffffff;
  background: rgba(255, 94, 0, 0.9);
  padding: 0.8rem 1.5rem;
  border-radius: 15px;
  position: absolute;
  top: -23px;
  left: 20px;
  border: 2px solid rgba(255, 140, 0, 0.5);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.6rem 1rem;
    top: -19px;
    left: 15px;
  }
`;

const VisionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #e0e0e0;
  max-width: 800px;
  margin: 1rem auto 0;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0.8rem auto 0;
  }
`;

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const heartFloat = keyframes`
  0%, 100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.1);
  }
`;

const sparkle = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
`;

const gratitudePulse = keyframes`
  0%, 100% {
    transform: scale(1);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(255, 140, 0, 0.6);
  }
  50% {
    transform: scale(1.05);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 140, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.5);
  }
`;

const GratitudeOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`;

const GratitudeText = styled(motion.h1)`
  font-size: 4rem;
  color: #ffffff;
  text-align: center;
  animation: ${gratitudePulse} 2s ease-in-out infinite;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeartContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const FloatingHeart = styled(motion.div)<{ $left: number; $delay: number }>`
  position: absolute;
  left: ${props => props.$left}%;
  bottom: -50px;
  font-size: 2rem;
  color: #ff6b6b;
  animation: ${heartFloat} 3s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const SparkleEffect = styled(motion.div)<{ $left: number; $top: number; $delay: number }>`
  position: absolute;
  left: ${props => props.$left}%;
  top: ${props => props.$top}%;
  font-size: 1.5rem;
  color: #ffd700;
  animation: ${sparkle} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const TeamTitle = styled.h4`
  text-align: center;
  font-size: 1.8rem;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(255, 140, 0, 0.6);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const TeamScrollContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const TeamScrollTrack = styled.div`
  display: flex;
  animation: ${scrollAnimation} 20s linear infinite;
  width: calc(200%);
`;

const TeamCard = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 1.2rem;
  border-radius: 12px;
  border: 2px solid rgba(255, 140, 0, 0.6);
  text-align: center;
  transition: all 0.3s ease;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  width: calc(20% - 1rem);
  margin-right: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 140, 0, 0.2);

  &:hover {
    background: rgba(255, 140, 0, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 140, 0, 0.4);
  }
  
  @media (max-width: 768px) {
    min-height: 120px;
    padding: 1rem;
    width: calc(50% - 1rem);
  }
`;

const TeamIcon = styled.div`
  font-size: 1.8rem;
  margin-bottom: 0.4rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TeamMemberRole = styled.h5`
  color: #4ecdc4;
  margin-bottom: 0.4rem;
  font-size: 0.95rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TeamDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.4;
  font-size: 0.8rem;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const ProjectVisionSection: React.FC = () => {
  const [showGratitude, setShowGratitude] = useState(false);
  const [hearts, setHearts] = useState<Array<{id: number, left: number, delay: number}>>([]);
  const [sparkles, setSparkles] = useState<Array<{id: number, left: number, top: number, delay: number}>>([]);

  const teamMembers = [
    {
      icon: '🎨',
      role: '緒方孝治',
      description: 'くにおくんシリーズキャラクターデザイナー'
    },
    {
      icon: '👨‍💼',
      role: '高崎翔太',
      description: 'if(塾)塾頭、if(DELIC)代表'
    },
    {
      icon: '👥',
      role: '秋田の高校生',
      description: 'if(塾)の生徒たち。地域の魅力を発信'
    },
    {
      icon: '🤖',
      role: 'AI技術',
      description: 'ストーリー・アニメーション・3D化をサポート'
    },
    {
      icon: '🌍',
      role: '地域パートナー',
      description: '秋田県の事業者・自治体との連携'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGratitude(true);
      
      // ハート生成
      const newHearts = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 90 + 5,
        delay: Math.random() * 2
      }));
      setHearts(newHearts);

      // キラキラ生成
      const newSparkles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 90 + 5,
        top: Math.random() * 80 + 10,
        delay: Math.random() * 1.5
      }));
      setSparkles(newSparkles);

      // 5秒後にオーバーレイを非表示
      const hideTimer = setTimeout(() => {
        setShowGratitude(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }, 3000); // 3秒後に感謝演出開始

    return () => clearTimeout(timer);
  }, []);

  return (
    <VisionContainer id="vision-section">
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        プロジェクトビジョン
      </SectionTitle>

      <ContentWrapper>
        <VisionSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <VisionTitle>ゲームが繋ぐ世界</VisionTitle>
          <VisionText>
            「ゲームが繋ぐ世界」という理念のもと、秋田県の魅力を世界に発信し、
            地域活性化とクリエイティブ産業の発展を同時に実現します。
            レトロゲームの温かみとAI技術の先進性を融合させ、
            誰もが参加できる新しい形のコンテンツ制作環境を構築していきます。
          </VisionText>
        </VisionSection>

        <TeamSection>
          <TeamTitle>開発チーム</TeamTitle>
          
          <TeamScrollContainer>
            <TeamScrollTrack>
              {/* 最初のセット */}
              {teamMembers.map((member, index) => (
                <TeamCard key={`first-${index}`}>
                  <TeamIcon>{member.icon}</TeamIcon>
                  <TeamMemberRole>{member.role}</TeamMemberRole>
                  <TeamDescription>{member.description}</TeamDescription>
                </TeamCard>
              ))}
              {/* 重複セット（無限ループ用） */}
              {teamMembers.map((member, index) => (
                <TeamCard key={`second-${index}`}>
                  <TeamIcon>{member.icon}</TeamIcon>
                  <TeamMemberRole>{member.role}</TeamMemberRole>
                  <TeamDescription>{member.description}</TeamDescription>
                </TeamCard>
              ))}
            </TeamScrollTrack>
          </TeamScrollContainer>
        </TeamSection>
      </ContentWrapper>

      <AnimatePresence>
        {showGratitude && (
          <GratitudeOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <HeartContainer>
              {hearts.map((heart) => (
                <FloatingHeart
                  key={heart.id}
                  $left={heart.left}
                  $delay={heart.delay}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: -800, opacity: [0, 1, 0] }}
                  transition={{ duration: 4, ease: "easeOut" }}
                >
                  ❤️
                </FloatingHeart>
              ))}
              
              {sparkles.map((sparkle) => (
                <SparkleEffect
                  key={sparkle.id}
                  $left={sparkle.left}
                  $top={sparkle.top}
                  $delay={sparkle.delay}
                >
                  ✨
                </SparkleEffect>
              ))}
            </HeartContainer>
            
            <GratitudeText
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              ご覧いただき
            </GratitudeText>
            <GratitudeText
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              ありがとうございました！
            </GratitudeText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              style={{ 
                color: '#ff8c00', 
                fontSize: '1.5rem', 
                textAlign: 'center',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
              }}
            >
              秋田県の魅力をお楽しみください 🎌
            </motion.p>
          </GratitudeOverlay>
        )}
      </AnimatePresence>
    </VisionContainer>
  );
};

export default ProjectVisionSection;