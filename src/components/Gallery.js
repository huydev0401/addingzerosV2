import React, { useEffect } from "react";
import AOS from "aos";

export default function Gallery() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="md:py-section py-sectionMB mx-[10px] md:mx-auto">
      <div className="gallery-list grid grid-cols-3 md:grid-cols-6 gap-[10px] md:gap-[18px]">
        <div
          className="gallery-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src="/images/gallery-1.png" alt="" />
        </div>
        <div
          className="gallery-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src="/images/gallery-2.png" alt="" />
        </div>
        <div
          className="gallery-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src="/images/gallery-3.png" alt="" />
        </div>
        <div
          className="gallery-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src="/images/gallery-4.png" alt="" />
        </div>
        <div
          className="gallery-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src="/images/gallery-5.png" alt="" />
        </div>
        <div
          className="gallery-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src="/images/gallery-6.png" alt="" />
        </div>
        <div
          className="gallery-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src="/images/gallery-7.png" alt="" />
        </div>
        <div
          className="gallery-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src="/images/gallery-8.png" alt="" />
        </div>
        <div
          className="gallery-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src="/images/gallery-9.png" alt="" />
        </div>
      </div>
    </section>
  );
}
