import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GameContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #ffd700, #ff6b6b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const GameOverview = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const GameDescription = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const DescriptionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffd700;
`;

const DescriptionText = styled.p`
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
  
  &:before {
    content: '✨';
    position: absolute;
    left: 0;
    top: 0.5rem;
  }
`;

const GameVisual = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 400px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const GameScreenshot = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const VisualPlaceholder = styled.div`
  text-align: center;
  color: white;
  position: absolute;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 15px;
`;

const GameGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);
  }
`;

const ConceptGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const ConceptCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 215, 0, 0.2);
  }
`;

const ConceptIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ConceptTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #ffd700;
`;

const ConceptDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
`;

const GameSection: React.FC = () => {
  const concepts = [
    {
      icon: '👹',
      title: '伝統と現代の融合',
      description: 'ナマハゲ、竿燈祭り、稲庭うどんなど秋田の伝統文化を現代的な視点で再解釈。SNSやAI技術との美しい調和を描きます。'
    },
    {
      icon: '💙',
      title: '人と人の絆',
      description: '性別や世代、地域の壁を越えた絆の物語。各章で描かれる深い人間関係と相互理解がゲームの中心テーマです。'
    },
    {
      icon: '🌱',
      title: '個人の成長',
      description: '内向的だった主人公・健太が、仲間たちとの出会いを通じて真のリーダーへと成長する姿を描きます。'
    },
    {
      icon: '🌍',
      title: '秋田から世界へ',
      description: '地方の魅力を世界に発信するメッセージ。ゲームを通じて秋田県への理解を深め、地域活性化に貢献します。'
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

      <GameOverview>
        <GameDescription
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <DescriptionTitle>Kitazuna: 未来杉の守護者</DescriptionTitle>
          <DescriptionText>
            内向的な大学生・杉野健太が、祖父からの緊急依頼で秋田を訪れることに。
            「スギノオウ」の復活を阻止するため、「魂の提灯」を集める使命を帯びています。
          </DescriptionText>
          <DescriptionText>
            男鹿、湯沢、秋田、三湖、大館、鹿角。秋田県の各地で出会う個性豊かな仲間たちと共に、
            伝統と現代、父と子、男と女、人とAIの枠を越えて絆を深めていく感動の物語です。
          </DescriptionText>
          <FeatureList>
            <FeatureItem>緒方孝治氏（くにおくんシリーズ）デザインキャラクター</FeatureItem>
            <FeatureItem>実在する秋田県の聖地巡礼要素</FeatureItem>
            <FeatureItem>多言語対応で世界展開</FeatureItem>
            <FeatureItem>AIとレトロゲームの融合</FeatureItem>
          </FeatureList>
        </GameDescription>

        <GameVisual
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <GameScreenshot
            src="https://picsum.photos/600/400?random=10"
            alt="KITAZUNA's ゲーム画面のスクリーンショット - 日本の秋田県を舞台にしたRPGゲームのインターフェース、伝統的な日本の町並みと現代的なUIが融合したゲーム画面、プレイヤーが秋田の各地を冒険する様子を表現したゲームビジュアル、日本の地域文化をゲーム内で体験できるシステムを視覚的に表現"
          />
          <VisualPlaceholder>
            <h3>ゲーム画面</h3>
            <p>RPG風インターフェース</p>
            <p>（開発中のスクリーンショット）</p>
          </VisualPlaceholder>
        </GameVisual>
      </GameOverview>

      <GameGallery>
        {[11, 12, 13, 14, 15, 16].map((random, index) => (
          <GalleryImage
            key={index}
            src={`https://picsum.photos/300/200?random=${random}`}
            alt={`KITAZUNAゲーム内の様々なシーン${index + 1} - 日本の秋田県の観光地や文化的な場所をゲーム内で再現した画面、${index === 0 ? '男鹿半島のなまはげ神社' : index === 1 ? '湯沢市の伝統的な街並み' : index === 2 ? '秋田市の竿燈祭り会場' : index === 3 ? '田沢湖の美しい自然風景' : index === 4 ? '大館市の秋田犬とのふれあい' : '稲庭うどんの製造風景'}をゲーム内で表現、日本の伝統文化と現代技術を融合したビジュアル表現`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </GameGallery>

      <ConceptGrid>
        {concepts.map((concept, index) => (
          <ConceptCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <ConceptIcon>{concept.icon}</ConceptIcon>
            <ConceptTitle>{concept.title}</ConceptTitle>
            <ConceptDescription>{concept.description}</ConceptDescription>
          </ConceptCard>
        ))}
      </ConceptGrid>
    </GameContainer>
  );
};

export default GameSection;