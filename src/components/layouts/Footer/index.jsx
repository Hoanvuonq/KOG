import React from "react";
import { Link } from "react-router-dom";
import IconTele from "../../../assets/icon-telegram.png"
import IconTwitter from "../../../assets/icon-twitter.png"

const Footer = () => {
    return (
        <div className="flex justify-between border-t border-[#000] w-full h-20 mt-[78px] py-4 px-[60px] items-center shadow-lg backdrop-blur-md">
            <p className="text-footer text-black">$MISSOR © 2023. ALL RIGHTS RESERVED</p>
            <div className="flex gap-2">
                <Link to={"https://t.me/PepeTheWorldEatter"} target="_blank">
                    <img src={IconTele} alt="Icon Telegram" width={46} height={46} className="scale-icon"/>
                </Link>
                <Link to={"https://twitter.com/PepeWorldEatter"} target="_blank">
                    <img src={IconTwitter} alt="Icon Twitter" width={46} height={46} className="scale-icon"/>
                </Link>
            </div>
        </div>
    );
};
export default Footer;