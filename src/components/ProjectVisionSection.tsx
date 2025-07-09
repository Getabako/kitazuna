import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const VisionContainer = styled.section`
  height: 100vh;
  padding: 2rem;
  background: 
    linear-gradient(135deg, rgba(26, 26, 46, 0.7) 0%, rgba(15, 52, 96, 0.7) 100%),
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
  color: #764ba2;
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
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem 3rem 3rem 3rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1.5rem 2rem 2rem 2rem;
    margin-bottom: 1.5rem;
  }
`;

const VisionTitle = styled.h3`
  font-size: 1.8rem;
  color: #764ba2;
  background: rgba(15, 52, 96, 0.9);
  padding: 0.8rem 1.5rem;
  border-radius: 15px;
  position: absolute;
  top: -23px;
  left: 20px;
  border: 2px solid rgba(118, 75, 162, 0.5);
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
  color: #4ecdc4;
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
  background: rgba(78, 205, 196, 0.1);
  padding: 1.2rem;
  border-radius: 12px;
  border: 1px solid rgba(78, 205, 196, 0.3);
  text-align: center;
  transition: all 0.3s ease;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  width: calc(20% - 1rem);
  margin-right: 1rem;

  &:hover {
    background: rgba(78, 205, 196, 0.15);
    transform: translateY(-3px);
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
    </VisionContainer>
  );
};

export default ProjectVisionSection;