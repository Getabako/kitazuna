import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const StoryContainer = styled.section`
  min-height: 100vh;
  padding: 3rem 2rem;
  background: 
    radial-gradient(ellipse 500px 300px at 30% 20%, rgba(92, 51, 23, 0.4) 0%, transparent 60%),
    radial-gradient(ellipse 400px 200px at 70% 80%, rgba(61, 35, 14, 0.3) 0%, transparent 50%),
    repeating-linear-gradient(90deg, 
      #3D230E 0px, 
      #5C3317 8px, 
      #4A2C17 16px,
      #6B3E1A 24px,
      #3D230E 32px,
      #4F2F1A 40px
    ),
    linear-gradient(180deg, #2D1B0E 0%, #1A0F08 100%);
  background-size: 100% 100%, 100% 100%, 120px 120px, 100% 100%;
  color: #F4E5D3;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(ellipse 180px 60px at 15% 25%, rgba(61, 35, 14, 0.6) 0%, transparent 70%),
      radial-gradient(ellipse 120px 40px at 85% 45%, rgba(75, 44, 23, 0.5) 0%, transparent 70%),
      radial-gradient(ellipse 200px 80px at 45% 70%, rgba(55, 31, 16, 0.4) 0%, transparent 70%),
      radial-gradient(ellipse 150px 50px at 75% 15%, rgba(107, 62, 26, 0.3) 0%, transparent 70%),
      repeating-linear-gradient(2deg,
        transparent 0px, transparent 2px,
        rgba(61, 35, 14, 0.2) 2px, rgba(61, 35, 14, 0.2) 3px,
        transparent 3px, transparent 8px
      ),
      repeating-linear-gradient(178deg,
        transparent 0px, transparent 1px,
        rgba(75, 44, 23, 0.15) 1px, rgba(75, 44, 23, 0.15) 2px,
        transparent 2px, transparent 12px
      );
    pointer-events: none;
    opacity: 0.8;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(89deg,
        transparent 0px, transparent 15px,
        rgba(45, 27, 14, 0.3) 15px, rgba(45, 27, 14, 0.3) 18px,
        transparent 18px, transparent 35px
      ),
      repeating-linear-gradient(91deg,
        transparent 0px, transparent 25px,
        rgba(55, 31, 16, 0.2) 25px, rgba(55, 31, 16, 0.2) 27px,
        transparent 27px, transparent 50px
      ),
      radial-gradient(circle 3px at 20% 30%, rgba(26, 15, 8, 0.8) 0%, transparent 100%),
      radial-gradient(circle 2px at 60% 60%, rgba(26, 15, 8, 0.6) 0%, transparent 100%),
      radial-gradient(circle 4px at 80% 20%, rgba(26, 15, 8, 0.7) 0%, transparent 100%);
    pointer-events: none;
    opacity: 0.6;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Cinzel', serif;
  color: #d4af37;
  text-shadow: 
    -0.5px -0.5px 0 #f4e5d3,
    0.5px -0.5px 0 #f4e5d3,
    -0.5px 0.5px 0 #f4e5d3,
    0.5px 0.5px 0 #f4e5d3,
    2px 2px 6px rgba(26, 15, 8, 0.6);
  position: relative;
  z-index: 10;
  font-weight: bold;
  
  &::after {
    content: '✦ ◆ ✦';
    display: block;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #cd853f;
    opacity: 0.8;
    text-shadow: 
      -0.5px -0.5px 0 #f4e5d3,
      0.5px -0.5px 0 #f4e5d3,
      -0.5px 0.5px 0 #f4e5d3,
      0.5px 0.5px 0 #f4e5d3,
      1px 1px 3px rgba(26, 15, 8, 0.5);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BookContainer = styled(motion.div)`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  perspective: 1500px;
  z-index: 5;
`;

const BookCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #8b4513, #654321);
  border-radius: 15px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    inset 0 2px 10px rgba(255, 255, 255, 0.1);
  z-index: 0;
  opacity: 0;
  pointer-events: none;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid #d4af37;
    border-radius: 10px;
    box-shadow: inset 0 0 20px rgba(212, 175, 55, 0.3);
  }
  
  &::after {
    content: '物語の軌跡';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    font-family: 'Cinzel', serif;
    color: #d4af37;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
  
  @media (max-width: 768px) {
    &::after {
      font-size: 1.8rem;
    }
  }
`;

