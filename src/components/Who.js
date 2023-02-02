import React, { useEffect } from "react";
import AOS from "aos";

export default function Who() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="who md:py-section py-sectionMB">
      <div className="relative page-container-fluid">
        <p
          className="text-center text-[24px] md:text-[36px] font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          AI NÊN THAM GIA <br />{" "}
          <span className="title-border --blue">SEMINAR</span> NÀY?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-[30px] md:mt-[40px] gap-[30px] md:gap-[50px]">
          <WhoItem
            data-aos="flip-right"
            data-aos-duration="1000"
            img="/images/who-1.png"
            title="Cá nhân"
            desc="Đang có dự định khởi nghiệp trong tương lai gần, cần hệ thống những kiến thức trong việc điều hành, phát triển doanh nghiệp"
          ></WhoItem>
          <WhoItem
            data-aos="flip-right"
            data-aos-duration="1000"
            img="/images/who-2.png"
            title="Chủ doanh nghiệp Doanh nhân"
            desc="Đang cần nâng cao kiến thức, phát triển kỹ năng và đang tìm kiếm nguồn vốn đầu tư"
          ></WhoItem>
          <WhoItem
            data-aos="flip-right"
            data-aos-duration="1000"
            img="/images/who-3.png"
            title="Doanh nhân"
            desc="Muốn Scale up hoặc muốn IPO, Mong muốn được kết nối với các cố vấn và chuyên gia giàu kinh nghiệm"
          ></WhoItem>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[50px] md:mx-[200px] mt-[30px] md:mt-[50px]">
          <WhoItem
            data-aos="flip-right"
            data-aos-duration="1000"
            img="/images/who-4.png"
            title="Ban lãnh đạo DOANH NGHIỆP"
            desc="Chủ tịch, Thành viên HĐQT"
          ></WhoItem>
          <WhoItem
            data-aos="flip-right"
            data-aos-duration="1000"
            img="/images/who-5.png"
            title="Ban Giám đốc"
            desc="Tổng Giám đốc/Giám đốc điều hành, Giám đốc chức năng"
          ></WhoItem>
        </div>
        <img
          className="absolute top-0 left-[220px] hidden md:block"
          srcSet="/icons/circle-icon.png 2x"
          alt=""
        />
        <img
          className="absolute bottom-[-50px] right-[80px] hidden md:block"
          srcSet="/icons/plus-icon.png 2x"
          alt=""
        />
      </div>
    </section>
  );
}

const WhoItem = ({ img, title, desc, ...rest }) => {
  return (
    <div
      {...rest}
      className="h-[215px] bg-blue rounded-[20px] relative ml-[50px] md:ml-[81px] flex items-center pr-[20px]"
    >
      <div className="absolute w-[100px] h-[100px] md:w-[162px] md:h-[162px] top-[50%] translate-y-[-50%] md:left-[-81px] left-[-50px]">
        <img className="object-center w-full h-full" src={img} alt="" />
      </div>
      <div className="text-white ml-[70px] md:ml-[100px]">
        <h4 className="text-[16px] md:text-[24px] font-bold mb-[15px] uppercase leading-[1]">
          {title}
        </h4>
        <p className="font-bold text-justify text-[14px]">{desc}</p>
      </div>
    </div>
  );
};
