import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar.png" 
import Meet from "../Meet";
import Footer from "../../layouts/Footer";

const Home = () => {
    return (
        <div className="bg-white w-full h-full">  
            <div className="w-full h-full">
                <div className="all-center w-full pt-[100px] flex-col">
                    {/* <img src={Avatar} alt="Item EOG" className="sm:w-[400px] w-[300px] sm:h-[400px] h-[300px] rounded-full border-[6px] border-[#747474]" /> */}
                    <h1 className="text-title text-black text-s sm:!text-[100px] !text-[80px] with-shadow">Nothing</h1>
                    <p className="text-content text-black text-s text-center sm:px-0 px-2">CA :</p>
                    <p className="text-content text-black text-s text-center sm:px-0 px-2"></p>
                    <div className="all-center gap-10 mt-10 lg:flex-row flex-col">
                        <Link to={"#"} target="_blank">
                            <button className="bg-black text-white py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom text-btn all-center">dextools chart</button>
                        </Link>
                        <Link to={"https://t.me/erc20_nothing"} target="_blank">
                            <button className="bg-black text-white py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom text-btn all-center">telegram</button>
                        </Link>
                        <Link to={"https://twitter.com/nothingERC20_"} target="_blank">
                            <button className="bg-black text-white py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom text-btn all-center">twitter</button>
                        </Link>
                    </div>
                    <Meet/>
                </div>
                <Footer/>
            </div>
        </div>
    );
};
export default Home;