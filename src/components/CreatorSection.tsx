import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CreatorContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%);
  color: white;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #667eea, #764ba2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CreatorProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProfileImage = styled(motion.div)`
  background: linear-gradient(135deg, #667eea, #764ba2);
  width: 250px;
  height: 250px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin: 0 auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    font-size: 3rem;
  }
`;

const CreatorPortrait = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  z-index: 1;
`;

const CreatorEmoji = styled.div`
  position: relative;
  z-index: 2;
  font-size: 4rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const StudioImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

const WorkshopGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const WorkshopImage = styled(motion.img)`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const ProfileInfo = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const CreatorName = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #667eea;
`;

const CreatorRole = styled.p`
  font-size: 1.2rem;
  color: #764ba2;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

const CreatorDescription = styled.p`
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Achievement = styled.li`
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
  color: #e0e0e0;
  
  &:before {
    content: '🏆';
    position: absolute;
    left: 0;
    top: 0.5rem;
  }
`;

const ProjectSection = styled.div`
  margin: 4rem 0;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #ffd700;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
  }
`;

const ProjectIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ProjectCardTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #667eea;
`;

const ProjectDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
`;

const VisionSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 20px;
  margin: 4rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const VisionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #764ba2;
`;

const VisionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #e0e0e0;
  max-width: 800px;
  margin: 0 auto;
`;

const TeamSection = styled.div`
  margin: 4rem 0;
`;

const TeamTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #4ecdc4;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled(motion.div)`
  background: rgba(78, 205, 196, 0.1);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(78, 205, 196, 0.3);
  text-align: center;

  &:hover {
    background: rgba(78, 205, 196, 0.15);
    transform: translateY(-5px);
  }
`;

const TeamIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const TeamRole = styled.h4`
  color: #4ecdc4;
  margin-bottom: 1rem;
