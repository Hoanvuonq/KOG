import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-4.png"
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";
import IconCoppy from '../../../assets/copy.png'
import ClipboardJS from 'clipboard';

const splitAddress = (address, options) => {
    const isVersion2 = options?.isVersion2 || false;
    const numSplit = options?.numSplit || 10;

    if (address) {
        return (
            <>
                {address.substring(0, isVersion2 ? 4 : numSplit)}
                {isVersion2 ? ' **** **** ' : ' ... '}
                {address.substring(address.length - (isVersion2 ? 4 : numSplit))}
            </>
        );
    }

    return '';
};

const Home = () => {
    const contractAddress = '0x35B8986Cc92f8b9c328231d73a5bf6B47F3A697D';
    const buttonRef = useRef(null);

    useEffect(() => {
        const clipboard = new ClipboardJS(buttonRef.current);

        clipboard.on('success', (e) => {
            console.log('Copied to clipboard:', e.text);
        });

        return () => {
            clipboard.destroy();
        };
    }, []);


    return (
        <div className="bg-kog w-full h-full">
            <div className="bg-[#0101010f] w-full h-full flex flex-col justify-between">
                <div className="all-center w-full pt-[20px] flex-col">
                    <img src={Avatar} alt="Item EOG" className="sm:w-[140px] w-[300px]" />
                    <h1 className="text-title text-white text-s sm:!text-[30px] !text-[80px] sm:leading-[50px] with-shadow">$BONK</h1>
                    <p className="text-content text-white text-center sm:!text-base !text-xl all-center">CA : <div className='ml-1' ref={buttonRef} data-clipboard-text={contractAddress}>
                        {splitAddress(contractAddress, { numSplit: 10 })}
                    </div>
                        <img src={IconCoppy} width={14} height={14} alt="Icon Coppy" className="ml-2 w-4 h-4 cursor-pointer" /> </p>
                    {/* <p className="text-content text-white text-center">BONK INU HAS ARRIVED AVAX DEXSCREEN CHART </p> */}
                    <div className="all-center gap-10 mt-1 lg:flex-row flex-col">
                        <Link to={"https://dexscreener.com/avalanche/0xeb875ff1cfcc20a3f1a4e1a16e20d8c1069f6347"} target="_blank">
                            <button className="bg-white text-[#432627] sm:py-3 py-8 px-10 sm:rounded-lg rounded-xl sm:w-[160px] w-[315px] sm:h-7 h-9 shadow-custom text-btn all-center">dextools chart</button>
                        </Link>
                        <Link to={"https://t.me/BonkInuAVAX"} target="_blank">
                            <button className="bg-white text-[#432627] sm:py-3 py-8 px-10 sm:rounded-lg rounded-xl sm:w-[160px] w-[315px] sm:h-7 h-9 shadow-custom text-btn all-center">telegram</button>
                        </Link>
                        <Link to={"https://twitter.com/BonkInuAVAX"} target="_blank">
                            <button className="bg-white text-[#432627] sm:py-3 py-8 px-10 sm:rounded-lg rounded-xl sm:w-[160px] w-[315px] sm:h-7 h-9 shadow-custom text-btn all-center">twitter</button>
                        </Link>
                    </div>
                    <Meet />
                    <Tokenmics />
                </div>
                <Footer />
            </div>
        </div>
    );
};
export default Home;