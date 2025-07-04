import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const StoryContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%);
  color: white;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StoryTimeline = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const TimelineTrack = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #4ecdc4, #45b7d1);
  transform: translateX(-50%);
  
  @media (max-width: 768px) {
    left: 30px;
  }
`;

const ChapterCard = styled(motion.div)<{ $isActive: boolean; $side: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  flex-direction: ${props => props.$side === 'left' ? 'row' : 'row-reverse'};
  
  @media (max-width: 768px) {
    flex-direction: row;
    margin-left: 60px;
  }
`;

const ChapterContent = styled(motion.div)<{ $side: 'left' | 'right' }>`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: ${props => props.$side === 'left' ? '0 2rem 0 0' : '0 0 0 2rem'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(78, 205, 196, 0.3);
  }
  
  @media (max-width: 768px) {
    margin: 0 0 0 2rem;
  }
`;

const ChapterIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4ecdc4, #45b7d1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  z-index: 2;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://picsum.photos/100/100?random=20');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`;

const ChapterImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

const ChapterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #4ecdc4;
`;

const ChapterDescription = styled.p`
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 1rem;
`;

const ChapterTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: rgba(78, 205, 196, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #4ecdc4;
  border: 1px solid rgba(78, 205, 196, 0.3);
`;

const DetailModal = styled(motion.div)`
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
  max-width: 800px;
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

const StorySection: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  const chapters = [
    {
      id: 1,
      icon: '🚄',
      title: 'オープニング - 新幹線での導入',
      description: '平凡な大学生・杉野健太が新幹線で秋田へ。祖父の緊急依頼で「魂の提灯」を集める冒険の始まり。',
      tags: ['導入', '世界観', '秋田'],
      detail: '内向的な大学生の健太が、冒険家の祖父・杉野雅弘から突然の依頼を受けて秋田へ向かいます。「スギノオウ」という秋田県民の過度な真面目さが生んだ化身の復活を阻止するため、「魂の提灯」を集める使命を背負うことになります。平凡だった青年が、故郷の秋田で本当の自分を見つけていく物語の始まりです。',
      imageRandom: 21
    },
    {
      id: 2,
      icon: '👹',
      title: '男鹿編 - ナマハゲの祠での試練',
      description: '女性のナギサがナマハゲの精神を証明。性別の壁を越えた真の強さとは何かを問う物語。',
      tags: ['ナマハゲ', '性別平等', '伝統'],
      detail: '祖父の戦友・源三郎の案内で、ナマハゲの祠を目指します。女性であることを理由にナマハゲになることを諦めていたナギサが、真のナマハゲ精神を証明します。青いナマハゲが実は女性だったという真実と共に、性別による制約が人間が勝手に決めたものであることを学び、真の精神的資質は外見や属性を超越することを知ります。',
      imageRandom: 22
    },
    {
      id: 3,
      icon: '💄',
      title: '湯沢編 - コマチとSNS活用',
      description: '小野小町の化身コマチが現代のSNSに挑戦。伝統的価値を現代に発信する革新的な取り組み。',
      tags: ['SNS', 'デジタル', '伝統継承'],
      detail: '平安時代から続く知識を持つコマチが、現代社会での居場所を失い孤独感を抱えています。ナギサの提案でSNSを活用し、「平安美人」としてのブランドを確立。短期間で1,000人のフォロワーを獲得し、伝統と現代技術の融合に成功します。古い価値観と新しい技術の調和を描いた感動的な物語です。',
      imageRandom: 23
    },
    {
      id: 4,
      icon: '🏮',
      title: '秋田編 - 稲庭うどんと竿燈祭り',
      description: '事業承継で悩む親子の物語。伝統技術と革新的発想の融合で、新たな可能性を見つける。',
      tags: ['事業承継', '親子', '技術革新'],
      detail: '稲庭うどん職人のイナニワと、竿燈祭りに熱中する息子カントの親子関係に焦点を当てます。カントは新技「足竿燈」に挑戦しますが、行き詰まりを感じていました。父親の稲庭うどんの手ぬい技術との融合により大技を完成させ、世代間の理解と技術の継承を実現します。伝統の継承と革新の創造の両立を描いた心温まる物語です。',
      imageRandom: 24
    },
    {
      id: 5,
      icon: '💙',
      title: '三湖編 - 愛と絆で繋ぐ三湖',
      description: '田沢湖のタツコと八郎潟のハチロウの恋物語。純粋な愛の力で困難を乗り越える感動的な物語。',
      tags: ['愛', '自然', '地域協力'],
      detail: '美しくなろうとして龍の姿になってしまったタツコと、十和田湖から追い出されて落ち込むハチロウの恋物語。南祖坊の妨害工作を乗り越え、純粋な愛の力で田沢湖の氷を溶かします。外見ではなく内面の美しさの重要性、そして地域間の分断を乗り越える連帯の価値を描いた感動的な物語です。',
      imageRandom: 25
    },
    {
      id: 6,
      icon: '🤖',
      title: '大館編 - サイボーグAI秋田犬アキタ',
      description: '"酒飲み親父"の真実と、サイボーグ化された秋田犬アキタの復活。技術と伝統の融合。',
      tags: ['AI', '家族', '技術'],
      detail: '地元では酒ばかり飲む「ダメ親父」として知られる健太の父・ヒロシの真実が明かされます。元東京の大手メーカーエンジニアだった彼が、愛犬アキタをサイボーグ化して秋田を守る使命を託していました。「一白水成」で復活したアキタとの出会いを通じて、家族の絆と技術と伝統の融合を描きます。',
      imageRandom: 26
    },
    {
      id: 7,
      icon: '🍲',
      title: '鹿角編 - きりたんぽ大戦争',
      description: 'トリオとタンポの対立から協力へ。秋田県全体の統一と、分裂から統合への転換を描く。',
      tags: ['統合', '協力', '秋田ブランド'],
      detail: '比内地鶏の擬人化キャラ・トリオと、きりたんぽの化身・タンポが激しく対立していた鹿角市。南祖坊の工作により分裂していた彼らが、究極の料理対決を通じて協力の価値を発見します。秋田の食材が組み合わさることで生まれる相乗効果を実感し、県全体の統合と「秋田ブランド」の強力さを実現する物語です。',
      imageRandom: 27
    }
  ];

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

      <StoryTimeline>
        <TimelineTrack />
        {chapters.map((chapter, index) => (
          <ChapterCard
            key={chapter.id}
            $isActive={activeChapter === chapter.id}
            $side={index % 2 === 0 ? 'left' : 'right'}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ChapterIcon
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {chapter.icon}
            </ChapterIcon>
            
            <ChapterContent
              $side={index % 2 === 0 ? 'left' : 'right'}
              onClick={() => setActiveChapter(chapter.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ChapterImage
                src={`https://picsum.photos/400/200?random=${chapter.imageRandom}`}
                alt={`KITAZUNA's ${chapter.title}の物語シーン - 日本の秋田県を舞台にした${chapter.id === 1 ? '新幹線で秋田に向かう主人公の旅路、現代日本の交通インフラと地方への想いを表現した画像' : chapter.id === 2 ? '男鹿半島の神秘的なナマハゲ神社と伝統的な祭りの風景、日本の民俗文化と性別を超えた精神性を表現' : chapter.id === 3 ? '湯沢市の美しい古い街並みとSNSを使う現代的な若者、日本の伝統と現代技術の融合を表現' : chapter.id === 4 ? '秋田市の竿燈祭りと稲庭うどん製造の職人技、日本の伝統技術と世代継承をテーマにした画像' : chapter.id === 5 ? '田沢湖・八郎潟・十和田湖の美しい自然風景、日本の自然保護と環境問題への取り組みを表現' : '大館市の秋田犬と人間の絆、日本の動物愛護精神と国際的な文化交流を表現'}した物語ビジュアル`}
                loading="lazy"
              />
              <ChapterTitle>{chapter.title}</ChapterTitle>
              <ChapterDescription>{chapter.description}</ChapterDescription>
              <ChapterTags>
                {chapter.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </ChapterTags>
            </ChapterContent>
          </ChapterCard>
        ))}
      </StoryTimeline>

      <AnimatePresence>
        {activeChapter && (
          <DetailModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveChapter(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setActiveChapter(null)}>✕</CloseButton>
              {chapters.find(c => c.id === activeChapter) && (
                <>
                  <h2 style={{ color: '#4ecdc4', marginBottom: '1rem' }}>
                    {chapters.find(c => c.id === activeChapter)?.title}
                  </h2>
                  <p style={{ lineHeight: 1.8, color: '#e0e0e0' }}>
                    {chapters.find(c => c.id === activeChapter)?.detail}
                  </p>
                </>
              )}
            </ModalContent>
          </DetailModal>
        )}
      </AnimatePresence>
    </StoryContainer>
  );
};

export default StorySection;