`;

const TeamDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const CreatorSection: React.FC = () => {
  const projects = [
    {
      icon: '🎮',
      title: 'くにおくんシリーズ',
      description: '30年以上愛され続ける名作ゲームシリーズのキャラクターデザインを手がける',
      imageRandom: 61
    },
    {
      icon: '🏫',
      title: 'if(塾)との協力',
      description: '秋田県の高校生たちとのゲーム開発プロジェクトに参画',
      imageRandom: 62
    },
    {
      icon: '🎨',
      title: 'KITAZUNAデザイン',
      description: 'レトロとモダンを融合した独自の世界観でキャラクターを創造',
      imageRandom: 63
    }
  ];

  const teamMembers = [
    {
      icon: '👨‍💼',
      role: '高崎翔太 (代表)',
      description: 'if(塾)塾頭、if(DELIC)代表。ゲームが人を繋ぐ力を信じる教育者'
    },
    {
      icon: '🎨',
      role: '緒方孝治 (デザイナー)',
      description: 'くにおくんシリーズのキャラクターデザイナー。レトロゲームの巨匠'
    },
    {
      icon: '👥',
      role: '秋田の高校生',
      description: 'if(塾)の生徒たち。ゲーム開発を通じて地域の魅力を発信'
    },
    {
      icon: '🤖',
      role: 'AI技術',
      description: 'ストーリー作成、アニメーション、3D化をAIでサポート'
    }
  ];

  return (
    <CreatorContainer id="creator-section">
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        制作チーム紹介
      </SectionTitle>

      <ContentWrapper>
        <CreatorProfile>
          <ProfileImage
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <CreatorPortrait
              src="https://picsum.photos/300/300?random=60"
              alt="緒方孝治氏のポートレート - 日本のゲーム業界を代表するキャラクターデザイナー、くにおくんシリーズの生みの親として30年以上活躍する日本のレトロゲーム文化の重要人物、秋田県との地域密着型プロジェクトに参画する現代のクリエイター"
            />
            <CreatorEmoji>🎨</CreatorEmoji>
          </ProfileImage>
          
          <ProfileInfo
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CreatorName>緒方孝治</CreatorName>
            <CreatorRole>キャラクターデザイナー</CreatorRole>
            <CreatorDescription>
              「くにおくん」シリーズで知られる日本を代表するキャラクターデザイナー。
              30年以上にわたってゲーム業界で活躍し、多くのプレイヤーに愛されるキャラクターを生み出してきました。
              KITAZUNA'sプロジェクトでは、レトロゲームの魅力と現代的なセンスを融合した独自の世界観を創造しています。
            </CreatorDescription>
            <AchievementList>
              <Achievement>くにおくんシリーズ キャラクターデザイン</Achievement>
              <Achievement>30年以上のゲーム業界での実績</Achievement>
              <Achievement>秋田県との地域密着型プロジェクト参画</Achievement>
              <Achievement>レトロ×モダンの融合デザイン確立</Achievement>
            </AchievementList>
          </ProfileInfo>
        </CreatorProfile>

        <ProjectSection>
          <ProjectTitle>主要プロジェクト</ProjectTitle>
          <ProjectGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <StudioImage
                  src={`https://picsum.photos/400/200?random=${project.imageRandom}`}
                  alt={`${project.title}制作風景 - 日本のゲーム開発現場での${project.title === 'くにおくんシリーズ' ? 'レトロゲームキャラクターデザインの制作過程、日本の80-90年代ゲーム文化を代表する作品の創作現場' : project.title === 'if(塾)との協力' ? '秋田県の高校生たちとの協働ゲーム開発ワークショップ、日本の地方教育とゲーム制作技術の融合現場' : 'KITAZUNAキャラクターデザインの制作過程、日本の伝統文化と現代ゲーム技術を融合したクリエイティブワーク'}の様子を表現した制作現場写真`}
                  loading="lazy"
                />
                <ProjectIcon>{project.icon}</ProjectIcon>
                <ProjectCardTitle>{project.title}</ProjectCardTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </ProjectSection>

        <VisionSection>
          <VisionTitle>プロジェクトビジョン</VisionTitle>
          <VisionText>
            「ゲームが繋ぐ世界」という理念のもと、秋田県の魅力を世界に発信し、
            地域活性化とクリエイティブ産業の発展を同時に実現します。
            レトロゲームの温かみとAI技術の先進性を融合させ、
            誰もが参加できる新しい形のコンテンツ制作環境を構築していきます。
          </VisionText>
        </VisionSection>

        <TeamSection>
          <TeamTitle>開発チーム</TeamTitle>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <TeamIcon>{member.icon}</TeamIcon>
                <TeamRole>{member.role}</TeamRole>
                <TeamDescription>{member.description}</TeamDescription>
              </TeamCard>
            ))}
          </TeamGrid>
        </TeamSection>

        <WorkshopGallery>
          {[70, 71, 72, 73, 74, 75].map((random, index) => (
            <WorkshopImage
              key={index}
              src={`https://picsum.photos/300/200?random=${random}`}
              alt={`KITAZUNA制作ワークショップの様子${index + 1} - 日本の秋田県で開催される${index === 0 ? 'ゲーム開発ワークショップでの高校生たちの学習風景、プログラミング教育と地域文化を融合した教育現場' : index === 1 ? 'キャラクターデザイン講座での創作活動、日本の伝統文化をモチーフにしたデザインワーク' : index === 2 ? 'AI技術とレトロゲーム制作の融合講座、最新技術と懐かしい技術の組み合わせ学習' : index === 3 ? '地域の名産品とゲーム要素の企画会議、秋田の特色を活かしたコンテンツ制作過程' : index === 4 ? 'SNSマーケティング講座での実践的学習、デジタル発信技術の習得現場' : '緒方孝治氏との直接指導セッション、プロのクリエイターとの貴重な交流機会'}、日本の地方教育とゲーム制作技術の融合を表現した教育活動写真`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </WorkshopGallery>
      </ContentWrapper>
    </CreatorContainer>
  );
};

export default CreatorSection;