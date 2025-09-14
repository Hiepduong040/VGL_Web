import React from "react";

interface PowerMaxServicePageProps {
  isDarkMode: boolean;
  colors: {
    primary: string;
    secondary: string;
    buttonPrimary: string;
    buttonSecondary: string;
    mainBackground: string;
  };
}

const PowerMaxServicePage: React.FC<PowerMaxServicePageProps> = ({ isDarkMode, colors }) => {
  const features = [
    {
      title: "Sạc xe thông minh",
      description: "Tìm kiếm và đặt lịch sạc xe tại hơn 1000 trạm sạc trên toàn quốc. Quản lý lịch sử sạc và thanh toán tiện lợi.",
      image: "/img/img_sac_xe.png"
    },
    {
      title: "Cứu hộ 24/7",
      description: "Hỗ trợ cứu hộ xe 24/7 trong trường hợp xe gặp sự cố. Kết nối nhanh chóng với đội ngũ kỹ thuật viên chuyên nghiệp.",
      image: "/img/img_cuu_ho.png"
    },
    {
      title: "Gara xe của bạn",
      description: "Quản lý thông tin chi tiết về xe của bạn, bao gồm mẫu xe, biển số, lịch bảo dưỡng và các thông số kỹ thuật.",
      image: "/img/img_gara_xe.png"
    }
  ];

  const faqs = [
    "Power Max tương thích với những dòng xe nào?",
    "Làm thế nào để đặt lịch sạc xe?",
    "Có thể nâng cấp gói dịch vụ không?"
  ];

  return (
    <main 
      className="w-[1280px] mx-auto flex justify-center items-start transition-colors duration-300" 
      style={{ 
        padding: '20px 160px',
        backgroundColor: colors.mainBackground
      }}
    >
      <div className="w-[960px] flex flex-col items-start">
        {/* Hero Section */}
        <section className="w-[960px] h-[396px] flex flex-col items-start">
          <div className="w-[960px] h-[396px] flex items-start" style={{ padding: '40px 16px', gap: '32px' }}>
            {/* Image */}
            <div 
              className="w-[400px] h-[316px] rounded-lg"
              style={{
                backgroundImage: "url('/img/img_power_max.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            {/* Content */}
            <div className="w-[496px] h-[316px] flex flex-col justify-center" style={{ gap: '32px' }}>
              <div className="w-[496px] h-[236px] flex flex-col" style={{ gap: '8px' }}>
                <h1 
                  className="font-bold transition-colors duration-300"
                  style={{ 
                    width: '496px',
                    height: '180px',
                    fontSize: '48px',
                    lineHeight: '60px',
                    letterSpacing: '-2px',
                    color: colors.primary
                  }}
                >
                  Power Max: Đồng hành cùng bạn trên mọi nẻo đường
                </h1>
                
                <p 
                  className="transition-colors duration-300"
                  style={{ 
                    width: '496px',
                    height: '48px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '400',
                    color: colors.primary
                  }}
                >
                  Power Max là ứng dụng quản lý xe điện thông minh, giúp bạn tận hưởng một cuộc sống xanh tiện nghi và an toàn.
                </p>
              </div>
              <button 
                className="rounded-lg font-bold text-center transition-colors duration-300"
                style={{ 
                  width: '480px',
                  height: '48px',
                  fontSize: '16px',
                  lineHeight: '24px',
                  padding: '0 20px',
                  backgroundColor: colors.buttonPrimary,
                  color: colors.primary
                }}
              >
                Tải ứng dụng
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
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
            Tính năng nổi bật
          </h2>
        </section>

        <section className="w-[960px] h-[444px] flex flex-col items-start" style={{ padding: '16px', gap: '12px' }}>
          <div className="w-[928px] h-[412px] flex" style={{ gap: '12px' }}>
            {features.map((feature, index) => (
              <div key={index} className="w-[301px] h-[412px] flex flex-col" style={{ gap: '12px' }}>
                <div 
                  className="w-[301px] h-[301px] rounded-lg"
                  style={{
                    backgroundImage: `url('${feature.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                
                <div className="w-[301px] h-[87px] flex flex-col">
                  <h3 
                    className="font-medium transition-colors duration-300"
                    style={{ 
                      width: '301px',
                      height: '24px',
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: colors.primary
                    }}
                  >
                    {feature.title}
                  </h3>
                  
                  <p 
                    className="transition-colors duration-300"
                    style={{ 
                      width: '301px',
                      height: '63px',
                      fontSize: '14px',
                      lineHeight: '21px',
                      fontWeight: '400',
                      color: colors.secondary
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tutorial Section */}
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
            Hướng dẫn sử dụng
          </h2>
        </section>

        <section className="w-[960px] h-[554px] flex flex-col items-start" style={{ padding: '16px' }}>
          <div 
            className="relative w-[928px] h-[522px] rounded-lg flex items-center justify-center"
            style={{
              backgroundImage: "url('/img/img_huong_dan.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: isDarkMode ? '#121712' : '#FFFFFF'
            }}
          >
            {/* Play Button */}
            <div 
              className="w-[64px] h-[64px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
            Câu hỏi thường gặp
          </h2>
        </section>

        <section className="w-[960px] h-[215px] flex flex-col items-start" style={{ padding: '16px', gap: '12px' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="w-[928px] h-[53px] flex items-center justify-between rounded-lg transition-colors duration-300"
              style={{ 
                padding: '7px 15px',
                backgroundColor: isDarkMode ? '#121417' : '#FFFFFF',
                border: `1px solid ${isDarkMode ? '#3B4754' : '#DBE6DE'}`
              }}
            >
              <p 
                className="font-medium transition-colors duration-300"
                style={{ 
                  fontSize: '14px',
                  lineHeight: '21px',
                  color: colors.primary
                }}
              >
                {faq}
              </p>
              
              <div className="w-[20px] h-[20px] flex items-center justify-center">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="currentColor" style={{ color: colors.primary }}>
                  <path d="M1 1l6 6 6-6"/>
                </svg>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default PowerMaxServicePage;
