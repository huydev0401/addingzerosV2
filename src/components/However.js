import React, { useEffect } from "react";
import AOS from "aos";

export default function However() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="py-section bg-[url('../public/images/however-bg.png')] bg-center bg-no-repeat bg-cover">
      <div className="max-w-[1450px] mx-[15px] md:mx-auto flex flex-col-reverse md:flex-row items-center md:gap-[80px] gap-[20px]">
        <div className="flex-shrink-0">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="md:max-w-[637px]"
            src="/images/however-img.png"
            alt=""
          />
        </div>
        <div className="flex-1">
          <h2
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="title-border mb-[20px] text-left md:text-right"
          >
            TUY NHIÊN,
          </h2>
          <div className="relative mb-[25px]">
            <h3
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="text-[24px] md:text-[36px] font-bold text-white"
            >
              ĐÂY CÓ PHẢI NHỮNG VẤN ĐỀ BẠN <br className="hidden md:block" />{" "}
              ĐANG GẶP PHẢI KHI GỌI VỐN
            </h3>
            <img
              className="question absolute right-0 top-[-110px] md:right-[80px] md:top-0"
              srcSet="/icons/question-icon.png 2x"
              alt=""
            />
          </div>
          <ul
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-white however-list"
          >
            <li className="however-item">
              <img srcSet="/icons/exclamatory-icon.png 2x" alt="" />
              <span>
                ️Chưa xác định được hình thức gọi vốn phù hợp với loại hình hoạt
                động của doanh nghiệp.
              </span>
            </li>
            <li className="however-item">
              <img srcSet="/icons/exclamatory-icon.png 2x" alt="" />
              <span>
                Không biết bắt đầu từ đâu khi muốn kêu gọi vốn đầu tư cho
                Startup của mình?
              </span>
            </li>
            <li className="however-item">
              <img srcSet="/icons/exclamatory-icon.png 2x" alt="" />
              <span>
                Không xác định được chân dung và cách tiếp cận nhà đầu tư phù
                hợp.
              </span>
            </li>
            <li className="however-item">
              <img srcSet="/icons/exclamatory-icon.png 2x" alt="" />
              <span>
                Chưa biết cách thức định giá đúng giá trị doanh nghiệp.
              </span>
            </li>
            <li className="however-item">
              <img srcSet="/icons/exclamatory-icon.png 2x" alt="" />
              <span>
                Bị các nhà đầu tư từ chối sau khi nhận hồ sơ gọi vốn mà còn chưa
                kịp thuyết trình về Startup của mình với nhà đầu tư?
              </span>
            </li>
            <li className="however-item">
              <img srcSet="/icons/exclamatory-icon.png 2x" alt="" />
              <span>
                Không biết bài thuyết trình cần đưa lên những thông tin gì để có
                thể thuyết phục nhà đầu tư rót vốn cho doanh nghiệp của mình?
              </span>
            </li>
            <li className="however-item">
              <img srcSet="/icons/exclamatory-icon.png 2x" alt="" />
              <span>
                Gặp khó khăn về tính minh bạch và pháp lý trong quá trình giao
                dịch: Hồ sơ, hợp đồng giao dịch; Thuế/ pháp lý liên quan.
              </span>
            </li>
            <li className="however-item">
              <img srcSet="/icons/exclamatory-icon.png 2x" alt="" />
              <span>
                Các Startup lo lắng quản trị doanh nghiệp thế nào khi có thêm
                các nhà đầu tư tham gia?
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
