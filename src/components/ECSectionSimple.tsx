import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const heartbeat = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.5); }
  50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.8); }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const ECContainer = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ShopFrame1 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 50vh;
  background: linear-gradient(135deg, rgba(30, 40, 60, 0.95) 0%, rgba(20, 30, 50, 0.95) 100%);
  border: 3px solid #ffd700;
  border-bottom: none;
  border-left: none;
  border-radius: 0 15px 0 0;
  box-shadow: 
    inset 0 0 30px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(255, 215, 0, 0.3);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 768px) {
    width: 35%;
    height: 40vh;
  }
`;

const ShopFrame2 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60%;
  height: 50vh;
  background: linear-gradient(135deg, rgba(30, 40, 60, 0.95) 0%, rgba(20, 30, 50, 0.95) 100%);
  border: 3px solid #ffd700;
  border-bottom: none;
  border-right: none;
  border-radius: 15px 0 0 0;
  box-shadow: 
    inset 0 0 30px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(255, 215, 0, 0.3);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  
  @media (max-width: 768px) {
    width: 65%;
    height: 40vh;
    padding: 20px;
  }
`;

const MenuButton = styled(motion.button)`
  background: rgba(255, 215, 0, 0.9);
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 20px 40px;
  color: #333;
  font-weight: bold;
  font-size: 32px;
  cursor: pointer;
  z-index: 20;
  width: 90%;
  max-width: 500px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 215, 0, 1);
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.5);
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    padding: 16px 32px;
    width: 95%;
  }
`;

const DialogueArea = styled.div`
  width: 100%;
  height: 100%;
  z-index: 20;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DialogueText = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 40px;
  color: #fff;
  font-size: 36px;
  line-height: 1.6;
  font-family: 'Arial', sans-serif;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 28px;
    padding: 30px;
  }
`;

