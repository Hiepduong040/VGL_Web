import React from "react";

interface FooterProps {
  isDarkMode: boolean;
  colors: {
    secondary: string;
  };
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, colors }) => {
  return (
    <footer className="w-[1280px] mx-auto flex justify-center">
      <div className="w-[960px] h-[200px] flex flex-col" style={{ padding: '40px 20px', gap: '24px' }}>
        <div className="w-[920px] h-[24px] flex justify-between items-center">
          <a 
            href="#about" 
            className="text-center transition-colors duration-300" 
            style={{ 
              width: '160px', 
              fontSize: '16px', 
              lineHeight: '24px', 
              fontWeight: '400',
              color: colors.secondary
            }}
          >
            Giới thiệu
          </a>
          <a 
            href="#services" 
            className="text-center transition-colors duration-300" 
            style={{ 
              width: '160px', 
              fontSize: '16px', 
              lineHeight: '24px', 
              fontWeight: '400',
              color: colors.secondary
            }}
          >
            Dịch vụ
          </a>
          <a 
            href="#news" 
            className="text-center transition-colors duration-300" 
            style={{ 
              width: '160px', 
              fontSize: '16px', 
              lineHeight: '24px', 
              fontWeight: '400',
              color: colors.secondary
            }}
          >
            Tin tức
          </a>
          <a 
            href="#contact" 
            className="text-center transition-colors duration-300" 
            style={{ 
              width: '160px', 
              fontSize: '16px', 
              lineHeight: '24px', 
              fontWeight: '400',
              color: colors.secondary
            }}
          >
            Liên hệ
          </a>
        </div>
        {/* Social Logos */}
        <div className="w-[920px] h-[24px] flex justify-center" style={{ gap: '16px' }}>
          <a href="#" className="w-[24px] h-[24px]">
            <img 
              src="/img/face.svg" 
              alt="Facebook" 
              className="w-[24px] h-[24px]" 
              style={{ 
                filter: isDarkMode 
                  ? 'brightness(0) saturate(100%) invert(67%) sepia(8%) saturate(1018%) hue-rotate(169deg) brightness(90%) contrast(88%)' 
                  : 'none' 
              }} 
            />
          </a>
          <a href="#" className="w-[24px] h-[24px]">
            <img 
              src="/img/x.svg" 
              alt="X" 
              className="w-[24px] h-[24px]" 
              style={{ 
                filter: isDarkMode 
                  ? 'brightness(0) saturate(100%) invert(67%) sepia(8%) saturate(1018%) hue-rotate(169deg) brightness(90%) contrast(88%)' 
                  : 'none' 
              }} 
            />
          </a>
          <a href="#" className="w-[24px] h-[24px]">
            <img 
              src="/img/insta.svg" 
              alt="Instagram" 
              className="w-[24px] h-[24px]" 
              style={{ 
                filter: isDarkMode 
                  ? 'brightness(0) saturate(100%) invert(67%) sepia(8%) saturate(1018%) hue-rotate(169deg) brightness(90%) contrast(88%)' 
                  : 'none' 
              }} 
            />
          </a>
        </div>
        <div className="w-[920px] h-[24px] flex justify-center">
          <p 
            className="text-center transition-colors duration-300" 
            style={{ 
              fontSize: '16px', 
              lineHeight: '24px', 
              fontWeight: '400',
              color: colors.secondary
            }}
          >
            © 2024 VGL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
