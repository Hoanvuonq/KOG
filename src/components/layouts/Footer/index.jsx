import React from "react";
import { Link } from "react-router-dom";
import IconTele from "../../../assets/icon-telegram.png"
import IconTwitter from "../../../assets/icon-twitter.png"

const Footer = () => {
    return (
        <div className="flex justify-between px-10 border-t border-[#482C27] w-full h-10 sm:mt-0 mt-10 py-2 items-center shadow-lg bg-white">
            <p className="text-footer">$EHCNALAVA © 2023. ALL RIGHTS RESERVED</p>
            <div className="flex gap-2">
                <Link to={"https://t.me/BonkInuAVAX"} target="_blank">
                    <img src={IconTele} alt="Icon Telegram" className="scale-icon sm:w-6 w-7" />
                </Link>
                <Link to={"https://twitter.com/BonkInuAVAX"} target="_blank">
                    <img src={IconTwitter} alt="Icon Twitter" className="scale-icon sm:w-6 w-7" />
                </Link>
            </div>
        </div>
    );
};
export default Footer;