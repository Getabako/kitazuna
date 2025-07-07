import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const sparkle = keyframes`
  0%, 100% { transform: scale(0.8) rotate(0deg); opacity: 0.6; }
  50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
`;

const cardFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const CardShuffleIn = {
  initial: { rotateY: -90, opacity: 0, scale: 0.8, z: -200 },
  animate: { rotateY: 0, opacity: 1, scale: 1, z: 0 },
  exit: { rotateY: 90, opacity: 0, scale: 0.8, z: -200 }
};

const CharacterContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: 
    radial-gradient(ellipse at top, rgba(30, 144, 255, 0.2) 0%, transparent 60%),
    linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%);
  color: white;
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
      radial-gradient(circle at 20% 30%, rgba(30, 144, 255, 0.1) 0%, transparent 25%),
      radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 25%);
    pointer-events: none;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #ff6b6b, #ffd700);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CardGameContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1500px;
  
  @media (max-width: 768px) {
    height: 500px;
  }
`;

const PokemonCard = styled(motion.div)<{ $position: 'left' | 'center' | 'right' }>`
  position: absolute;
  width: 280px;
  height: 400px;
  background: 
    linear-gradient(145deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%);
  border-radius: 20px;
  border: 4px solid #ffd700;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    inset 0 2px 10px rgba(255, 255, 255, 0.2),
    0 0 20px rgba(255, 215, 0, 0.3);
  cursor: pointer;
  transform-style: preserve-3d;
  overflow: hidden;
  
  ${props => {
    switch (props.$position) {
      case 'left':
        return `
          left: -100px;
          z-index: 1;
          transform: rotateY(25deg) scale(0.85);
          opacity: 0.7;
        `;
      case 'center':
        return `
          left: 50%;
          transform: translateX(-50%) scale(1.1);
          z-index: 3;
          animation: ${cardFloat} 3s ease-in-out infinite;
        `;
      case 'right':
        return `
          right: -100px;
          z-index: 1;
          transform: rotateY(-25deg) scale(0.85);
          opacity: 0.7;
        `;
    }
  }}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 30%),
      radial-gradient(circle at 70% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 40%);
    pointer-events: none;
    z-index: 1;
  }
  
  &:hover {
    transform: ${props => props.$position === 'center' ? 'translateX(-50%) scale(1.15)' : 
      props.$position === 'left' ? 'rotateY(15deg) scale(0.9)' : 'rotateY(-15deg) scale(0.9)'};
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.5),
      inset 0 2px 10px rgba(255, 255, 255, 0.3),
      0 0 30px rgba(255, 215, 0, 0.5);
  }
  
  @media (max-width: 768px) {
    width: 220px;
    height: 320px;
    
    ${props => {
      switch (props.$position) {
        case 'left':
          return 'left: -80px; transform: rotateY(30deg) scale(0.8);';
        case 'center':
          return 'transform: translateX(-50%) scale(1);';
        case 'right':
          return 'right: -80px; transform: rotateY(-30deg) scale(0.8);';
      }
    }}
  }
`;

const CardHeader = styled.div`
  height: 80px;
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  padding: 1rem;
  position: relative;
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #ff6b6b, transparent);
  }
`;

const CardTitle = styled.h3`
  color: #1a1a2e;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardImageArea = styled.div<{ $bgColor: string }>`
  height: 180px;
  background: ${props => props.$bgColor};
  margin: 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    height: 140px;
    margin: 8px;
  }
`;

const CharacterPortrait = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  z-index: 1;
  filter: brightness(1.1) contrast(1.1);
`;

const CharacterEmoji = styled.div`
  position: relative;
  z-index: 2;
  font-size: 3.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  animation: ${sparkle} 2s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CardInfo = styled.div`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0 0 16px 16px;
  position: relative;
  z-index: 2;
  height: 130px;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    height: 110px;
  }
`;


const CharacterRole = styled.p`
  color: #ff6b6b;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const CharacterDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.4;
  font-size: 0.75rem;
  text-align: center;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    line-height: 1.3;
  }
`;

const CharacterTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: center;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  background: rgba(255, 215, 0, 0.3);
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  font-size: 0.6rem;
  color: #ffd700;
  border: 1px solid rgba(255, 215, 0, 0.5);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
  
  @media (max-width: 768px) {
    font-size: 0.55rem;
    padding: 0.15rem 0.4rem;
  }
`;

const CharacterModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  padding: 3rem;
  border-radius: 20px;
  max-width: 900px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ModalCharacterImage = styled.div<{ $bgColor: string }>`
  width: 150px;
  height: 150px;
  background: ${props => props.$bgColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const DesignerCredit = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const DesignerTitle = styled.h3`
  color: #ffd700;
  margin-bottom: 1rem;
`;

const DesignerDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
`;

interface Character {
  id: number;
  name: string;
  role: string;
  emoji: string;
  bgColor: string;
  description: string;
  detailDescription: string;
  tags: string[];
  abilities?: string[];
  backstory?: string;
  imageRandom: number;
}

const NavigationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const NavButton = styled(motion.button)`
  width: 60px;
  height: 60px;
  border: 3px solid #ffd700;
  border-radius: 50%;
  background: linear-gradient(145deg, #1e40af, #2563eb);
  color: #ffd700;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 
      0 6px 12px rgba(0, 0, 0, 0.4),
      inset 0 2px 4px rgba(255, 255, 255, 0.3);
  }
  
  &:active {
    transform: translateY(2px);
  }
`;

const CardIndicators = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const Indicator = styled(motion.div)<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$isActive ? '#ffd700' : 'rgba(255, 215, 0, 0.3)'};
  border: 2px solid #ffd700;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const CharacterSection: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);


  const characters: Character[] = [
    {
      id: 1,
      name: '杉野健太',
      role: '主人公・真のKitazuna',
      emoji: '🌱',
      bgColor: 'linear-gradient(135deg, #96ceb4, #ffeaa7)',
      description: '内向的な大学生が、秋田での出会いを通じて真のリーダーへと成長する物語の主人公。',
      detailDescription: '祖父・杉野雅弘からの緊急依頼で秋田を訪れることになった大学生。最初は逃げ腰で消極的だったが、ナギサ、コマチ、イナニワ親子、タツコとハチロウ、アキタ、トリオとタンポとの出会いを通じて成長。「魂の提灯」を集め、スギノオウを浄化してスギノカミへと導く使命を果たします。',
      tags: ['成長', 'リーダーシップ', '絆'],
      abilities: ['魂の感知', '仲間との連携', '問題解決', '浄化の力'],
      backstory: '平凡な日常を送っていたが、祖父からの依頼で人生が一変。秋田での様々な出会いと経験を通じて、自分自身の真の使命と秋田への愛を見つけていく物語です。',
      imageRandom: 35
    },
    {
      id: 2,
      name: 'ナギサ',
      role: '真のナマハゲ精神の継承者',
      emoji: '👹',
      bgColor: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
      description: '性別の壁を越えてナマハゲの真の精神を習得。伝統を守りながらも革新する勇敢な少女。',
      detailDescription: '男鹿半島出身で、幼い頃からナマハゲに憧れを持ち続けていました。伝統的に男性のみが挑戦するとされていたナマハゲの道に、性別の壁を乗り越えて挑戦。青いナマハゲ（実は女性）から正式にナマハゲ精神を認定され、真の精神的資質は外見や属性を超越することを証明しました。',
      tags: ['勇敢', '革新', '平等'],
      abilities: ['ナマハゲ精神', '心の浄化', '餅作りの技', 'SNS活用'],
      backstory: '性別による制約に疑問を持ち続け、健太との出会いをきっかけに真のナマハゲの道を歩み始めました。同時にコマチのSNS活動をサポートし、伝統と現代技術の架け橋となります。',
      imageRandom: 30
    },
    {
      id: 3,
      name: 'コマチ',
      role: '伝統と現代を繋ぐインフルエンサー',
      emoji: '🌸',
      bgColor: 'linear-gradient(135deg, #ffd700, #ffed4e)',
      description: '小野小町の化身。平安時代からの美の知識をSNSで現代に伝える革新的な存在。',
      detailDescription: '長い間蓄積された美と文化の知識を持ちながら、現代社会での居場所を失い孤独感を抱えていました。ナギサの提案でSNSを活用し、「平安美人」としてのブランドを確立。短期間で1,000人のフォロワーを獲得し、伝統的価値と現代技術の美しい融合を実現しました。',
      tags: ['美', 'デジタル', '文化継承'],
      abilities: ['美の追求', 'SNS運営', '骨董品鑑定', 'ブランディング'],
      backstory: 'ナギサとの出会いにより伝統的価値の現代的表現方法を発見。古い知識と新しい技術の素晴らしい調和を示し、地方の文化を世界に発信する道を開きました。',
      imageRandom: 31
    },
    {
      id: 4,
      name: 'イナニワ & カント',
      role: '伝統と革新の親子',
      emoji: '🍜',
      bgColor: 'linear-gradient(135deg, #4ecdc4, #45b7d1)',
      description: '稲庭うどん職人の父と竿燈士の息子。世代間の理解と技術の融合で新たな道を開く。',
      detailDescription: '湯沢市で「令和耕助」を経営するイナニワと、竿燈祭りに熱中する息子カントの親子。当初は事業承継をめぐって対立していましたが、カントが新技「足竿燈」に挑戦する中で、父の稲庭うどんの手ぬい技術との融合により新たな可能性を発見。伝統の継承と革新の創造が両立する美しい物語です。',
      tags: ['事業承継', '技術融合', '家族の絆'],
      abilities: ['手ぬい技術', '足竿燈', '世代橋渡し', '伝統革新'],
      backstory: '父子の価値観の相違から始まった対立が、互いの技術への敬意と理解を通じて和解。異なる分野の技術が融合することで生まれる新たな可能性を示しました。',
      imageRandom: 32
    },
    {
      id: 5,
      name: 'タツコ & ハチロウ',
      role: '純粋な愛で繋がれた伝説の恋人たち',
      emoji: '💙',
      bgColor: 'linear-gradient(135deg, #667eea, #96ceb4)',
      description: '田沢湖のタツコと八郎潟のハチロウ。純粋な愛の力で困難を乗り越える物語。',
      detailDescription: '美しくなろうとして龍の姿になってしまったタツコと、十和田湖から追い出されて落ち込むハチロウの恋物語。南祖坊の妨害工作を乗り越え、純粋な愛の力で田沢湖の氷を溶かし、地域を救いました。外見ではなく内面の美しさの重要性、そして地域間の分断を乗り越える連帯の価値を描いた感動的な物語です。',
      tags: ['純愛', '自然', '地域協力'],
      abilities: ['氷の操作', '愛の力', '地域結束', '心の美しさ'],
      backstory: 'ギャル化してしまった自分の外見にコンプレックスを持つタツコと、自信を失ったハチロウが、互いの心の美しさを認め合うことで真の愛を見つけました。',
      imageRandom: 33
    },
    {
      id: 6,
      name: 'アキタ',
      role: '技術と伝統を融合したAI秋田犬',
      emoji: '🤖',
      bgColor: 'linear-gradient(135deg, #45b7d1, #ffd700)',
      description: 'サイボーグ化された秋田犬。最先端技術と忠誠心を兼ね備えた秋田の守護者。',
      detailDescription: '健太の父・ヒロシが秘密裏に開発したサイボーグAI秋田犬。「一白水成」で復活し、高度なAIと秋田犬の忠誠心を融合した存在です。木造カラクリブリキロボ「咲誇」との連携で秋田を守る使命を帯びています。技術と伝統の美しい融合、そして家族の絆の大切さを示すキャラクターです。',
      tags: ['AI', '忠誠心', '技術融合'],
      abilities: ['高度AI', '戦闘能力', '咲誇連携', '秋田守護'],
      backstory: '父・ヒロシの秋田への深い愛と最先端技術によって生まれた存在。表面的には酒飲みと思われていた父の真の姿と、家族への深い愛情を明かす重要な存在です。',
      imageRandom: 34
    },
    {
      id: 7,
      name: 'トリオ & タンポ',
      role: '協力で秋田を統一するコンビ',
      emoji: '🍲',
      bgColor: 'linear-gradient(135deg, #ff6b6b, #ffd700)',
      description: '比内地鶏のトリオときりたんぽのタンポ。対立から協力へ、秋田県の統一を実現する。',
      detailDescription: '比内地鶏の擬人化キャラ・トリオ（ギャング風）ときりたんぽの化身・タンポ（ヤンキー風）が激しく対立していた鹿角市。南祖坊の分裂工作を乗り越え、究極の料理対決を通じて協力の価値を発見。秋田の食材が組み合わさることで生まれる相乗効果を実感し、県全体の統合と「秋田ブランド」の強力さを実現しました。',
      tags: ['統合', '協力', '秋田ブランド'],
      abilities: ['料理コンボ', '地域結束', '相乗効果', 'ブランド化'],
      backstory: '最初は互いの存在を否定し合っていましたが、協力して作ったきりたんぽ鍋の絶品の美味しさを体験し、秋田の素晴らしい食材を結集して世界に発信する使命を共有しました。',
      imageRandom: 35
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % characters.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay, characters.length]);

  const nextCard = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % characters.length);
  };

  const prevCard = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  return (
    <CharacterContainer id="character-section">
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        秋田名物Kitazuna's
      </SectionTitle>

      <CardGameContainer>
        <AnimatePresence mode="wait">
          {[-1, 0, 1].map((offset) => {
            const cardIndex = (currentIndex + offset + characters.length) % characters.length;
            const character = characters[cardIndex];
            const position = offset === -1 ? 'left' : offset === 0 ? 'center' : 'right';
            
            return (
              <PokemonCard
                key={`${character.id}-${currentIndex}`}
                $position={position}
                {...CardShuffleIn}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onClick={() => position === 'center' && setSelectedCharacter(character)}
                whileHover={{ scale: position === 'center' ? 1.15 : 0.9 }}
                whileTap={{ scale: position === 'center' ? 1.05 : 0.85 }}
              >
                <CardHeader>
                  <CardTitle>{character.name}</CardTitle>
                </CardHeader>
                
                <CardImageArea $bgColor={character.bgColor}>
                  {/* <CharacterPortrait
                    src={`https://picsum.photos/300/200?random=${character.imageRandom}`}
                    alt={`KITAZUNA's ${character.name}`}
                    loading="lazy"
                  /> */}
                  <CharacterEmoji>{character.emoji}</CharacterEmoji>
                </CardImageArea>
                
                <CardInfo>
                  <CharacterRole>{character.role}</CharacterRole>
                  <CharacterDescription>{character.description}</CharacterDescription>
                  <CharacterTags>
                    {character.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Tag key={tagIndex}>{tag}</Tag>
                    ))}
                  </CharacterTags>
                </CardInfo>
              </PokemonCard>
            );
          })}
        </AnimatePresence>
      </CardGameContainer>
      
      <NavigationControls>
        <NavButton 
          onClick={prevCard}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </NavButton>
        
        <CardIndicators>
          {characters.map((_, index) => (
            <Indicator
              key={index}
              $isActive={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </CardIndicators>
        
        <NavButton 
          onClick={nextCard}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </NavButton>
      </NavigationControls>

      <DesignerCredit>
        <DesignerTitle>キャラクターデザイン</DesignerTitle>
        <DesignerDescription>
          キャラクターデザインは「くにおくん」シリーズで知られる緒方孝治氏が手がけています。
          レトロゲームの魅力と現代的なセンスを融合した、親しみやすくも個性的なキャラクターたちが
          プレイヤーを秋田の世界へと導きます。
        </DesignerDescription>
      </DesignerCredit>

      <AnimatePresence>
        {selectedCharacter && (
          <CharacterModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCharacter(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setSelectedCharacter(null)}>✕</CloseButton>
              
              <ModalCharacterImage $bgColor={selectedCharacter.bgColor}>
                {selectedCharacter.emoji}
              </ModalCharacterImage>
              
              <h2 style={{ textAlign: 'center', color: '#ffd700', marginBottom: '0.5rem' }}>
                {selectedCharacter.name}
              </h2>
              <p style={{ textAlign: 'center', color: '#ff6b6b', marginBottom: '2rem' }}>
                {selectedCharacter.role}
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#4ecdc4', marginBottom: '1rem' }}>詳細</h3>
                <p style={{ lineHeight: 1.8, color: '#e0e0e0' }}>
                  {selectedCharacter.detailDescription}
                </p>
              </div>

              {selectedCharacter.abilities && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ color: '#4ecdc4', marginBottom: '1rem' }}>特殊能力</h3>
                  <ul style={{ color: '#e0e0e0', paddingLeft: '1.5rem' }}>
                    {selectedCharacter.abilities.map((ability, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem' }}>{ability}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedCharacter.backstory && (
                <div>
                  <h3 style={{ color: '#4ecdc4', marginBottom: '1rem' }}>背景ストーリー</h3>
                  <p style={{ lineHeight: 1.8, color: '#e0e0e0' }}>
                    {selectedCharacter.backstory}
                  </p>
                </div>
              )}
            </ModalContent>
          </CharacterModal>
        )}
      </AnimatePresence>
    </CharacterContainer>
  );
};

export default CharacterSection;