const BookSpine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 8px;
  background: linear-gradient(180deg, #654321, #3d2817);
  transform: translateX(-50%);
  z-index: 10;
  border-radius: 4px;
  box-shadow: 
    -3px 0 6px rgba(0, 0, 0, 0.4),
    3px 0 6px rgba(0, 0, 0, 0.4);
`;

const PageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  transform-style: preserve-3d;
  z-index: 5;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const Page = styled(motion.div)<{ $isLeft?: boolean }>`
  position: absolute;
  width: 50%;
  height: 100%;
  ${props => props.$isLeft ? 'left: 0;' : 'right: 0;'}
  background: 
    linear-gradient(135deg, #faf8f2 0%, #f4f1e8 50%, #ede5d3 100%);
  border: 2px solid #d4af37;
  border-radius: ${props => props.$isLeft ? '12px 3px 3px 12px' : '3px 12px 12px 3px'};
  padding: 1.5rem;
  box-shadow: 
    ${props => props.$isLeft ? 
      'inset -3px 0 8px rgba(139, 69, 19, 0.1), -3px 3px 10px rgba(0, 0, 0, 0.2)' : 
      'inset 3px 0 8px rgba(139, 69, 19, 0.1), 3px 3px 10px rgba(0, 0, 0, 0.2)'
    };
  overflow: hidden;
  transform-origin: ${props => props.$isLeft ? 'right center' : 'left center'};
  backface-visibility: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 30% 20%, rgba(139, 69, 19, 0.05) 0%, transparent 20%),
      radial-gradient(circle at 70% 80%, rgba(139, 69, 19, 0.03) 0%, transparent 15%),
      repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(139, 69, 19, 0.05) 25px);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 1px solid rgba(139, 69, 19, 0.2);
    border-radius: 5px;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    ${props => props.$isLeft ? 'right: 0; left: auto;' : ''}
    border-radius: 12px;
    margin-bottom: ${props => props.$isLeft ? '1.5rem' : '0'};
    height: ${props => props.$isLeft ? '48%' : '48%'};
    ${props => props.$isLeft ? 'top: 0;' : 'bottom: 0;'}
  }
