import React from 'react';
import './footer.css';
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineFacebook } from "react-icons/md";
import { BiLogoTiktok } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="custom-footer-section">
      <div className="custom-footer-links">
        <ul>
          <li>
            <a href="https://www.instagram.com/openwindowinstitute/">
            <RiInstagramFill />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/theopenwindow">
            <MdOutlineFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@open_window_">
            <BiLogoTiktok />
            </a>
          </li>
          <li>
            <a href="https://www.openwindow.co.za/?gad_source=1&gclid=Cj0KCQjw5cOwBhCiARIsAJ5njuYlapAsfzye2gz4yYLzd6iKZOp_eM80n3FH4M7jUwUMdXgcTJ1rLYQaAnAUEALw_wcB">
            <FaGoogle />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/open_window_">
            <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@theopenwindowschool">
            <BsYoutube />
            </a>
          </li>
        </ul>
      </div>
      <p>&copy; 2024 OpenWindow. All rights reserved.</p>
    </footer>
  );
};

export default Footer;