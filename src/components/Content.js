import React, { useEffect } from "react";
import AOS from "aos";

export default function Content() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="benefit" className="relative py-sectionMB md:py-section">
      <div className="page-container">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-[24px] md:text-[36px] font-bold text-[#0B1347] mb-[30px] md:mb-[60px]"
        >
          LỢI ÍCH KHI THAM DỰ <br />
          <span className="title-border --blue">SEMINAR</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="relative md:h-[388px] flex items-center justify-center text-white py-[30px] px-[30px]"
          >
            <img
              className="absolute inset-0 z-[-1] h-full w-full object-cover rounded-[15px]"
              src="/images/content-1.png"
              alt=""
            />
            <div>
              {/* <h3 className="text-[24px] md:text-[36px] font-extrabold uppercase text-center leading-[1]">
                Phần 1
              </h3> */}
              <h4 className="text-[18px] md:text-[24px] font-semibold text-center">
                Hiểu được Nhà đầu tư ra quyết định đầu tư vốn cho doanh nghiệp
                dựa vào yếu tố nào?
              </h4>
              <div className="mt-[20px] font-medium text-justify">
                Khi đã thấu hiểu được tâm lý của nhà đầu tư, Chủ doanh nghiệp sẽ
                nâng cao tỷ lệ gọi vốn thành công.
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="relative h-[388px] flex items-center justify-center text-white px-[30px]"
          >
            <img
              className="absolute inset-0 z-[-1] h-full w-full object-cover rounded-[15px]"
              src="/images/content-2.png"
              alt=""
            />
            <div>
              {/* <h3 className="text-[24px] md:text-[36px] font-extrabold uppercase text-center leading-[1]">
                Phần 2
              </h3> */}
              <h4 className="text-[18px] md:text-[24px] font-semibold text-center">
                Chủ doanh nghiệp biết được cần chuẩn bị gì cho quá trình gọi vốn
                với chủ đầu tư
              </h4>
              <div className="mt-[20px] font-medium text-justify">
                Quá trình gọi vốn thường mất nhiều thời gian, công sức, nếu
                không có sự chuẩn bị kỹ lưỡng chủ doanh nghiệp có thể rơi vào
                tình trạng lệch mục tiêu khi tham gia vòng gọi vốn.
              </div>
              <div className="mt-[10px] font-medium text-justify">
                Điều này dẫn đến việc gọi vốn không thành công hoặc bị loại từ
                vòng đầu khi gửi hồ sơ đến chủ đầu tư.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="md:block hidden absolute left-0 bottom-[100px] z-[-2]"
        srcSet="/icons/line-icon1.png 2x"
        alt=""
      />
      <img
        className="md:block hidden absolute right-0 top-[40px]"
        srcSet="/icons/line-icon2.png 2x"
        alt=""
      />
    </section>
  );
}
