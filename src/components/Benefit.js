import React, { useEffect } from "react";
import AOS from "aos";

export default function Benefit() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="benefit"
      className="py-sectionMB md:py-section bg-[url('../public/images/benefit-bg.png')] bg-center bg-no-repeat bg-cover"
    >
      <div className="page-container">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-bold text-[24px] md:text-[36px] text-white"
        >
          LỢI ÍCH KHI THAM DỰ <br />
          <span className="title-border">SEMINAR</span>
        </h2>
        <div className="border border-[#12F1FF] mt-[30px] md:mt-[50px]">
          <BenefitItem why="LỢI ÍCH 1">
            Biết cách nêu bật vấn đề cần giải quyết của thị trường – Khởi nguồn
            của ý tưởng kinh doanh.
          </BenefitItem>
          <BenefitItem why="LỢI ÍCH 2">
            Các giải pháp – sản phẩm/ dịch vụ cho ý tưởng kinh doanh đáp ứng
            được nhu cầu cần thiết của thị trường.
          </BenefitItem>
          <BenefitItem why="LỢI ÍCH 3">
            Phương pháp giới thiệu về sản phẩm để hấp dẫn khách hàng.
          </BenefitItem>
          <BenefitItem why="LỢI ÍCH 4">
            Xác định được quy mô của thị trường.
          </BenefitItem>
          <BenefitItem why="LỢI ÍCH 5">
            Xác định được đối thủ cạnh trang.
          </BenefitItem>
          <BenefitItem why="LỢI ÍCH 6">
            Giúp chủ doanh nghiệp xác định được năng lực cốt lõi giúp tạo ra thế
            cạnh tranh cho doanh nghiệp.
          </BenefitItem>
          <BenefitItem why="LỢI ÍCH 7">
            Phương pháp phân phối sản phẩm/dịch vụ ra thị trường.
          </BenefitItem>
          <BenefitItem why="LỢI ÍCH 8">
            Xây dựng được đội ngũ của doanh nghiệp.
          </BenefitItem>
          <BenefitItem why="LỢI ÍCH 9">
            Xác định các giai đoạn phát triển của doanh nghiệp.
          </BenefitItem>
        </div>
        <div className="text-center">
          <a
            className="benefit-btn mt-[50px] md:mt-[70px] uppercase"
            href="#register"
          >
            ĐĂNG KÝ THAM GIA NGAY
          </a>
        </div>
      </div>
    </section>
  );
}

const BenefitItem = ({ why, children }) => {
  return (
    <div className="flex items-center overflow-hidden cursor-pointer group benefit-item">
      <div
        className={`pl-[10px] pr-[0px] h-[105px] w-0 transition-all duration-500 group-hover:w-[238px] flex items-center justify-center group-hover:pl-[0px] reason`}
      >
        <p className="group-hover:text-[18px] md:group-hover:text-[32px] text-[#010101] font-extrabold uppercase text-[0px] transition-all duration-200">
          {why}
        </p>
      </div>
      <div className="text-[12px] md:text-[24px] font-extrabold text-white uppercase h-[105px] flex items-center pl-[25px] leading-[1.4] md:leading-[1]">
        {children}
      </div>
    </div>
  );
};
