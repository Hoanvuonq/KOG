import React from 'react';

const Meet = () => {
    return (
        <div className="rounded-[40px] border-8 border-white shadow-lg backdrop-blur-md sm:mt-3 mt-20 sm:w-[44%] w-[90%] p-2">
            <div className="flex-col all-center sm:p-2 p-4">
                <h1 className="text-title-box text-white text-center sm:text-[20px] text-[60px] sm:pt-0 pt-6">MEET $BITAPAI</h1>
                <p className="text-content-box text-white sm:pt-2 pt-8 text-center w-full">
                BitAPAI allows you to access the Bittensor network via endpoints through the prevision of API keys. These keys can be used to build apps on the network, access and utilise existing apps built on the network and access the models currently deployed on the Bittensor network.
                </p>
            </div>
        </div>
    );
};

export default Meet;