const ContinuePrompt = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
  color: #ffd700;
  font-size: 28px;
  animation: ${heartbeat} 1.5s ease-in-out infinite;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
  color: #f5e6d3;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8),
    -1px -1px 2px rgba(0, 0, 0, 0.5),
    0 0 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) rotate(-1deg);
  transform-origin: top center;
  z-index: 25;
  padding: 1.5rem 3rem;
  background: 
    radial-gradient(ellipse at top, rgba(92, 51, 23, 0.9) 0%, rgba(74, 41, 18, 0.95) 50%, rgba(61, 34, 15, 1) 100%),
    repeating-linear-gradient(90deg, 
      rgba(43, 25, 10, 0.8) 0px, 
      rgba(61, 35, 14, 0.8) 2px, 
      rgba(43, 25, 10, 0.8) 4px, 
      rgba(51, 30, 12, 0.8) 6px, 
      rgba(43, 25, 10, 0.8) 8px
    ),
    linear-gradient(180deg, #5C3317 0%, #3D230E 100%);
  border: 3px solid #2b190a;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.6),
    inset 0 2px 4px rgba(0, 0, 0, 0.8),
    inset 0 -2px 4px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(0, 0, 0, 0.4);
  
  &::before {
    content: '•';
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    color: #8B7355;
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  &::after {
    content: '•';
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    color: #8B7355;
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    top: 1rem;
    padding: 1rem 2rem;
  }
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0;
  border: 3px solid #ffd700;
  border-bottom: none;
  border-left: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  object-fit: cover;
`;

const CharacterImageWrapper = styled.div`
  position: absolute;
  bottom: 50vh;
  left: 0;
  width: 40%;
  height: calc(50vh - 100px);
  z-index: 15;
  
  @media (max-width: 768px) {
    width: 35%;
    height: calc(60vh - 100px);
  }
`;

const CharacterTab = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.95) 0%, rgba(255, 195, 0, 0.95) 100%);
  border: 3px solid #fff;
  border-left: none;
  border-top: none;
  border-radius: 0 0 0 10px;
  padding: 8px 24px;
  color: #333;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 
    4px 4px 8px rgba(0, 0, 0, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.5);
  z-index: 16;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 16px;
  }
`;

interface Feature {
  id: number;
  title: string;
  description: string;
  fullText: string[];
  characterImage: string;
}

const ECSectionSimple: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typeInterval, setTypeInterval] = useState<NodeJS.Timeout | null>(null);

  const features: Feature[] = [
    {
      id: 1,
      title: 'ゲーム内EC機能',
      description: 'ゲーム内で秋田の特産品を購入できる革新的なシステム',
      characterImage: 'https://via.placeholder.com/500x300/4A5568/FFFFFF?text=EC+System',
      fullText: [
        'いらっしゃいませ！\nコマチですわ。革新的なゲーム内ECシステムのご案内をいたします。',
        'ゲームを楽しみながら、秋田の素晴らしい\n特産品をお買い求めいただけますのよ。',
        '24時間365日、世界中からアクセス可能で、\nリアルタイム在庫管理も完備しておりますわ。',
        '手ぶらで観光を楽しみ、気に入った商品を\n自宅で受け取る新しいスタイルですの。',
        '秋田の事業者様にとって、\n前例のない販路拡大の機会となりますわ。'
      ]
    },
    {
      id: 2,
      title: '二次創作自由化',
      description: 'キャラクターを自由に活用したオリジナル商品開発',
      characterImage: 'https://via.placeholder.com/500x300/764BA2/FFFFFF?text=Secondary+Creation',
      fullText: [
        'コマチですわ！素晴らしいお知らせがございます。\nKITAZUNA\'sキャラクターが完全自由化されましたの！',
        '秋田の事業者の皆様が、独自のオリジナル商品を\n自由に開発・販売できるようになりますわ。',
        'キャラクター商用利用は完全無料ですのよ！\nプロデザイナー監修のテンプレートもご用意しております。',
        '最新AIツールによる商品デザイン支援で、\n創造的な商品展開が可能になりますわ。',
        '地域の子どもたちも商品開発に参加でき、\n次世代が故郷への誇りを持てる素敵な仕組みですの！'
      ]
    },
    {
      id: 3,
      title: '地域経済循環',
      description: '秋田に還元される持続可能な経済システム',
      characterImage: 'https://via.placeholder.com/500x300/667FA2/FFFFFF?text=Economic+Circulation',
      fullText: [
        'コマチですわ。\n地域経済循環システムについてご説明いたしますね。',
        'KITAZUNA\'sのすべての経済活動が、\n愛する秋田の地に確実に還元されますの。',
        'ゲーム売上の一定比率を地域事業者に直接還元し、\n広告収益も県内プロモーションに再投資いたしますわ。',
        '観光客増加により宿泊・飲食・交通業界にも\n大きな波及効果をもたらしますの。',
        'バーチャル空間から始まる新しい経済が、\n現実の秋田を確実に活気づけるのですわ。'
      ]
    }
  ];

  const typeText = (text: string) => {
    // Clear any existing interval
    if (typeInterval) {
      clearInterval(typeInterval);
      setTypeInterval(null);
    }
    
    setIsTyping(true);
    setDisplayedText('');
    let index = 0;
    
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTypeInterval(null);
        setIsTyping(false);
      }
    }, 50);
    
    setTypeInterval(interval);
  };

  useEffect(() => {
    if (selectedFeature && selectedFeature.fullText.length > 0) {
      setCurrentTextIndex(0);
      typeText(selectedFeature.fullText[0]);
    }
    
    // Cleanup on unmount
    return () => {
      if (typeInterval) {
        clearInterval(typeInterval);
      }
    };
  }, [selectedFeature]);

  const handleNextText = () => {
    if (isTyping) {
      // If typing, complete the current text immediately
      if (typeInterval) {
        clearInterval(typeInterval);
        setTypeInterval(null);
      }
      setDisplayedText(selectedFeature!.fullText[currentTextIndex]);
      setIsTyping(false);
      return;
    }
    
    if (currentTextIndex < selectedFeature!.fullText.length - 1) {
      const nextIndex = currentTextIndex + 1;
      setCurrentTextIndex(nextIndex);
      typeText(selectedFeature!.fullText[nextIndex]);
    } else {
      if (typeInterval) {
        clearInterval(typeInterval);
        setTypeInterval(null);
      }
      setSelectedFeature(null);
      setCurrentTextIndex(0);
      setDisplayedText('');
    }
  };

  const handleFeatureSelect = (feature: Feature) => {
    // Clear any existing typing animation
    if (typeInterval) {
      clearInterval(typeInterval);
      setTypeInterval(null);
    }
    setIsTyping(false);
    setDisplayedText('');
    setCurrentTextIndex(0);
    setSelectedFeature(feature);
  };

  return (
    <ECContainer id="ec-section">
      {/* セクションタイトル */}
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        ゲーム内EC・二次創作
      </SectionTitle>

      {/* 背景動画 */}
      <BackgroundVideo
        src="/movies/komachishopmv.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* キャラクター画像（左上） */}
      {selectedFeature && (
        <CharacterImageWrapper>
          <CharacterImage
            src={selectedFeature.characterImage}
            alt={`${selectedFeature.title}の説明`}
          />
          <CharacterTab>
            {selectedFeature.title}
          </CharacterTab>
        </CharacterImageWrapper>
      )}

      {/* ショップフレーム1（左下） */}
      <ShopFrame1>
        {/* メニューボタン */}
        {features.map((feature) => (
          <MenuButton
            key={feature.id}
            onClick={() => handleFeatureSelect(feature)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {feature.title}
          </MenuButton>
        ))}
      </ShopFrame1>

      {/* ショップフレーム2（右下） */}
      <ShopFrame2>
        {/* 対話エリア */}
        {selectedFeature && (
          <DialogueArea>
            <DialogueText onClick={handleNextText}>
              {displayedText && displayedText.split('\n').map((line, index) => (
                <div key={index}>{line || '\u00A0'}</div>
              ))}
              {!isTyping && currentTextIndex < selectedFeature.fullText.length - 1 && (
                <ContinuePrompt>▼ クリックで続きを読む</ContinuePrompt>
              )}
              {!isTyping && currentTextIndex === selectedFeature.fullText.length - 1 && (
                <ContinuePrompt>▼ クリックで終了</ContinuePrompt>
              )}
            </DialogueText>
          </DialogueArea>
        )}
      </ShopFrame2>
    </ECContainer>
  );
};

export default ECSectionSimple;