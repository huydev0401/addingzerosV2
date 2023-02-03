import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-black">
      <div className="page-container flex gap-[20px] flex-col md:flex-row items-center justify-between py-[25px]">
        <a href="/">
          <img srcSet="/images/logo-footer.png 2x" alt="" />
        </a>
        <p className="text-[14px] text-[#282828]">
          © 2023 AZN, All Rights Reserved
        </p>
        <div className="flex items-center gap-[15px]">
          <span>Follow us:</span>
          <a
            href="https://www.facebook.com/AddingZerosNetwork"
            target="_blank"
            rel="noreferrer"
          >
            <img srcSet="/icons/facebook-icon.png 2x" alt="" />
          </a>
          <a
            href="https://www.youtube.com/@ActionCOACHCBDFirm"
            target="_blank"
            rel="noreferrer"
          >
            <img srcSet="/icons/youtube-icon.png 2x" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
