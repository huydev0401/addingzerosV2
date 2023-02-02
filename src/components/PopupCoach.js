import React from "react";
import { usePopup } from "../contexts/popupContext";

export default function PopupCoach() {
  const { show, setShow } = usePopup();
  return (
    <>
      {!!show ? (
        <div
          className="relative flex items-center justify-center overlay px-[15px] md:px-0"
          onClick={() => setShow(false)}
        >
          <div className="rounded-[20px] mt-[500px] md:mt-[50px] relative max-w-[1400px] bg-black text-white pt- pt-[60px] md:pt-[130px] md:pl-[45px] pb-[45px] md:pb-[90px] md:pr-[100px] px-[30px]">
            <div className=" absolute top-[20px] md:top-[-50px] left-[50%] translate-x-[-50%] z-[50] md:block hidden">
              <img src="/images/pop-title.png" alt="" />
            </div>
            <img
              className="absolute top-[50px] left-[-52px] cursor-pointer md:block hidden"
              srcSet="/icons/back-icon.png 3x"
              alt=""
              onClick={() => setShow(false)}
            />
            <img
              className="absolute bottom-0 right-[-150px] md:block hidden"
              srcSet="/images/anna.png 5x"
              alt=""
            />
            <div className="coachPop-content">
              <div>
                <p className="title">THÀNH TỰU KHI VẬN HÀNH ACTIONCOACH</p>
                <div className="line"></div>
                <ul className="list">
                  <li className="item">
                    <img srcSet="/icons/dot-icon.png 2x" alt="" />
                    Top 3 Franchise ActionCOACH trên 83 quốc gia.
                  </li>
                  <li className="item">
                    <img srcSet="/icons/dot-icon.png 2x" alt="" />
                    Top 1 Đông Nam Á & dẫn đầu thị trường huấn luyện tại Việt
                    Nam.
                  </li>
                  <li className="item">
                    <img srcSet="/icons/dot-icon.png 2x" alt="" />
                    Giải thưởng cống hiến - "5 năm cống hiến cho Cộng đồng Doanh
                    nhân Việt Nam": Ms. Anna Hằng Nguyễn - TGĐ ActionCOACH CBD
                    Firm.
                  </li>
                  <li className="item">
                    <img srcSet="/icons/dot-icon.png 2x" alt="" />
                    Năm 2021, ActionCOACH CBD Firm nhận được Giải đồng STEVIE®
                    WINNERS Hạng mục COVID-19 Response Categories (Hạng mục dành
                    cho doanh nghiệp phản ứng hiệu quả trong đại dịch Covid 19)
                    – K11. Most Valuable Corporate Response – (Tổ chức có phản
                    ứng hiệu quả nhất).
                  </li>
                  <li className="item">
                    <img srcSet="/icons/dot-icon.png 2x" alt="" />
                    ActionCOACH CBD Firm 03 lần nhận giải thưởng GrowthCLUB (Sản
                    phẩm giúp chủ doanh nghiệp biết cách lập kế hoạch cho doanh
                    nghiệp) từ ActionCOACH toàn cầu. Giải thưởng này được xét
                    duyệt từ tất cả các Firm trong hệ thống ActionCOACH trên 83
                    quốc gia trên thế giới.
                  </li>
                </ul>
              </div>
              <div>
                <p className="title">
                  THÀNH TỰU TRƯỚC KHI VẬN HÀNH ACTIONCOACH
                </p>
                <div className="line"></div>
                <ul className="list">
                  <li className="item">
                    <img srcSet="/icons/dot-icon.png 2x" alt="" />8 năm làm việc
                    tại Samsonite.
                  </li>
                  <li className="item">
                    <img srcSet="/icons/dot-icon.png 2x" alt="" />
                    Học thạc sĩ quản trị nhân sự, làm tất cả vị trí và đạt chức
                    vụ cao nhất Quản trị nguồn lực.
                  </li>
                  <li className="item">
                    <img srcSet="/icons/dot-icon.png 2x" alt="" />
                    Giám đốc nhân sự của tập đoàn đa quốc gia.
                  </li>
                  <li className="item">
                    <img srcSet="/icons/dot-icon.png 2x" alt="" />
                    Tư vấn tái cấu trúc doanh nghiệp
                  </li>
                  <li className="item">
                    <img srcSet="/icons/dot-icon.png 2x" alt="" />
                    Tổng giám đốc BNI Việt Nam
                  </li>
                  <li className="item">
                    <img srcSet="/icons/dot-icon.png 2x" alt="" />3 Công ty đầu
                    tiên:
                  </li>
                  <div className="list-2">
                    <div className="item">
                      <img srcSet="/icons/dot-icon2.png 2x" alt="" />
                      <div>
                        <h4 className="font-bold text-[#FFCF01]">Hosthunter</h4>
                        <p>
                          Tìm kiếm nhân tài đa quốc gia mang về phục vụ cho các
                          tập <br />
                          đoàn tại Việt Nam.
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <img srcSet="/icons/dot-icon2.png 2x" alt="" />
                      <div>
                        <h4 className="font-bold text-[#FFCF01]">
                          Outsourcing
                        </h4>
                        <p>Cho thuê nhân sự với hơn 6000 người.</p>
                      </div>
                    </div>
                    <div className="item">
                      <img srcSet="/icons/dot-icon2.png 2x" alt="" />
                      <div>
                        <h4 className="font-bold text-[#FFCF01]">
                          Tái cấu trúc nhân sự
                        </h4>
                        <p>Một vài công ty đã lên sàn chứng khoán.</p>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
