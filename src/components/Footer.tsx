import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
  color: white;
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled(motion.div)`
  h3 {
    color: #ffd700;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
`;

const FooterLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  display: block;
  padding: 0.3rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #e0e0e0;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ffd700;
    transform: translateY(-3px);
  }
`;

const ContactInfo = styled.div`
  p {
    color: #e0e0e0;
    margin: 0.5rem 0;
    line-height: 1.6;
  }
`;

const Newsletter = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const NewsletterInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  margin-bottom: 1rem;

  &::placeholder {
    color: #b8b8b8;
  }

  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`;

const NewsletterButton = styled(motion.button)`
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(45deg, #ffd700, #ff6b6b);
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: #b8b8b8;
  font-size: 0.9rem;
`;

const GameLogo = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
`;

const LogoText = styled.h2`
  font-size: 2rem;
  background: linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const LogoSubtext = styled.p`
  color: #b8b8b8;
  font-style: italic;
`;

const BackToTop = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
  }
`;

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    alert('ニュースレター購読ありがとうございます！');
  };

  return (
    <>
      <FooterContainer>
        <GameLogo
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <LogoText>KITAZUNA's</LogoText>
          <LogoSubtext>ゲームが繋ぐ世界</LogoSubtext>
        </GameLogo>

        <FooterContent>
          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>プロジェクト</h3>
            <FooterLink href="#game-section">ゲーム概要</FooterLink>
            <FooterLink href="#story-section">ストーリー</FooterLink>
            <FooterLink href="#character-section">キャラクター</FooterLink>
            <FooterLink href="#ec-section">EC・二次創作</FooterLink>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>if(DELIC)</h3>
            <ContactInfo>
              <p>代表: 高崎翔太</p>
              <p>秋田県</p>
              <p>Email: info@if-delic.jp</p>
            </ContactInfo>
            <SocialLinks>
              <SocialLink href="#" title="Twitter">🐦</SocialLink>
              <SocialLink href="#" title="Instagram">📷</SocialLink>
              <SocialLink href="#" title="YouTube">📺</SocialLink>
              <SocialLink href="#" title="Discord">💬</SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>パートナー</h3>
            <FooterLink href="#">事業パートナー募集</FooterLink>
            <FooterLink href="#">クリエイター登録</FooterLink>
            <FooterLink href="#">観光業界の方へ</FooterLink>
            <FooterLink href="#">教育機関との連携</FooterLink>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>最新情報</h3>
            <Newsletter>
              <p style={{ color: '#e0e0e0', marginBottom: '1rem', fontSize: '0.9rem' }}>
                開発進捗やイベント情報をお届けします
              </p>
              <form onSubmit={handleNewsletterSubmit}>
                <NewsletterInput
                  type="email"
                  placeholder="メールアドレス"
                  required
                />
                <NewsletterButton
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  購読する
                </NewsletterButton>
              </form>
            </Newsletter>
          </FooterSection>
        </FooterContent>

        <Copyright>
          <p>&copy; 2025 if(DELIC) - KITAZUNA's Project. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            キャラクターデザイン: 緒方孝治 | 開発協力: if(塾)
          </p>
        </Copyright>
      </FooterContainer>

      <BackToTop
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        ↑
      </BackToTop>
    </>
  );
};

export default Footer;