`;

const ChapterNumber = styled.div`
  font-size: 2.5rem;
  font-family: 'Cinzel', serif;
  color: #cd853f;
  text-align: center;
  margin-bottom: 0.8rem;
  text-shadow: 2px 2px 4px rgba(139, 69, 19, 0.3);
  position: relative;
  
  &::before {
    content: '〜';
    position: absolute;
    left: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
  
  &::after {
    content: '〜';
    position: absolute;
    right: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ChapterTitle = styled.h3`
  font-size: 1.4rem;
  color: #8b4513;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #cd853f, transparent);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ChapterDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #654321;
  text-align: justify;
  font-family: 'Crimson Text', serif;
  position: relative;
  margin-bottom: 1rem;
  
  &::first-letter {
    float: left;
    font-size: 3rem;
    line-height: 2.5rem;
    padding-right: 6px;
    margin-top: 2px;
    font-family: 'Cinzel', serif;
    color: #cd853f;
    text-shadow: 2px 2px 4px rgba(139, 69, 19, 0.3);
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    
    &::first-letter {
      font-size: 2.5rem;
      line-height: 2rem;
    }
  }
`;

const TeaseText = styled.div`
  margin-top: 1rem;
  padding: 0.8rem;
  background: rgba(212, 175, 55, 0.1);
  border-left: 3px solid #cd853f;
  font-style: italic;
  color: #8b4513;
  border-radius: 0 5px 5px 0;
  font-size: 0.9rem;
  
  &::before {
    content: '"';
    font-size: 1.5rem;
    color: #cd853f;
    font-family: 'Cinzel', serif;
    float: left;
    line-height: 1;
    margin-right: 4px;
  }
  
  &::after {
    content: '"';
    font-size: 1.5rem;
    color: #cd853f;
    font-family: 'Cinzel', serif;
    float: right;
    line-height: 1;
    margin-left: 4px;
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    
    &::before, &::after {
      font-size: 1.2rem;
    }
  }
`;

const ChapterImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #d4af37;
  box-shadow: 0 4px 10px rgba(139, 69, 19, 0.3);
  margin-bottom: 0.8rem;
  filter: sepia(20%) contrast(1.1);
`;

const CharacterPortraitContainer = styled.div<{ $chapterIndex: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0.8rem auto;
  
  ${props => (props.$chapterIndex === 3 || props.$chapterIndex === 4 || props.$chapterIndex === 6 || props.$chapterIndex === 7) && `
    gap: 0.5rem;
  `}
`;

const CharacterPortrait = styled.img<{ $chapterIndex: number, $isSecond?: boolean }>`
  width: ${props => (props.$chapterIndex === 3 || props.$chapterIndex === 4 || props.$chapterIndex === 6 || props.$chapterIndex === 7) ? '100px' : '120px'};
  height: ${props => (props.$chapterIndex === 3 || props.$chapterIndex === 4 || props.$chapterIndex === 6 || props.$chapterIndex === 7) ? '100px' : '120px'};
  border-radius: 50%;
  border: 3px solid #cd853f;
  object-fit: cover;
  box-shadow: 0 6px 12px rgba(139, 69, 19, 0.4);
  filter: sepia(10%);
  background: ${props => {
    if (props.$chapterIndex === 0) return 'linear-gradient(135deg, #4A90E2 0%, #7BB3F0 100%)'; // 健太 - blue
    if (props.$chapterIndex === 1) return 'linear-gradient(135deg, #E74C3C 0%, #F39C12 100%)'; // ナギサ - red/orange
    if (props.$chapterIndex === 2) return 'linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)'; // コマチ - pink/purple
    if (props.$chapterIndex === 3 && !props.$isSecond) return 'linear-gradient(135deg, #8D6E63 0%, #D4AF37 100%)'; // イナニワ - brown/gold
    if (props.$chapterIndex === 3 && props.$isSecond) return 'linear-gradient(135deg, #607D8B 0%, #42A5F5 100%)'; // カント - silver/blue
    if (props.$chapterIndex === 4 && !props.$isSecond) return 'linear-gradient(135deg, #26C6DA 0%, #4FC3F7 100%)'; // タツコ - aqua
    if (props.$chapterIndex === 4 && props.$isSecond) return 'linear-gradient(135deg, #29B6F6 0%, #1976D2 100%)'; // ハチロウ - blue
    if (props.$chapterIndex === 5) return 'linear-gradient(135deg, #90A4AE 0%, #42A5F5 100%)'; // アキタ - metallic/blue
    if (props.$chapterIndex === 6 && !props.$isSecond) return 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)'; // トリオ - orange/red
    if (props.$chapterIndex === 6 && props.$isSecond) return 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)'; // タンポ - golden
    if (props.$chapterIndex === 7) return 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)'; // スギノオウ - green
    return 'linear-gradient(135deg, #90A4AE 0%, #ECEFF1 100%)'; // default
  }};
  
  @media (max-width: 768px) {
    width: ${props => (props.$chapterIndex === 3 || props.$chapterIndex === 4 || props.$chapterIndex === 6 || props.$chapterIndex === 7) ? '80px' : '100px'};
    height: ${props => (props.$chapterIndex === 3 || props.$chapterIndex === 4 || props.$chapterIndex === 6 || props.$chapterIndex === 7) ? '80px' : '100px'};
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  z-index: 10;
  position: relative;
`;

const NavButton = styled(motion.button)<{ $direction: 'prev' | 'next' }>`
  width: 60px;
  height: 60px;
  border: 3px solid #cd853f;
  border-radius: 50%;
  background: linear-gradient(145deg, #f4f1e8, #e6dcc7);
  color: #8b4513;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 
    0 4px 8px rgba(139, 69, 19, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    animation: ${float} 1s ease-in-out infinite;
    box-shadow: 
      0 6px 12px rgba(139, 69, 19, 0.4),
      inset 0 2px 4px rgba(255, 255, 255, 0.3);
  }
  
  &:active {
    transform: translateY(2px);
    box-shadow: 
      0 2px 4px rgba(139, 69, 19, 0.3),
      inset 0 2px 4px rgba(139, 69, 19, 0.2);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageIndicator = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const PageDot = styled(motion.div)<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$isActive ? '#cd853f' : 'rgba(139, 69, 19, 0.3)'};
  border: 2px solid #8b4513;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const StorySection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const chapters = [
    {
      id: 1,
      number: "プロローグ",
      title: "新幹線での邂逅",
      description: "平凡な大学生・杉野健太が、祖父からの謎めいた依頼を受けて秋田へと向かう。車窓に流れる風景を眺めながら、彼はまだ知らない。この旅が、自分の人生を大きく変える冒険の始まりであることを...",
      teaseText: "果たして健太を待ち受ける運命とは？この旅の真の目的とは何なのか？",
      sceneImage: "https://picsum.photos/400/200?random=101",
      sceneAlt: "新幹線の車窓から見える秋田の美しい田園風景、健太が物思いにふけりながら故郷への思いを馳せている様子",
      characterImage: "https://picsum.photos/150/150?random=201",
      characterAlt: "主人公・杉野健太の肖像、内向的だが決意を秘めた表情の大学生"
    },
    {
      id: 2,
      number: "第一章", 
      title: "男鹿の守護霊",
      description: "男鹿半島で出会った勇敢な少女ナギサ。彼女には秘められた願いがあった。古くからの伝統に挑戦する彼女の姿に、健太は心を揺さぶられる。神秘的なナマハゲの祠で、二人が目にしたものとは...",
      teaseText: "伝統の壁を越えて、ナギサの願いは叶うのか？祠に隠された秘密とは？",
      sceneImage: "https://picsum.photos/400/200?random=102",
      sceneAlt: "夕暮れの男鹿半島、神秘的なナマハゲの祠と海岸線、古い伝統の重みを感じさせる厳かな雰囲気",
      characterImage: "https://picsum.photos/150/150?random=202",
      characterAlt: "ナギサの肖像、ナマハゲの面を持ち決意に満ちた表情を見せる勇敢な少女"
    },
    {
      id: 3,
      number: "第二章",
      title: "湯沢の雅な出会い",
      description: "骨董品店で出会った謎めいた美女コマチ。平安時代から続く美の知識を持つ彼女は、現代社会で孤独を感じていた。しかし、ナギサの提案により、古き良きものと新しい技術が織りなす奇跡が...",
      teaseText: "千年の美意識が現代に甦る時、何が起こるのか？コマチの真の姿とは？",
      sceneImage: "https://picsum.photos/400/200?random=103", 
      sceneAlt: "湯沢市の美しい古い街並み、伝統的な骨董品店の佇まい、平安の雅な文化が香る空間",
      characterImage: "https://picsum.photos/150/150?random=203",
      characterAlt: "コマチの肖像、平安美人の気品を纏い、古典的な美しさと現代的な輝きを併せ持つ女性"
    },
    {
      id: 4,
      number: "第三章",
      title: "稲庭の技と心",
      description: "稲庭うどんの老舗「令和耕助」で出会った職人親子。父イナニワの伝統への想いと、息子カントの革新への情熱。相容れないと思われた二つの道が交わる時、新たな可能性が生まれる...",
      teaseText: "伝統と革新、親子の絆の行方は？カントの挑戦が導く未来とは？",
      sceneImage: "https://picsum.photos/400/200?random=104",
      sceneAlt: "秋田市の竿燈祭り会場と稲庭うどんの製造風景、伝統技術と祭りの熱気が融合した情景",
      characterImage: "https://picsum.photos/150/150?random=204", 
      characterAlt: "イナニワとカントの親子、職人の誇りと若者の情熱が表情に現れた二人の肖像"
    },
    {
      id: 5,
      number: "第四章",
      title: "三湖の恋歌",
      description: "田沢湖で起きた異変。美しい湖が氷に覆われ、その奥で嘆く龍の姿が。タツコの切ない想いと、八郎潟のハチロウとの運命的な出会い。純粋な愛の力が湖に奇跡をもたらすとき...",
      teaseText: "永遠の愛は氷を溶かすことができるのか？二人の恋の結末は？",
      sceneImage: "https://picsum.photos/400/200?random=105",
      sceneAlt: "凍りついた田沢湖の神秘的な光景、氷の下に潜む龍の影と美しくも切ない恋の物語",
      characterImage: "https://picsum.photos/150/150?random=205",
      characterAlt: "タツコとハチロウの肖像、龍の姿となった美女と優しい心を持つ男性の運命的な愛"
    },
    {
      id: 6,
      number: "第五章", 
      title: "大館の秘密",
      description: "健太の実家で発見された驚くべき秘密。酒飲みと思われていた父の真の姿と、最先端技術で甦った忠実な相棒アキタ。家族の絆と、秋田を守る新たな力が明かされるとき...",
      teaseText: "父の隠された想いとは？アキタが秘める力の正体は？",
      sceneImage: "https://picsum.photos/400/200?random=106",
      sceneAlt: "大館市の隠された研究室、最先端技術と伝統的な木造建築が融合した神秘的な空間",
      characterImage: "https://picsum.photos/150/150?random=206",
      characterAlt: "サイボーグ化された秋田犬アキタの肖像、忠実な瞳に宿る AI と犬の心の両方を表現"
    },
    {
      id: 7,
      number: "第六章",
      title: "鹿角の大団円",
      description: "鹿角市で起きた比内地鶏とキリタンポの激しい対立。トリオとタンポの対立を通じて、秋田の分裂した心を統一する必要性が明らかになる。協力することで生まれる相乗効果を学び、秋田全体の絆を深める...",
      teaseText: "分裂から統一へ、秋田の真の力を結集できるのか？最後の戦いへの準備は整うのか？",
      sceneImage: "https://picsum.photos/400/200?random=107", 
      sceneAlt: "鹿角市の美しい風景ときりたんぽ鍋を囲む人々、対立から協力へと変わる希望に満ちた光景",
      characterImage: "https://picsum.photos/150/150?random=207",
      characterAlt: "トリオとタンポの肖像、対立から協力へと変わる比内地鶏ときりたんぽの擬人化キャラクター"
    },
    {
      id: 8,
      number: "最終章",
      title: "太平山の守護神",
      description: "ついに姿を現したスギノオウ。秋田県民の過度な真面目さが生んだ巨大な化身との最終決戦。健太と仲間たちは、これまでの旅で学んだ全ての教訓を胸に、太平山の頂でスギノオウと対峙する。破壊ではなく浄化による真の解決を目指して...",
      teaseText: "真面目さと柔軟性の調和は可能なのか？健太の成長の集大成となる最後の選択とは？",
      sceneImage: "https://picsum.photos/400/200?random=108",
      sceneAlt: "太平山の頂上、巨大なスギノオウと対峙する健太と仲間たち、秋田杉の咲誇が立ち上がる壮大な最終決戦の光景",
      characterImage: "https://picsum.photos/150/150?random=208",
      characterAlt: "スギノオウの肖像、秋田県民の真面目さが極端に歪んだ巨大な化身、威厳ある姿に宿る複雑な感情"
    }
  ];

  const nextPage = () => {
    if (currentPage < chapters.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const currentChapter = chapters[currentPage];

  return (
    <StoryContainer id="story-section">
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        物語の軌跡
      </SectionTitle>

      <BookContainer
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <PageContainer>
          <BookCover />
          <BookSpine />
          
          <AnimatePresence mode="wait">
            <motion.div key={`pages-${currentPage}`}>
              <Page 
                $isLeft={true}
                initial={{ rotateY: -30, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 30, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <ChapterNumber>{currentChapter.number}</ChapterNumber>
                <ChapterTitle>{currentChapter.title}</ChapterTitle>
                <ChapterDescription>{currentChapter.description}</ChapterDescription>
                <TeaseText>{currentChapter.teaseText}</TeaseText>
              </Page>

              <Page 
                $isLeft={false}
                initial={{ rotateY: 30, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -30, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <ChapterImage 
                  src={`/images/story${currentPage}.png`}
                  alt={currentChapter.sceneAlt}
                  loading="lazy"
                />
                <CharacterPortraitContainer $chapterIndex={currentPage}>
                  {(currentPage === 3 || currentPage === 4 || currentPage === 6 || currentPage === 7) ? (
                    <>
                      <CharacterPortrait
                        $chapterIndex={currentPage}
                        src={currentPage === 3 ? '/images/dotchara3a.png' :
                             currentPage === 4 ? '/images/dotchara4a.png' :
                             currentPage === 6 ? '/images/dotchara6a.png' :
                             '/images/dotchara7a.png'}
                        alt={currentChapter.characterAlt}
                        loading="lazy"
                      />
                      <CharacterPortrait
                        $chapterIndex={currentPage}
                        $isSecond={true}
                        src={currentPage === 3 ? '/images/dotchara3b.png' :
                             currentPage === 4 ? '/images/dotchara4b.png' :
                             currentPage === 6 ? '/images/dotchara6b.png' :
                             '/images/dotchara7b.png'}
                        alt={currentChapter.characterAlt}
                        loading="lazy"
                      />
                    </>
                  ) : (
                    <CharacterPortrait
                      $chapterIndex={currentPage}
                      src={currentPage === 0 ? '/images/dotchara0.png' :
                           currentPage === 1 ? '/images/dotchara1.png' :
                           currentPage === 2 ? '/images/dotchara2.png' :
                           '/images/dotchara5.png'}
                      alt={currentChapter.characterAlt}
                      loading="lazy"
                    />
                  )}
                </CharacterPortraitContainer>
              </Page>
            </motion.div>
          </AnimatePresence>
        </PageContainer>

        <NavigationContainer>
          <NavButton
            $direction="prev"
            onClick={prevPage}
            disabled={currentPage === 0}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </NavButton>

          <PageIndicator>
            {chapters.map((_, index) => (
              <PageDot
                key={index}
                $isActive={index === currentPage}
                onClick={() => goToPage(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </PageIndicator>

          <NavButton
            $direction="next" 
            onClick={nextPage}
            disabled={currentPage === chapters.length - 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </NavButton>
        </NavigationContainer>
      </BookContainer>
    </StoryContainer>
  );
};

export default StorySection;