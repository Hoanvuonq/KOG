import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-3.jpg" 
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";

const Home = () => {
    return (
        <div className="bg-kog w-full h-full">  
            <div className="bg-[#01010178] w-full h-full flex flex-col justify-between">
                <div className="all-center w-full pt-[20px] flex-col">
                    <img src={Avatar} alt="Item EOG" className="sm:w-[150px] w-[200px] border-[4px] border-[#52ccc2]" />
                    <h1 className="text-title text-white text-s sm:!text-[30px] !text-[80px] sm:leading-[50px] with-shadow">$BITAPAI</h1>
                    <p className="text-content text-white text-center sm:!text-base !text-xl max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap">CA : 0xc7A320CA7606770ce6360cec380435057C687065</p>
                    {/* <p className="text-content text-white text-center">AI The Squid Game</p> */}
                    {/* <div className="all-center gap-10 mt-4 lg:flex-row flex-col">
                        <Link to={"#"} target="_blank">
                            <button className="bg-white text-[#432627] sm:py-3 py-8 px-10 sm:rounded-lg rounded-xl sm:w-[160px] w-[315px] sm:h-7 h-9 shadow-custom text-btn all-center">dextools chart</button>
                        </Link>
                        <Link to={"#"} target="_blank">
                            <button className="bg-white text-[#432627] sm:py-3 py-8 px-10 sm:rounded-lg rounded-xl sm:w-[160px] w-[315px] sm:h-7 h-9 shadow-custom text-btn all-center">telegram</button>
                        </Link>
                        <Link to={"#"} target="_blank">
                            <button className="bg-white text-[#432627] sm:py-3 py-8 px-10 sm:rounded-lg rounded-xl sm:w-[160px] w-[315px] sm:h-7 h-9 shadow-custom text-btn all-center">twitter</button>
                        </Link>
                    </div> */}
                    <Meet/>
                    <Tokenmics/>
                </div>
                <Footer/>
            </div>
        </div>
    );
};
export default Home;