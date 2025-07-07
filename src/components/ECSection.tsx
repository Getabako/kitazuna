import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ECContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0f3460 0%, #16213e 100%);
  color: white;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #96ceb4, #ffeaa7);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(150, 206, 180, 0.3);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover:before {
    left: 100%;
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  position: relative;
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

const ProductGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const ProductImage = styled(motion.img)`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(150, 206, 180, 0.3);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #96ceb4;
`;

const FeatureDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const FeatureListItem = styled.li`
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
  color: #e0e0e0;
  
  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    top: 0.5rem;
    color: #96ceb4;
    font-weight: bold;
  }
`;

const EconomySection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 20px;
  margin: 4rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const EconomyTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #ffeaa7;
`;

const EconomyFlow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  align-items: center;
`;

const FlowStep = styled(motion.div)`
  text-align: center;
  position: relative;
`;

const FlowIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #96ceb4, #ffeaa7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 2rem;
  box-shadow: 0 10px 25px rgba(150, 206, 180, 0.3);
`;

const FlowTitle = styled.h4`
  color: #96ceb4;
  margin-bottom: 0.5rem;
`;

const FlowDescription = styled.p`
  color: #e0e0e0;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const FlowArrow = styled.div`
  position: absolute;
  right: -1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: #96ceb4;
  
  @media (max-width: 1000px) {
    display: none;
  }
`;

const CreatorSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 20px;
  margin: 4rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CreatorTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #ff6b6b;
`;

const CreatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CreatorCard = styled(motion.div)`
  background: rgba(255, 107, 107, 0.1);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 107, 107, 0.3);
  text-align: center;

  &:hover {
    background: rgba(255, 107, 107, 0.15);
    transform: translateY(-3px);
  }
`;

const CreatorIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CreatorCardTitle = styled.h4`
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const CreatorDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const CTAButton = styled(motion.button)`
  padding: 15px 40px;
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(45deg, #96ceb4, #ffeaa7);
  border: none;
  border-radius: 50px;
  color: #333;
  cursor: pointer;
  margin: 0 1rem 1rem 0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(150, 206, 180, 0.4);
  }
