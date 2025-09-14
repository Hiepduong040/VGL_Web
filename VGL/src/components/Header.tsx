import React from "react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setCurrentPage: (page: 'home' | 'power-max' | 'intro') => void;
  colors: {
    primary: string;
    buttonPrimary: string;
    buttonSecondary: string;
  };
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, setCurrentPage, colors }) => {
  return (
    <header className="w-full" style={{ borderBottom: '1px solid #E6E8EB' }}>
      <div className="w-[1280px] h-[68px] mx-auto flex justify-between items-center" style={{ padding: '12px 40px' }}>
        {/* Logo */}
        <img
          src="/img/LOGO1.png"
          alt="Logo"
          className="w-[96px] h-[43px] object-contain"
        />

        {/* Navigation */}
        <nav className="flex items-center gap-9">
          <div className="flex items-center gap-9">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-sm font-medium leading-[21px] transition-colors duration-300"
              style={{ color: colors.primary }}
            >
              Trang chủ
            </button>
            <button
              onClick={() => setCurrentPage('intro')}
              className="text-sm font-medium leading-[21px] transition-colors duration-300"
              style={{ color: colors.primary }}
            >
              Giới thiệu
            </button>
            <button
              onClick={() => setCurrentPage('power-max')}
              className="text-sm font-medium leading-[21px] transition-colors duration-300"
              style={{ color: colors.primary }}
            >
              Dịch vụ
            </button>

            <a
              href="#news"
              className="text-sm font-medium leading-[21px] transition-colors duration-300"
              style={{ color: colors.primary }}
            >
              Tin tức
            </a>
            <a
              href="#contact"
              className="text-sm font-medium leading-[21px] transition-colors duration-300"
              style={{ color: colors.primary }}
            >
              Liên hệ
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 rounded-lg text-sm font-bold leading-[21px] h-[40px] transition-colors duration-300"
              style={{
                backgroundColor: colors.buttonPrimary,
                color: colors.primary
              }}
            >
              Tư vấn
            </button>
            <button
              className="px-4 py-2 rounded-lg text-sm font-bold leading-[21px] h-[40px] transition-colors duration-300"
              style={{
                backgroundColor: colors.buttonSecondary,
                color: colors.primary
              }}
            >
              Tải ứng dụng
            </button>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              style={{
                backgroundColor: colors.buttonSecondary,
                color: colors.primary
              }}
              title={isDarkMode ? 'Chuyển sang Light Mode' : 'Chuyển sang Dark Mode'}
            >
              {isDarkMode ? (
                // Moon icon for dark mode
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                // Sun icon for light mode
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
