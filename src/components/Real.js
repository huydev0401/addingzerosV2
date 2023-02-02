import React, { useEffect } from "react";
import AOS from "aos";

export default function Real() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="real">
      <div className="page-container-fluid relative flex justify-center items-center mt-[50px] md::pt-[80px] pb-[120px]">
        <img
          className="self-start hidden md:block"
          src="/images/real-1.png"
          alt=""
        />
        <div className="md:max-w-[1090px] text-center md:mx-[80px]">
          <h2 className="text-[32px] md:text-[64px] font-extrabold text-blue uppercase">
            Sự thật là hiện nay,
          </h2>
          <div
            className="font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            gần 1/3 công ty khởi nghiệp thất bại bởi họ thiếu vốn, không có đủ
            tiền mặt để tiếp tục hoạt động. Điều này xảy ra với cả những công ty
            đã phát triển như vũ bão.
          </div>
          <div className="relative">
            <div
              className="uppercase font-semibold pt-[20px] pb-[24px] pl-[38px] pr-[25px] border-[3px] border-[#000] mt-[30px] md:mt-[50px] box-text text-justify md:text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p>
                Thiếu hụt vốn là một trong những nguyên nhân lớn nhất khiến các
                công ty khởi nghiệp "đi chậm" hoặc phải "dừng cuộc chơi" giữa
                chừng. Đó chính là lý do việc Nâng cao tỷ lệ nguồn vốn chủ sở
                hữu góp từ các cổ đông nên được coi trọng hơn và gần như là giải
                pháp về dòng tiền tài chính dài hạn.
              </p>
            </div>
            <div className="arrow-fade absolute left-[50%] translate-x-[-50%]">
              <img srcSet="/icons/arrow-icon.png 2x" alt="" />
            </div>
          </div>
        </div>
        <img
          className="self-end mb-[-40px] md:block hidden"
          src="/images/real-2.png"
          alt=""
        />
        <img
          className="absolute right-[180px] top-[40px] md:block hidden"
          srcSet="/icons/circle-icon.png 2x"
          alt=""
        />
        <img
          className="absolute left-[135px] bottom-[-80px] md:block hidden"
          srcSet="/icons/triangle-icon.png 2x"
          alt=""
        />
      </div>
    </section>
  );
}
