import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import PowerMaxServicePage from "./pages/PowerMaxServicePage";
import PowerMaxIntroPage from "./pages/PowerMaxIntroPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'power-max' | 'intro'>('home');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Color helper function
  const getColors = () => ({
    primary: isDarkMode ? '#FFFFFF' : '#121712',
    secondary: isDarkMode ? '#9EABBA' : '#618A70',
    buttonPrimary: isDarkMode ? '#1273D4' : '#12D452',
    buttonSecondary: isDarkMode ? '#293038' : '#F0F5F2',
    background: isDarkMode ? '#121417' : '#FFFFFF',
    mainBackground: isDarkMode ? '#000000' : 'transparent'
  });

  const colors = getColors();

  const renderHomePage = () => (
    <main 
      className="w-[1280px] mx-auto flex justify-center items-start transition-colors duration-300" 
      style={{ 
        padding: '20px 160px',
        backgroundColor: colors.mainBackground
      }}
    >
      <div className="w-[960px] flex flex-col items-start">
        {/* Hero Section */}
        <section className="w-[960px] h-[512px] flex flex-col items-start" style={{ padding: '16px' }}>
          <div 
            className="relative w-[928px] h-[480px] min-h-[480px] rounded-lg overflow-hidden"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(/img/banner.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Nội dung */}
            <div className="absolute" style={{ left: '182px', top: '148px', width: '563px', height: '92px' }}>
              <div className="flex flex-col items-center" style={{ gap: '8px' }}>
                {/* Title */}
                <h1 
                  className="text-white text-center font-bold"
                  style={{ 
                    width: '563px', 
                    height: '60px',
                    fontSize: '48px',
                    lineHeight: '60px',
                    letterSpacing: '-2px'
                  }}
                >
                  Cơ hội tương lai
                </h1>

                {/* Description */}
                <p 
                  className="text-white text-center"
                  style={{ 
                    width: '562px', 
                    height: '24px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '400'
                  }}
                >
                  VGL đồng hành cùng bạn trên con đường đổi mới và phát triển bền vững.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="absolute" style={{ left: '300px', top: '272px', width: '321px', height: '48px' }}>
              <div className="flex items-center" style={{ gap: '12px' }}>
                <button 
                  className="rounded-lg font-bold text-center transition-colors duration-300"
                  style={{ 
                    width: '160px', 
                    height: '48px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    padding: '0 20px',
                    backgroundColor: colors.buttonPrimary,
                    color: colors.primary
                  }}
                >
                  Khám phá ngay
                </button>

                <button 
                  className="rounded-lg font-bold text-center transition-colors duration-300"
                  style={{ 
                    width: '149px', 
                    height: '48px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    padding: '0 20px',
                    backgroundColor: colors.buttonSecondary,
                    color: colors.primary
                  }}
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-[960px] h-[60px] flex flex-col items-start" style={{ padding: '20px 16px 12px' }}>
          <h2 
            className="font-bold transition-colors duration-300"
            style={{ 
              width: '928px', 
              height: '28px',
              fontSize: '22px',
              lineHeight: '28px',
              color: colors.primary
            }}
          >
            Dịch vụ chính
          </h2>
        </section>

        {/* Card 1 */}
        <section className="w-[960px] h-[288px] flex flex-col items-start" style={{ padding: '16px' }}>
          <div className="w-[928px] h-[256px] flex items-start rounded-lg overflow-hidden">
            <img
              src="/img/image1.png"
              alt="Power Max"
              className="w-[464px] h-[256px] object-cover rounded-lg"
            />
            <div className="w-[464px] flex flex-col justify-center" style={{ padding: '16px', gap: '4px' }}>
              <div className="w-[432px] h-[23px]">
                <h3 
                  className="font-bold transition-colors duration-300"
                  style={{ 
                    fontSize: '18px',
                    lineHeight: '23px',
                    color: colors.primary
                  }}
                >
                  Hệ sinh thái Power Max
                </h3>
              </div>
              <div className="w-[432px] h-[100px] flex flex-col" style={{ gap: '4px' }}>
                <p 
                  className="transition-colors duration-300"
                  style={{ 
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '400',
                    width: '432px',
                    height: '24px',
                    color: colors.secondary
                  }}
                >
                  Giải pháp tổng thể cho cuộc sống xanh
                </p>
                <p 
                  className="transition-colors duration-300"
                  style={{ 
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '400',
                    width: '432px',
                    height: '72px',
                    color: colors.secondary
                  }}
                >
                  Hệ sinh thái Power Max là giải pháp tổng thể cho cuộc sống xanh, từ năng lượng sạch đến giao thông thông minh.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Card 2 */}
        <section className="w-[960px] h-[203px] flex flex-col items-start" style={{ padding: '16px' }}>
          <div className="w-[928px] h-[171px] flex justify-between items-start rounded-lg overflow-hidden" style={{ gap: '16px' }}>
            <div className="w-[608px] flex flex-col" style={{ gap: '4px' }}>
              <h3 
                className="font-bold transition-colors duration-300"
                style={{ 
                  width: '608px',
                  height: '20px',
                  fontSize: '16px',
                  lineHeight: '20px',
                  color: colors.primary
                }}
              >
                Phát triển phần mềm
              </h3>
              <p 
                className="transition-colors duration-300"
                style={{ 
                  width: '608px',
                  height: '21px',
                  fontSize: '14px',
                  lineHeight: '21px',
                  fontWeight: '400',
                  color: colors.secondary
                }}
              >
                Xây dựng ứng dụng và hệ thống phần mềm độc đáo, tối ưu cho doanh nghiệp.
              </p>
            </div>
            <img
              src="/img/image2.jpg"
              alt="Software"
              className="w-[250px] h-[171px] object-cover"
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="w-[960px] h-[60px] flex flex-col items-start" style={{ padding: '20px 16px 12px' }}>
          <h2 
            className="font-bold transition-colors duration-300"
            style={{ 
              width: '928px', 
              height: '28px',
              fontSize: '22px',
              lineHeight: '28px',
              color: colors.primary
            }}
          >
            Sứ mệnh & Tầm nhìn
          </h2>
        </section>

        <section className="w-[960px] h-[64px] flex flex-col items-start" style={{ padding: '4px 16px 12px' }}>
          <p 
            className="transition-colors duration-300"
            style={{ 
              width: '928px',
              height: '48px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '400',
              color: colors.primary
            }}
          >
            VGL đặt mục tiêu trở thành đối tác tin cậy, đồng hành cùng doanh nghiệp và cộng đồng trong hành trình xây dựng cuộc sống xanh bền vững.
          </p>
        </section>

        {/* News Section */}
        <section className="w-[960px] h-[60px] flex flex-col items-start" style={{ padding: '20px 16px 12px', fontFamily: 'Space Grotesk, sans-serif'  }}>
          <h2 
            className="font-bold transition-colors duration-300"
            style={{ 
              width: '928px', 
              height: '28px',
              fontSize: '22px',
              lineHeight: '28px',
              color: colors.primary
            }}
          >
            Tin tức & Bài viết mới nhất
          </h2>
        </section>

        {/* Card 3 */}
        <section className="w-[960px] h-[203px] flex flex-col items-start" style={{ padding: '16px' }}>
          <div className="w-[928px] h-[171px] flex justify-between items-start rounded-lg overflow-hidden" style={{ gap: '16px' }}>
            <div className="w-[608px] flex flex-col" style={{ gap: '4px' }}>
              <h3 
                className="font-bold transition-colors duration-300"
                style={{ 
                  width: '608px',
                  height: '20px',
                  fontSize: '16px',
                  lineHeight: '20px',
                  color: colors.primary
                }}
              >
                Xu hướng xe điện 2024
              </h3>
              <p 
                className="transition-colors duration-300"
                style={{ 
                  width: '608px',
                  height: '21px',
                  fontSize: '14px',
                  lineHeight: '21px',
                  fontWeight: '400',
                  color: colors.secondary
                }}
              >
                Cập nhật xu hướng mới nhất về xe điện và công nghệ xanh.
              </p>
            </div>
            <img
              src="/img/image3.png"
              alt="Electric Car"
              className="w-[320px] h-[171px] object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Card 4 */}
        <section className="w-[960px] h-[203px] flex flex-col items-start" style={{ padding: '16px' }}>
          <div className="w-[928px] h-[171px] flex justify-between items-start rounded-lg overflow-hidden" style={{ gap: '16px' }}>
            <div className="w-[608px] flex flex-col" style={{ gap: '4px' }}>
              <h3 
                className="font-bold transition-colors duration-300"
                style={{ 
                  width: '608px',
                  height: '20px',
                  fontSize: '16px',
                  lineHeight: '20px',
                  color: colors.primary
                }}
              >
                Giải pháp năng lượng tái tạo
              </h3>
              <p 
                className="transition-colors duration-300"
                style={{ 
                  width: '608px',
                  height: '21px',
                  fontSize: '14px',
                  lineHeight: '21px',
                  fontWeight: '400',
                  color: colors.secondary
                }}
              >
                Tìm hiểu về các giải pháp năng lượng mặt trời, gió và các nguồn tái tạo khác.
              </p>
            </div>
            <img
              src="/img/image4.png"
              alt="Solar Panels"
              className="w-[320px] h-[171px] object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-[960px] h-[285px] flex flex-col justify-end" style={{ padding: '80px 40px', gap: '32px' }}>
          <div className="w-[880px] h-[45px] flex flex-col" style={{ gap: '8px' }}>
            <h2 
              className="font-bold text-center transition-colors duration-300"
              style={{ 
                width: '720px',
                height: '45px',
                fontSize: '36px',
                lineHeight: '45px',
                letterSpacing: '-1px',
                color: colors.primary
              }}
            >
              Bắt đầu hành trình xanh cùng VGL
            </h2>
          </div>
          <div className="w-[880px] h-[48px] flex justify-center">
            <button 
              className="rounded-lg font-bold text-center transition-colors duration-300"
              style={{ 
                width: '141px', 
                height: '48px',
                fontSize: '16px',
                lineHeight: '24px',
                padding: '0 20px',
                backgroundColor: colors.buttonPrimary,
                color: colors.primary
              }}
            >
              Liên hệ ngay
            </button>
          </div>
        </section>
      </div>
    </main>
  );

  return (
    <div 
      className={`w-full transition-colors duration-300`} 
      style={{ 
        fontFamily: 'Space Grotesk, sans-serif',
        backgroundColor: colors.background,
        color: colors.primary
      }}
    >
      <Header 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        setCurrentPage={setCurrentPage}
        colors={colors}
      />
      
      {currentPage === 'home' ? renderHomePage() : 
       currentPage === 'intro' ? <PowerMaxIntroPage isDarkMode={isDarkMode} colors={colors} /> :
       <PowerMaxServicePage isDarkMode={isDarkMode} colors={colors} />}
      
      <Footer isDarkMode={isDarkMode} colors={colors} />
      <BackToTop isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;