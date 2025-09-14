import React from "react";

interface PowerMaxIntroPageProps {
  isDarkMode: boolean;
  colors: {
    primary: string;
    secondary: string;
    buttonPrimary: string;
    buttonSecondary: string;
    background: string;
    mainBackground: string;
  };
}

const PowerMaxIntroPage: React.FC<PowerMaxIntroPageProps> = ({ isDarkMode, colors }) => {
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
        <section className="w-[960px] h-[512px] flex flex-col items-start" style={{ padding: '16px' }}>
          <div 
            className="relative w-[928px] h-[480px] min-h-[480px] rounded-lg overflow-hidden"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(/img/banner_0.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Hero Content */}
            <div className="absolute flex flex-col justify-center items-center" style={{ 
              left: '16px', 
              top: '182px', 
              width: '896px', 
              height: '129px',
              gap: '8px'
            }}>
              {/* Main Title */}
              <div className="flex flex-col justify-center items-center" style={{ width: '896px', height: '60px' }}>
                <h1 
                  className="text-white text-center font-bold"
                  style={{ 
                    width: '896px', 
                    height: '60px',
                    fontSize: '48px',
                    lineHeight: '60px',
                    letterSpacing: '-2px'
                  }}
                >
                  Kiến Tạo Tương Lai Giao Thông Xanh
                </h1>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-center items-center" style={{ width: '654px', height: '61px' }}>
                <p 
                  className="text-white text-center"
                  style={{ 
                    width: '654px', 
                    height: '72px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '400'
                  }}
                >
                  VGL (Vietnam Green Life) tiên phong mang đến hệ sinh thái toàn diện VGL-Power Max, cung cấp năng lượng sạch và dịch vụ thông minh, mang lại trải nghiệm tối ưu cho người dùng xe điện Việt Nam.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="absolute flex flex-row justify-center items-center" style={{ 
              left: '354px', 
              top: '330px', 
              width: '214px', 
              height: '48px',
              padding: '0 20px',
              backgroundColor: '#17CF54',
              borderRadius: '8px'
            }}>
              <div className="flex flex-col items-center" style={{ width: '174px', height: '24px' }}>
                <span 
                  className="text-center font-bold"
                  style={{ 
                    width: '174px', 
                    height: '24px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#121712'
                  }}
                >
                  Khám Phá Hệ Sinh Thái
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="w-[960px] h-[60px] flex flex-col items-start" style={{ padding: '20px 16px 12px' }}>
          <h2 
            className="font-bold transition-colors duration-300"
            style={{ 
              width: '928px', 
              height: '28px',
              fontSize: '22px',
              lineHeight: '28px',
              color: isDarkMode ? '#FFFFFF' : '#1C261F'
            }}
          >
            VỀ CHÚNG TÔI - VIETNAM GREEN LIFE
          </h2>
        </section>

        {/* About Image */}
        <section className="w-[960px] h-[464px] flex flex-col items-start" style={{ padding: '16px', gap: '12px' }}>
          <div 
            className="w-[928px] h-[448px]"
            style={{
              background: 'url(/img/banner_1.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </section>

        {/* Mission & Vision Section */}
        <section className="w-[960px] h-[60px] flex flex-col items-start" style={{ padding: '20px 16px 12px' }}>
          <h2 
            className="font-bold transition-colors duration-300"
            style={{ 
              width: '928px', 
              height: '28px',
              fontSize: '22px',
              lineHeight: '28px',
              color: isDarkMode ? '#FFFFFF' : '#1C261F'
            }}
          >
            SỨ MỆNH & TẦM NHÌN
          </h2>
        </section>

        {/* Mission & Vision Cards */}
        <section className="w-[960px] h-[237px] flex flex-col items-start" style={{ padding: '40px 16px', gap: '40px' }}>
          <div className="w-[928px] h-[157px] flex flex-col items-start" style={{ gap: '12px' }}>
            <div className="w-[928px] h-[157px] flex flex-row items-start" style={{ gap: '12px' }}>
              {/* Mission Card */}
              <div 
                className="flex flex-col items-start"
                style={{ 
                  padding: '16px', 
                  gap: '12px',
                  width: '458px', 
                  height: '157px',
                  backgroundColor: '#1C261F',
                  border: '1px solid #3D5445',
                  borderRadius: '8px'
                }}
              >
                <div className="flex flex-col items-start" style={{ width: '424px', height: '24px' }}>
                  <img 
                    src="/img/Tam_nhin_1.png" 
                    alt="Mission" 
                    className="w-6 h-6" 
                    
                  />
                </div>
                <div className="flex flex-col items-start" style={{ width: '424px', height: '87px', gap: '4px' }}>
                  <div className="flex flex-col items-start" style={{ width: '424px', height: '20px' }}>
                    <h3 
                      className="font-bold"
                      style={{ 
                        width: '424px', 
                        height: '20px',
                        fontSize: '16px',
                        lineHeight: '20px',
                        color: '#FFFFFF'
                      }}
                    >
                      Sứ Mệnh Của Chúng Tôi
                    </h3>
                  </div>
                  <div className="flex flex-col items-start" style={{ width: '424px', height: '63px' }}>
                    <p 
                      style={{ 
                        width: '424px', 
                        height: '63px',
                        fontSize: '14px',
                        lineHeight: '21px',
                        fontWeight: '400',
                        color: '#9EB8A6'
                      }}
                    >
                      Mang tới một cuộc sống xanh cho chính chúng ta và thế hệ mai sau, thúc đẩy sự phát triển của cộng đồng bằng những giải pháp công nghệ bền vững.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div 
                className="flex flex-col items-start"
                style={{ 
                  padding: '16px', 
                  gap: '12px',
                  width: '458px', 
                  height: '157px',
                  backgroundColor: isDarkMode ? '#1C261F' : '#F8F9FA',
                  border: isDarkMode ? '1px solid #3D5445' : '1px solid #E5E7EB',
                  borderRadius: '8px'
                }}
              >
                <div className="flex flex-col items-start" style={{ width: '424px', height: '24px' }}>
                  <img 
                    src="/img/Tam_nhin_2.png" 
                    alt="Vision" 
                    className="w-6 h-6" 
                    style={{ 
                      filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'
                    }}
                  />
                </div>
                <div className="flex flex-col items-start" style={{ width: '424px', height: '66px', gap: '4px' }}>
                  <div className="flex flex-col items-start" style={{ width: '424px', height: '20px' }}>
                    <h3 
                      className="font-bold"
                      style={{ 
                        width: '424px', 
                        height: '20px',
                        fontSize: '16px',
                        lineHeight: '20px',
                        color: isDarkMode ? '#FFFFFF' : '#1C261F'
                      }}
                    >
                      Tầm Nhìn Chiến Lược
                    </h3>
                  </div>
                  <div className="flex flex-col items-start" style={{ width: '424px', height: '42px' }}>
                    <p 
                      style={{ 
                        width: '424px', 
                        height: '42px',
                        fontSize: '14px',
                        lineHeight: '21px',
                        fontWeight: '400',
                        color: isDarkMode ? '#9EB8A6' : '#6B7280'
                      }}
                    >
                      Trở thành giải pháp chiến lược cho giao thông sạch tại Việt Nam, bắt đầu từ Hà Nội, và mở rộng ra toàn quốc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section className="w-[960px] h-[60px] flex flex-col items-start" style={{ padding: '20px 16px 12px' }}>
          <h2 
            className="font-bold transition-colors duration-300"
            style={{ 
              width: '928px', 
              height: '28px',
              fontSize: '22px',
              lineHeight: '28px',
              color: isDarkMode ? '#FFFFFF' : '#1C261F'
            }}
          >
            HỆ SINH THÁI TOÀN DIỆN VGL-POWER MAX
          </h2>
        </section>

        <section className="w-[960px] h-[40px] flex flex-col items-center" style={{ padding: '4px 16px 12px' }}>
          <p 
            className="text-center"
            style={{ 
              width: '928px', 
              height: '24px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '400',
              color: isDarkMode ? '#FFFFFF' : '#1C261F'
            }}
          >
            VGL-Power Max: Hơn Cả Một Trạm Sạc
          </p>
        </section>

        <section className="w-[960px] h-[64px] flex flex-col items-center" style={{ padding: '4px 16px 12px' }}>
          <p 
            className="text-center"
            style={{ 
              width: '928px', 
              height: '48px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '400',
              color: isDarkMode ? '#FFFFFF' : '#6B7280'
            }}
          >
            Chúng tôi kiến tạo một hệ sinh thái 360 độ, nơi mọi nhu cầu của người dùng xe điện được đáp ứng một cách thông minh, tiện lợi và bền vững.
          </p>
        </section>

        {/* Services Grid */}
        <section className="w-[960px] h-[232px] flex flex-col items-start" style={{ padding: '16px', gap: '12px' }}>
          {/* First Row */}
          <div className="w-[928px] h-[114px] flex flex-row items-start" style={{ gap: '12px' }}>
            {/* Trạm Sạc Thông Minh */}
            <div 
              className="flex flex-row items-center"
              style={{ 
                padding: '16px', 
                gap: '12px',
                width: '176px', 
                height: '114px',
                backgroundColor: isDarkMode ? '#1C261F' : '#F8F9FA',
                border: isDarkMode ? '1px solid #3D5445' : '1px solid #E5E7EB',
                borderRadius: '8px'
              }}
            >
              <img 
                src="/img/Hst_1.png" 
                alt="Trạm Sạc Thông Minh" 
                className="w-6 h-6" 
                style={{ 
                  filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'
                }}
              />

              <div className="flex flex-col items-start" style={{ width: '106px', height: '40px' }}>
                <span 
                  className="font-bold"
                  style={{ 
                    width: '106px', 
                    height: '40px',
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: isDarkMode ? '#FFFFFF' : '#1C261F'
                  }}
                >
                  Trạm Sạc Thông Minh
                </span>
              </div>
            </div>

            {/* Rửa Xe Bán Tự Động */}
            <div 
              className="flex flex-row items-center"
              style={{ 
                padding: '16px', 
                gap: '12px',
                width: '176px', 
                height: '114px',
                backgroundColor: isDarkMode ? '#1C261F' : '#F8F9FA',
                border: isDarkMode ? '1px solid #3D5445' : '1px solid #E5E7EB',
                borderRadius: '8px'
              }}
            >
              <img 
                src="/img/Hst_2.png" 
                alt="Rửa Xe Bán Tự Động" 
                className="w-6 h-6" 
                style={{ 
                  filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'
                }}
              />
              <div className="flex flex-col items-start" style={{ width: '106px', height: '40px' }}>
                <span 
                  className="font-bold"
                  style={{ 
                    width: '106px', 
                    height: '40px',
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: isDarkMode ? '#FFFFFF' : '#1C261F'
                  }}
                >
                  Rửa Xe Bán Tự Động
                </span>
              </div>
            </div>

            {/* Cứu Hộ 24/7 */}
            <div 
              className="flex flex-row items-center"
              style={{ 
                padding: '16px', 
                gap: '12px',
                width: '176px', 
                height: '114px',
                backgroundColor: isDarkMode ? '#1C261F' : '#F8F9FA',
                border: isDarkMode ? '1px solid #3D5445' : '1px solid #E5E7EB',
                borderRadius: '8px'
              }}
            >
              <img 
                src="/img/Hst_3.png" 
                alt="Cứu Hộ 24/7" 
                className="w-6 h-6" 
                style={{ 
                  filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'
                }}
              />
              <div className="flex flex-col items-start" style={{ width: '94px', height: '20px' }}>
                <span 
                  className="font-bold"
                  style={{ 
                    width: '94px', 
                    height: '20px',
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: isDarkMode ? '#FFFFFF' : '#1C261F'
                  }}
                >
                  Cứu Hộ 24/7
                </span>
              </div>
            </div>

            {/* Lắp Đặt Sạc Tại Nhà & Doanh Nghiệp */}
            <div 
              className="flex flex-row items-center"
              style={{ 
                padding: '16px', 
                gap: '12px',
                width: '176px', 
                height: '114px',
                backgroundColor: isDarkMode ? '#1C261F' : '#F8F9FA',
                border: isDarkMode ? '1px solid #3D5445' : '1px solid #E5E7EB',
                borderRadius: '8px'
              }}
            >
              <img 
                src="/img/Hst_4.png" 
                alt="Lắp Đặt Sạc Tại Nhà & Doanh Nghiệp" 
                className="w-6 h-6" 
                style={{ 
                  filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'
                }}
              />
              <div className="flex flex-col items-start" style={{ width: '106px', height: '80px' }}>
                <span 
                  className="font-bold"
                  style={{ 
                    width: '106px', 
                    height: '80px',
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: isDarkMode ? '#FFFFFF' : '#1C261F'
                  }}
                >
                  Lắp Đặt Sạc Tại Nhà & Doanh Nghiệp
                </span>
              </div>
            </div>

            {/* Bảo Hiểm Xe Điện */}
            <div 
              className="flex flex-row items-center"
              style={{ 
                padding: '16px', 
                gap: '12px',
                width: '176px', 
                height: '114px',
                backgroundColor: isDarkMode ? '#1C261F' : '#F8F9FA',
                border: isDarkMode ? '1px solid #3D5445' : '1px solid #E5E7EB',
                borderRadius: '8px'
              }}
            >
              <img 
                src="/img/Hst_5.png" 
                alt="Bảo Hiểm Xe Điện" 
                className="w-6 h-6" 
                style={{ 
                  filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'
                }}
              />
              <div className="flex flex-col items-start" style={{ width: '106px', height: '40px' }}>
                <span 
                  className="font-bold"
                  style={{ 
                    width: '106px', 
                    height: '40px',
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: isDarkMode ? '#FFFFFF' : '#1C261F'
                  }}
                >
                  Bảo Hiểm Xe Điện
                </span>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="w-[928px] h-[74px] flex flex-row items-start" style={{ gap: '12px' }}>
            {/* Mua Bán & Ký Gửi Xe Điện */}
            <div 
              className="flex flex-row items-center"
              style={{ 
                padding: '16px', 
                gap: '12px',
                width: '176px', 
                height: '74px',
                backgroundColor: isDarkMode ? '#1C261F' : '#F8F9FA',
                border: isDarkMode ? '1px solid #3D5445' : '1px solid #E5E7EB',
                borderRadius: '8px'
              }}
            >
              <img 
                src="/img/Hst_6.png" 
                alt="Mua Bán & Ký Gửi Xe Điện" 
                className="w-6 h-6" 
                style={{ 
                  filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'
                }}
              />
              <div className="flex flex-col items-start" style={{ width: '106px', height: '40px' }}>
                <span 
                  className="font-bold"
                  style={{ 
                    width: '106px', 
                    height: '40px',
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: isDarkMode ? '#FFFFFF' : '#1C261F'
                  }}
                >
                  Mua Bán & Ký Gửi Xe Điện
                </span>
              </div>
            </div>

            {/* Năng Lượng Mặt Trời */}
            <div 
              className="flex flex-row items-center"
              style={{ 
                padding: '16px', 
                gap: '12px',
                width: '176px', 
                height: '74px',
                backgroundColor: isDarkMode ? '#1C261F' : '#F8F9FA',
                border: isDarkMode ? '1px solid #3D5445' : '1px solid #E5E7EB',
                borderRadius: '8px'
              }}
            >
              <img 
                src="/img/Hst_7.png" 
                alt="Năng Lượng Mặt Trời" 
                className="w-6 h-6" 
                style={{ 
                  filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'
                }}
              />
              <div className="flex flex-col items-start" style={{ width: '106px', height: '40px' }}>
                <span 
                  className="font-bold"
                  style={{ 
                    width: '106px', 
                    height: '40px',
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: isDarkMode ? '#FFFFFF' : '#1C261F'
                  }}
                >
                  Năng Lượng Mặt Trời
                </span>
              </div>
            </div>

            {/* Tiện Ích Tự Động */}
            <div 
              className="flex flex-row items-center"
              style={{ 
                padding: '16px', 
                gap: '12px',
                width: '176px', 
                height: '74px',
                backgroundColor: isDarkMode ? '#1C261F' : '#F8F9FA',
                border: isDarkMode ? '1px solid #3D5445' : '1px solid #E5E7EB',
                borderRadius: '8px'
              }}
            >
              <img 
                src="/img/Hst_8.png" 
                alt="Tiện Ích Tự Động" 
                className="w-6 h-6" 
                style={{ 
                  filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'
                }}
              />
              <div className="flex flex-col items-start" style={{ width: '106px', height: '40px' }}>
                <span 
                  className="font-bold"
                  style={{ 
                    width: '106px', 
                    height: '40px',
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: isDarkMode ? '#FFFFFF' : '#1C261F'
                  }}
                >
                  Tiện Ích Tự Động
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Development Roadmap Section */}
        <section className="w-[960px] h-[60px] flex flex-col items-start" style={{ padding: '20px 16px 12px' }}>
          <h2 
            className="font-bold transition-colors duration-300"
            style={{ 
              width: '928px', 
              height: '28px',
              fontSize: '22px',
              lineHeight: '28px',
              color: isDarkMode ? '#FFFFFF' : '#1C261F'
            }}
          >
            CAM KẾT VÀ LỘ TRÌNH PHÁT TRIỂN
          </h2>
        </section>

        {/* Roadmap Timeline */}
        <section className="w-[960px] h-[216px] flex flex-col items-start" style={{ padding: '0 16px', gap: '8px' }}>
          {/* Phase 1 */}
          <div className="w-[928px] h-[66.67px] flex flex-row items-start" style={{ gap: '8px' }}>
              <div className="w-[40px] h-[66.67px] flex flex-col items-center" style={{ padding: '12px 0 0', gap: '4px' }}>
                <img 
                  src="/img/Lo_trinh_1.png" 
                  alt="Khởi động" 
                  className="w-6 h-6" 
                  style={{ 
                    filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'
                  }}
                />
                <div className="w-0.5 h-8" style={{ backgroundColor: isDarkMode ? '#3D5445' : '#E5E7EB' }} />
              </div>
            <div className="w-[880px] h-[66.67px] flex flex-col items-start" style={{ padding: '12px 0' }}>
              <div className="w-[880px] h-[24px]">
                <span 
                  className="font-medium"
                  style={{ 
                    width: '880px', 
                    height: '24px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: isDarkMode ? '#FFFFFF' : '#1C261F'
                  }}
                >
                  Khởi động
                </span>
              </div>
              <div className="w-[880px] h-[24px]">
                <span 
                  style={{ 
                    width: '880px', 
                    height: '24px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '400',
                    color: isDarkMode ? '#9EB8A6' : '#6B7280'
                  }}
                >
                  Hiện tại - Triển khai VGL-Power Max
                </span>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="w-[928px] h-[66.67px] flex flex-row items-start" style={{ gap: '8px' }}>
             <div className="w-[40px] h-[66.67px] flex flex-col items-center" style={{ gap: '4px' }}>
               <div className="w-0.5 h-2" style={{ backgroundColor: isDarkMode ? '#3D5445' : '#E5E7EB' }} />
               <img 
                 src="/img/Lo_trinh_3.png" 
                 alt="Mở rộng" 
                 className="w-6 h-6" 
                 style={{ 
                   filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'
                 }}
               />
               <div className="w-0.5 h-8" style={{ backgroundColor: isDarkMode ? '#3D5445' : '#E5E7EB' }} />
             </div>
            <div className="w-[880px] h-[66.67px] flex flex-col items-start" style={{ padding: '12px 0' }}>
              <div className="w-[880px] h-[24px]">
                <span 
                  className="font-medium"
                  style={{ 
                    width: '880px', 
                    height: '24px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: isDarkMode ? '#FFFFFF' : '#1C261F'
                  }}
                >
                  Mở rộng
                </span>
              </div>
              <div className="w-[880px] h-[24px]">
                <span 
                  style={{ 
                    width: '880px', 
                    height: '24px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '400',
                    color: isDarkMode ? '#9EB8A6' : '#6B7280'
                  }}
                >
                  2026 - Thay thế trạm xăng tại các khu đô thị trọng điểm, bắt đầu từ Vành Đai 1 Hà Nội
                </span>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="w-[928px] h-[66.67px] flex flex-row items-start" style={{ gap: '8px' }}>
             <div className="w-[40px] h-[66.67px] flex flex-col items-center" style={{ padding: '0 0 12px', gap: '4px' }}>
               <div className="w-0.5 h-2" style={{ backgroundColor: isDarkMode ? '#3D5445' : '#E5E7EB' }} />
               <img 
                 src="/img/Lo_trinh_2.png" 
                 alt="Dẫn đầu" 
                 className="w-6 h-6" 
                 style={{ 
                   filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'
                 }}
               />
             </div>
            <div className="w-[880px] h-[66.67px] flex flex-col items-start" style={{ padding: '12px 0' }}>
              <div className="w-[880px] h-[24px]">
                <span 
                  className="font-medium"
                  style={{ 
                    width: '880px', 
                    height: '24px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: isDarkMode ? '#FFFFFF' : '#1C261F'
                  }}
                >
                  Dẫn đầu
                </span>
              </div>
              <div className="w-[880px] h-[24px]">
                <span 
                  style={{ 
                    width: '880px', 
                    height: '24px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '400',
                    color: isDarkMode ? '#9EB8A6' : '#6B7280'
                  }}
                >
                  Tương lai - Trở thành giải pháp chiến lược quốc gia cho giao thông sạch
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-[960px] h-[512px] flex flex-col items-start">
          <div className="w-[960px] h-[512px] flex flex-col items-start" style={{ padding: '16px' }}>
            <div 
              className="flex flex-col justify-center items-center"
              style={{ 
                width: '928px', 
                height: '480px',
                padding: '16px',
                gap: '32px',
                borderRadius: '8px'
              }}
            >
              {/* CTA Content */}
              <div className="flex flex-col items-start" style={{ width: '896px', height: '176px', gap: '8px' }}>
                <div className="flex flex-col items-center" style={{ width: '896px', height: '120px' }}>
                  <h2 
                    className="text-center font-bold"
                    style={{ 
                      width: '896px', 
                      height: '120px',
                      fontSize: '48px',
                      lineHeight: '60px',
                      letterSpacing: '-2px',
                      color: isDarkMode ? '#FFFFFF' : '#000000'
                    }}
                  >
                    Cùng VGL Kiến Tạo Một Tương Lai Xanh Hơn
                  </h2>
                </div>
                <div className="flex flex-col items-center" style={{ width: '896px', height: '48px' }}>
                  <p 
                    className="text-center"
                    style={{ 
                      width: '896px', 
                      height: '48px',
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontWeight: '400',
                      color: isDarkMode ? '#FFFFFF' : '#6B7280'
                    }}
                  >
                    Hãy trở thành một phần của cuộc cách mạng giao thông sạch. Tải ứng dụng Power Max ngay hôm nay để trải nghiệm sự tiện lợi và chung tay góp phần vào một môi trường bền vững cho thế hệ mai sau.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-row flex-wrap justify-center items-start" style={{ width: '260px', height: '48px', gap: '12px' }}>
                <button 
                  className="flex flex-row justify-center items-center rounded-lg font-bold"
                  style={{ 
                    padding: '0 20px',
                    width: '117px', 
                    height: '48px',
                    backgroundColor: '#17CF54',
                    borderRadius: '8px'
                  }}
                >
                  <div className="flex flex-col items-center" style={{ width: '77px', height: '24px' }}>
                    <span 
                      className="text-center"
                      style={{ 
                        width: '77px', 
                        height: '24px',
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#121712'
                      }}
                    >
                      App Store
                    </span>
                  </div>
                </button>

                <button 
                  className="flex flex-row justify-center items-center rounded-lg font-bold"
                  style={{ 
                    padding: '0 20px',
                    width: '131px', 
                    height: '48px',
                    backgroundColor: isDarkMode ? '#29382E' : '#E5E7EB',
                    borderRadius: '8px'
                  }}
                >
                  <div className="flex flex-col items-center" style={{ width: '91px', height: '24px' }}>
                    <span 
                      className="text-center"
                      style={{ 
                        width: '91px', 
                        height: '24px',
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: isDarkMode ? '#FFFFFF' : '#1C261F'
                      }}
                    >
                      Google Play
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PowerMaxIntroPage;

