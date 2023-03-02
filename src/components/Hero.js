import React from "react";

export default function Hero() {
  return (
    <section className="bg-[url('../public/images/hero-bg.png')] bg-center bg-no-repeat bg-cover md:pt-[90px] md:pb-[100px] pt-[100px] pb-[120px] relative">
      <div className="page-container-fluid px-[20px] relative z-[10]">
        <div className="text-right mr-[790px]">
          <h3 className="hero-title font-bold text-[36px] md:text-[96px] text-[#FFCF01] leading-[1]">
            Seminar
          </h3>
          <h1 className="hero-title1 w-[200px] h-auto md:w-[450px] md:h-[160px] mb-[20px] md:!mt-[10px]">
            <img srcSet="/images/brand.png 2x" alt="" />
          </h1>
          <h3 className="hero-title2">NETWORK</h3>
          <div className="text-white mt-[20px] md:mt-[40px] text-left md:text-right w-[300px] md:w-full">
            <p className="text-[18px] md:text-[24px] font-bold uppercase leading-[1] mb-[-10px]">
              Thời gian
            </p>
            <div className="inline-flex justify-end w-[200px] md:w-[520px] h-[2px] bg-[#60EFFF]"></div>
            <p className="text-[32px] md:text-[64px] font-bold leading-[1]">
              13h30 - 17h00
            </p>
            <p className="text-[18px] md:text-[24px] font-medium">
              ngày 10/03/2023
            </p>
            <p className="text-[16px] md:text-[24px] mt-[10px]">
              <span className="font-medium">Địa Điểm Tổ Chức:</span> Tầng 15
              Tháp B Tòa nhà Viettel, <br className="hidden md:block" /> 285
              Cách Mạng Tháng Tám, Phường 12, <br className="hidden md:block" />{" "}
              Quận 10, Tp. Hồ Chí Minh
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden md:block z-[5] h-[800px]">
        {/* <img
          className="object-cover h-[200px] md:h-[1000px]"
          src="/images/hero-coach.png"
          alt=""
        /> */}
        <img className="h-full" srcSet="/images/anna.png 5x" alt="" />
      </div>
    </section>
  );
}
