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
  padding: 5rem 2rem;
  background: 
    radial-gradient(ellipse at top, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #2c1810 0%, #1a0f0a 100%);
  color: #8b4513;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 30%),
      radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.05) 0%, transparent 30%);
    pointer-events: none;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  font-family: 'Cinzel', serif;
  background: linear-gradient(45deg, #d4af37, #b8860b, #cd853f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(139, 69, 19, 0.3);
  position: relative;
  
  &::after {
    content: '✦ ◆ ✦';
    display: block;
    font-size: 1.5rem;
    margin-top: 1rem;
    color: #cd853f;
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BookContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  perspective: 1000px;
`;

const BookSpine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #8b4513, #654321);
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 
    -2px 0 4px rgba(0, 0, 0, 0.3),
    2px 0 4px rgba(0, 0, 0, 0.3);
`;

const PageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 600px;
  margin: 0 auto;
  transform-style: preserve-3d;
  
  @media (max-width: 768px) {
    height: 500px;
  }
`;

const Page = styled(motion.div)<{ $isLeft?: boolean }>`
  position: absolute;
  width: 50%;
  height: 100%;
  ${props => props.$isLeft ? 'left: 0;' : 'right: 0;'}
  background: 
    linear-gradient(135deg, #f4f1e8 0%, #ede5d3 50%, #e6dcc7 100%);
  border: 3px solid #d4af37;
  border-radius: ${props => props.$isLeft ? '15px 5px 5px 15px' : '5px 15px 15px 5px'};
  padding: 2rem;
  box-shadow: 
    ${props => props.$isLeft ? 
      'inset -5px 0 10px rgba(139, 69, 19, 0.1), -5px 5px 15px rgba(0, 0, 0, 0.2)' : 
      'inset 5px 0 10px rgba(139, 69, 19, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.2)'
    };
  overflow: hidden;
  
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
      linear-gradient(45deg, transparent 49%, rgba(139, 69, 19, 0.02) 50%, transparent 51%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 1px solid rgba(139, 69, 19, 0.2);
    border-radius: 5px;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    ${props => props.$isLeft ? 'right: 0; left: auto;' : ''}
    border-radius: 15px;
    margin-bottom: ${props => props.$isLeft ? '2rem' : '0'};
    height: ${props => props.$isLeft ? '45%' : '45%'};
    ${props => props.$isLeft ? 'top: 0;' : 'bottom: 0;'}
  }
`;

const ChapterNumber = styled.div`
  font-size: 4rem;
  font-family: 'Cinzel', serif;
  color: #cd853f;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(139, 69, 19, 0.3);
  position: relative;
  
  &::before {
    content: '〜';
    position: absolute;
    left: -2rem;
    top: 50%;
    transform: translateY(-50%);
  }
  
  &::after {
    content: '〜';
    position: absolute;
    right: -2rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ChapterTitle = styled.h3`
  font-size: 1.8rem;
  color: #8b4513;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: 'Cinzel', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #cd853f, transparent);
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ChapterDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #654321;
  text-align: justify;
  font-family: 'Crimson Text', serif;
  position: relative;
  
  &::first-letter {
    float: left;
    font-size: 4rem;
    line-height: 3rem;
    padding-right: 8px;
    margin-top: 4px;
    font-family: 'Cinzel', serif;
    color: #cd853f;
    text-shadow: 2px 2px 4px rgba(139, 69, 19, 0.3);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    
    &::first-letter {
      font-size: 3rem;
      line-height: 2.5rem;
    }
  }
`;

const TeaseText = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(212, 175, 55, 0.1);
  border-left: 4px solid #cd853f;
  font-style: italic;
  color: #8b4513;
  border-radius: 0 5px 5px 0;
  
  &::before {
    content: '"';
    font-size: 2rem;
    color: #cd853f;
    font-family: 'Cinzel', serif;
    float: left;
    line-height: 1;
    margin-right: 5px;
  }
  
  &::after {
    content: '"';
    font-size: 2rem;
    color: #cd853f;
    font-family: 'Cinzel', serif;
    float: right;
    line-height: 1;
    margin-left: 5px;
  }
`;

const ChapterImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  border: 3px solid #d4af37;
  box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3);
  margin-bottom: 1rem;
  filter: sepia(20%) contrast(1.1);
`;

const CharacterPortrait = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #cd853f;
  object-fit: cover;
  margin: 1rem auto;
  display: block;
  box-shadow: 0 8px 16px rgba(139, 69, 19, 0.4);
  filter: sepia(10%);
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
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
      number: "第一章",
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
      number: "第二章", 
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
      number: "第三章",
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
      number: "第四章",
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
      number: "第五章",
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
      number: "第六章", 
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
      number: "第七章",
      title: "鹿角の大団円",
      description: "ついに明かされる全ての謎。トリオとタンポの激しい対立から始まった最後の試練。秋田の全ての力が結集し、健太と仲間たちが挑む最終決戦。果たして彼らは...",
      teaseText: "全ての謎が解ける時、健太の選択は？秋田の未来を決める最後の戦いの行方は？",
      sceneImage: "https://picsum.photos/400/200?random=107", 
      sceneAlt: "鹿角市の決戦の舞台、全てのキャラクターが集結し運命をかけた最後の戦いに臨む壮大な光景",
      characterImage: "https://picsum.photos/150/150?random=207",
      characterAlt: "トリオとタンポの肖像、対立から協力へと変わる比内地鶏ときりたんぽの擬人化キャラクター"
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
          <BookSpine />
          
          <Page 
            $isLeft={true}
            key={`left-${currentPage}`}
            initial={{ rotateY: -15, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 15, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <ChapterNumber>{currentChapter.number}</ChapterNumber>
            <ChapterTitle>{currentChapter.title}</ChapterTitle>
            <ChapterDescription>{currentChapter.description}</ChapterDescription>
            <TeaseText>{currentChapter.teaseText}</TeaseText>
          </Page>

          <Page 
            $isLeft={false}
            key={`right-${currentPage}`}
            initial={{ rotateY: 15, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -15, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
          >
            <ChapterImage 
              src={currentChapter.sceneImage}
              alt={currentChapter.sceneAlt}
              loading="lazy"
            />
            <CharacterPortrait
              src={currentChapter.characterImage} 
              alt={currentChapter.characterAlt}
              loading="lazy"
            />
          </Page>
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