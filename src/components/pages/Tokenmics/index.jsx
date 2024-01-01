import React from 'react';
import { Link } from 'react-router-dom';

const Tokenmics = () => {
    return (
        <>
            <div className="all-center flex-col">
                <h1 className="text-title-box sm:text-[20px] text-[60px] text-white sm:mt-2 mt-20">TOKENOMICS</h1>
                <div className="all-center sm:gap-20 gap-10 lg:flex-row flex-col sm:mt-0 mt-10">
                    <div className="all-center flex-col">
                        <p className="text-title-token pb-1">Total Supply</p>
                        <Link to={'/'}>
                            <button className="text-token text-white py-3 px-5 rounded-lg sm:w-[220px] w-[330px] sm:h-8 h-14 shadow-custom blur-20 all-center border-4 border-white">
                            720,000,000
                            </button>
                        </Link>
                    </div>
                    <div className="all-center flex-col">
                        <p className="text-title-token pb-1">Buys / Sells taxes</p>
                        <Link to={'/'}>
                            <button className="text-token text-white py-3 px-5 rounded-lg sm:w-[220px] w-[330px] sm:h-8 h-14 shadow-custom blur-20 all-center border-4 border-white">
                                0% / 0%
                            </button>
                        </Link>
                    </div>

                    <div className="all-center flex-col">
                        <p className="text-title-token pb-1">LP LOCKED</p>
                        <Link to={'/'}>
                            <button className="text-token text-white py-3 px-5 rounded-lg sm:w-[220px] w-[330px] sm:h-8 h-14 shadow-custom blur-20 all-center border-4 border-white">
                                FOREVER
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="all-center flex-col sm:mt-5 mt-10">
                <Link to={'/'}>
                    <button className="text-token text-white py-3 px-2 rounded-lg sm:w-[220px] w-[330px] sm:h-8 h-14 shadow-custom blur-20 all-center border-4 border-white">
                    OWNERSHIP RENOUNCED
                    </button>
                </Link>
            </div>
        </>
    );
};
export default Tokenmics;
