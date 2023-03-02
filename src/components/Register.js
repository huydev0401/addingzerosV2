import React, { useEffect, useState } from "react";
import Bx from "wow-bx24";
import AOS from "aos";

export default function Register() {
  useEffect(() => {
    AOS.init();
  }, []);
  let f_rid = "968";
  let f_source = "WEBFORM";
  const f_query = window.location.search;
  if (f_query !== null && f_query !== "") {
    const search_value = window.location.search;
    const params = new URLSearchParams(search_value);
    f_source = "3";
    f_rid = params.get("rid");
  }
  const $bx = new Bx();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    gender: "Ông/Bà",
    name: "",
    email: "",
    phone: "",
    position: "",
    company: "",
    message: "",
    sourceId: f_source,
    rid: f_rid,
    title: "CRM_FORM_ADZ",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    $bx
      .call("crm.lead.add", {
        fields: {
          ...data,
          TITLE: data.title,
          NAME: data.name,
          EMAIL: [{ VALUE: data.email }],
          PHONE: [{ VALUE: data.phone, VALUE_TYPE: "WORK" }],
          COMPANY_TITLE: data.company,
          POST: data.position,
          UF_CRM_1594097043: [`${data.message}`],
          ASSIGNED_BY_ID: data.rid,
          SOURCE_ID: data.sourceId,
        },
      })
      .then((result) => {
        setLoad(false);
        alert("Đăng ký thành công!");
        $bx.call("crm.lead.productrows.set", {
          id: result.result,
          rows: [
            {
              PRODUCT_ID: 16514,
              PRICE: 0,
              QUANTITY: 1,
              TAX_INCLUDED: "Y",
              TAX_RATE: 8,
            },
          ],
        });
        setData({
          ...data,
          gender: "Ông/Bà",
          name: "",
          email: "",
          phone: "",
          company: "",
          position: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoad(false);
        alert("Đăng ký thất bại");
        console.log(error);
      });
  };
  return (
    <section
      id="register"
      className="py-[80px] md:py-[150px] bg-[url('../public/images/register-bg.png')] bg-center bg-no-repeat bg-cover"
    >
      <div className="max-w-[950px] mx-[15px] md:mx-auto">
        <h3
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-[24px] md:text-[36px] font-bold text-white text-center leading-[1] mb-[40px] md:mb-[60px]"
        >
          ĐĂNG KÝ THAM GIA NGAY
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-[18px]">
            <div className="field">
              <div>
                <select
                  className="px-[17px] rounded-[6px] bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:text-[18px] h-[60px] border border-[#DBDEE7] text-[18px] text-[#fff]"
                  id="gender"
                  name="gender"
                  onChange={handleChange}
                >
                  <option className="text-black" value="Ông/Bà">
                    Chọn danh xưng
                  </option>
                  <option className="text-black" value="Ông">
                    Ông
                  </option>
                  <option className="text-black" value="Bà">
                    Bà
                  </option>
                </select>
              </div>
              <div>
                <input
                  className="px-[17px] rounded-[6px] bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:text-[18px] h-[60px] border border-[#DBDEE7] text-[18px] text-[#fff]"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nhập Họ và tên"
                  required
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <div>
                <input
                  className="px-[17px] rounded-[6px] border border-[#DBDEE7] bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:text-[18px] h-[60px] text-[18px] text-[#fff]"
                  id="email"
                  name="email"
                  placeholder="Nhập Email"
                  type="email"
                  value={data.email}
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="px-[17px] rounded-[6px] border border-[#DBDEE7] bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:text-[18px] h-[60px] text-[18px] text-[#fff]"
                  id="phone"
                  name="phone"
                  placeholder="Nhập Số điện thoại"
                  type="phone"
                  required
                  value={data.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <div>
                <input
                  className="px-[17px] rounded-[6px] border border-[#DBDEE7] bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:text-[18px] h-[60px] text-[18px] text-[#fff]"
                  id="position"
                  name="position"
                  placeholder="Nghề nghiệp/Chức vụ"
                  type="text"
                  value={data.position}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="px-[17px] rounded-[6px] border border-[#DBDEE7] bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:text-[18px] h-[60px] text-[18px] text-[#fff]"
                  id="company"
                  name="company"
                  placeholder="Tên doanh nghiệp (Nếu có)"
                  type="text"
                  value={data.company}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <textarea
                className="px-[17px] pt-[15px] rounded-[6px] border border-[#DBDEE7] bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:text-[18px] h-[60px] text-[18px] text-[#fff]"
                id="message"
                name="message"
                placeholder="Để lại lời nhắn cho chúng tôi"
                value={data.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="text-center mt-[40px] md:mt-[60px]">
            {load === false ? (
              <button
                type="submit"
                className={`register-btn w-[320px] h-[60px] md:w-[777px] md:h-[78px] rounded-[12px] text-[18px] md:text-[24px] font-extrabold`}
              >
                GỬI THÔNG TIN
              </button>
            ) : (
              <button className="register-btn w-[320px] h-[60px] md:w-[777px] md:h-[78px] rounded-[12px] text-[18px] md:text-[24px] font-extrabold uppercase inline-flex justify-center items-center">
                <svg
                  className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx={12}
                    cy={12}
                    r={10}
                    stroke="currentColor"
                    strokeWidth={4}
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                ĐANG GỬI
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