`;

const ECSection: React.FC = () => {
  const features = [
    {
      icon: '🛒',
      title: 'ゲーム内EC機能',
      description: 'ゲーム内で秋田県の特産品を直接購入できる革新的なシステム',
      items: [
        '実決済機能付きショップ',
        'リアルタイム在庫管理',
        '配送手配の自動化',
        '手ぶらで帰れる観光モデル'
      ],
      imageRandom: 40
    },
    {
      icon: '🎨',
      title: '二次創作自由化',
      description: 'キャラクターの商用利用を完全自由化し、創作経済を活性化',
      items: [
        'キャラクター商用利用許可',
        'パッケージデザイン無料提供',
        'AIツールによる制作支援',
        '子どもたちの商品開発支援'
      ],
      imageRandom: 41
    },
    {
      icon: '💰',
      title: '地域経済循環',
      description: 'バーチャルと現実を繋ぐ持続可能な経済モデル',
      items: [
        '委託販売手数料システム',
        '広告手数料による収益化',
        '地域事業者との連携',
        '観光客増加による経済効果'
      ],
      imageRandom: 42
    }
  ];

  const economyFlow = [
    {
      icon: '🎮',
      title: 'ゲーム内購入',
      description: 'プレイヤーがゲーム内で秋田県産品を購入'
    },
    {
      icon: '📦',
      title: '実際の配送',
      description: '購入した商品が実際に自宅に配送される'
    },
    {
      icon: '🏪',
      title: '地域事業者',
      description: '地域の生産者・販売者に売上が還元'
    },
    {
      icon: '🌍',
      title: '経済循環',
      description: '地域経済が活性化し持続可能な発展へ'
    }
  ];

  const creatorSupports = [
    {
      icon: '🖌️',
      title: 'AIツール提供',
      description: 'キャラクターを活用した作品制作をAIでサポート。初心者でも簡単にクオリティの高い作品が作れます。'
    },
    {
      icon: '📱',
      title: 'コマチSNS',
      description: 'キャラクター専用SNSプラットフォームで作品発表。クリエイター同士の交流と学習の場を提供。'
    },
    {
      icon: '🏆',
      title: '商品化支援',
      description: '優秀な作品は実際の商品として販売。子どもたちの自己肯定感向上と実践的なビジネス体験を提供。'
    },
    {
      icon: '💡',
      title: 'クラウドファンディング',
      description: 'ゲームを活用した自由自在の返礼品設計。クリエイターのアイデアを資金面でサポート。'
    }
  ];

  return (
    <ECContainer id="ec-section">
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        ゲーム内EC・二次創作
      </SectionTitle>

      <ContentWrapper>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <FeatureImage
                src={`https://picsum.photos/400/200?random=${feature.imageRandom}`}
                alt={`KITAZUNA ${feature.title}の機能説明画像 - 日本の秋田県を拠点とした${feature.title === 'ゲーム内EC機能' ? 'ゲーム内ECシステムと秋田県特産品のオンライン販売、日本の地域商品のデジタル流通システムを表現' : feature.title === '二次創作自由化' ? 'キャラクター二次創作とクリエイター支援、日本のコンテンツ文化と創作者育成を表現' : '地域経済循環システムとバーチャル・リアルの融合、日本の地方創生と持続可能な経済モデルを表現'}した革新的なビジネスモデルの視覚的説明`}
                loading="lazy"
              />
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeatureList>
                {feature.items.map((item, itemIndex) => (
                  <FeatureListItem key={itemIndex}>{item}</FeatureListItem>
                ))}
              </FeatureList>
            </FeatureCard>
          ))}
        </FeatureGrid>

        <EconomySection>
          <EconomyTitle>バーチャル×リアル 経済循環モデル</EconomyTitle>
          <EconomyFlow>
            {economyFlow.map((step, index) => (
              <FlowStep
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <FlowIcon>{step.icon}</FlowIcon>
                <FlowTitle>{step.title}</FlowTitle>
                <FlowDescription>{step.description}</FlowDescription>
                {index < economyFlow.length - 1 && <FlowArrow>→</FlowArrow>}
              </FlowStep>
            ))}
          </EconomyFlow>
        </EconomySection>

        <CreatorSection>
          <CreatorTitle>クリエイター支援プログラム</CreatorTitle>
          <CreatorGrid>
            {creatorSupports.map((support, index) => (
              <CreatorCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <CreatorIcon>{support.icon}</CreatorIcon>
                <CreatorCardTitle>{support.title}</CreatorCardTitle>
                <CreatorDescription>{support.description}</CreatorDescription>
              </CreatorCard>
            ))}
          </CreatorGrid>
        </CreatorSection>

        <ProductGallery>
          {[50, 51, 52, 53, 54, 55, 56, 57].map((random, index) => (
            <ProductImage
              key={index}
              src={`https://picsum.photos/300/200?random=${random}`}
              alt={`秋田県特産品とKITAZUNAコラボ商品${index + 1} - 日本の秋田県の${index === 0 ? '稲庭うどんパッケージにKITAZUNAキャラクターデザインを採用した商品' : index === 1 ? '秋田犬グッズとキャラクターコラボレーション商品' : index === 2 ? 'なまはげ関連商品とゲームキャラクターの融合デザイン' : index === 3 ? '竿燈祭りテーマのオリジナルグッズ' : index === 4 ? '田沢湖特産品とゲーム内アイテムの実物化' : index === 5 ? '秋田米とキャラクターパッケージのコラボ商品' : index === 6 ? '地域限定スイーツとゲームタイアップ商品' : '二次創作者による独自デザイン商品'}、日本の地域ブランディングとゲームコンテンツの商業展開を表現した実例`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </ProductGallery>

        <CTASection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{ marginBottom: '2rem', color: '#96ceb4' }}>
              一緒に秋田の未来を創造しませんか？
            </h3>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              事業パートナー募集
            </CTAButton>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              クリエイター登録
            </CTAButton>
          </motion.div>
        </CTASection>
      </ContentWrapper>
    </ECContainer>
  );
};

export default ECSection;