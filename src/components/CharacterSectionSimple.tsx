import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CharacterContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%);
  color: white;
  position: relative;
  overflow: hidden;
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

const CharacterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const CharacterCard = styled(motion.div)`
  background: linear-gradient(145deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%);
  border-radius: 20px;
  border: 3px solid #ffd700;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }
`;

const CharacterEmoji = styled.div`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const CharacterName = styled.h3`
  color: #ffd700;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const CharacterRole = styled.p`
  color: #ff6b6b;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const CharacterDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
  text-align: center;
  font-size: 0.9rem;
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
  description: string;
}

const CharacterSectionSimple: React.FC = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: '杉野健太',
      role: '主人公・真のKitazuna',
      emoji: '🌱',
      description: '内向的な大学生が、秋田での出会いを通じて真のリーダーへと成長する物語の主人公。'
    },
    {
      id: 2,
      name: 'ナギサ',
      role: '真のナマハゲ精神の継承者',
      emoji: '👹',
      description: '性別の壁を越えてナマハゲの真の精神を習得。伝統を守りながらも革新する勇敢な少女。'
    },
    {
      id: 3,
      name: 'コマチ',
      role: '伝統と現代を繋ぐインフルエンサー',
      emoji: '🌸',
      description: '小野小町の化身。平安時代からの美の知識をSNSで現代に伝える革新的な存在。'
    },
    {
      id: 4,
      name: 'イナニワ & カント',
      role: '伝統と革新の親子',
      emoji: '🍜',
      description: '稲庭うどん職人の父と竿燈士の息子。世代間の理解と技術の融合で新たな道を開く。'
    },
    {
      id: 5,
      name: 'タツコ & ハチロウ',
      role: '純粋な愛で繋がれた伝説の恋人たち',
      emoji: '💙',
      description: '田沢湖のタツコと八郎潟のハチロウ。純粋な愛の力で困難を乗り越える物語。'
    },
    {
      id: 6,
      name: 'アキタ',
      role: '技術と伝統を融合したAI秋田犬',
      emoji: '🤖',
      description: 'サイボーグ化された秋田犬。最先端技術と忠誠心を兼ね備えた秋田の守護者。'
    },
    {
      id: 7,
      name: 'トリオ & タンポ',
      role: '協力で秋田を統一するコンビ',
      emoji: '🍲',
      description: '比内地鶏のトリオときりたんぽのタンポ。対立から協力へ、秋田県の統一を実現する。'
    }
  ];

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

      <CharacterGrid>
        {characters.map((character, index) => (
          <CharacterCard
            key={character.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CharacterEmoji>{character.emoji}</CharacterEmoji>
            <CharacterName>{character.name}</CharacterName>
            <CharacterRole>{character.role}</CharacterRole>
            <CharacterDescription>{character.description}</CharacterDescription>
          </CharacterCard>
        ))}
      </CharacterGrid>

      <DesignerCredit>
        <DesignerTitle>キャラクターデザイン</DesignerTitle>
        <DesignerDescription>
          キャラクターデザインは「くにおくん」シリーズで知られる緒方孝治氏が手がけています。
          レトロゲームの魅力と現代的なセンスを融合した、親しみやすくも個性的なキャラクターたちが
          プレイヤーを秋田の世界へと導きます。
        </DesignerDescription>
      </DesignerCredit>
    </CharacterContainer>
  );
};

export default CharacterSectionSimple;