import React, { useEffect } from "react";
import { usePopup } from "../contexts/popupContext";
import AOS from "aos";

export default function HeadCoach() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { setShow } = usePopup();
  return (
    <section
      id="coach"
      className="headCoach bg-[url('../public/images/headcoach-bg.png')] bg-center bg-no-repeat bg-cover"
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 relative pt-[80px] pb-[80px] md:pt-[160px] md:pb-[120px]">
          <div
            className="max-w-[620px] mx-[15px] md:ml-auto md:pr-[100px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-center title-border">SEMINAR</h2>
            <p className="text-[24px] md:text-[36px] font-bold text-white text-center">
              Adding ZEROS NETWORK
            </p>
            <div className="text-white my-[40px] md:my-[80px] text-center">
              <p className="font-bold">VỚI SỰ DẪN DẮT CỦA BÀ </p>
              <p className="text-[24px] md:text-[36px] font-bold">
                ANNA NGUYỄN THỊ BÍCH HẰNG
              </p>
              <p className="text-[18px] md:text-[24px] font-medium">
                TGĐ ACTIONCOACH CBD FIRM.
              </p>
              <p className="mt-[20px]">
                Seminar sẽ giúp Anh/Chị Chủ doanh nghiệp có cái nhìn tổng quan
                và hệ thống về quá trình Gọi vốn.
              </p>
            </div>
            <div className="text-center">
              <button className="head-btn" onClick={() => setShow(true)}>
                <span>CÁC THÀNH TỰU</span>
                <img
                  className="arrow"
                  srcSet="/icons/arrow-icon2.png 2x"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img
            className="object-cover w-full h-full"
            src="/images/headcoach-img.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
