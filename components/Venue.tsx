import React from 'react';

const Venue = () => {
    return (
        <div
            className="h-fix flex items-center flex-col justify-center"
            style={{
                backgroundImage: `url('./images/hero-bg.png')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex items-center justify-center h-screen">
                <div className="w-1/2 bg-black border-2 border-D8B4FF rounded-md p-20 relative flex flex-col justify-center">
                    <p className="text-white text-6xl font-bold bg-gradient-to-r from-19FB9B to-8C01FA text-center mb-4">VENUE</p>
                    <p className="text-white text-xl text-center">Yet to be disclosed</p>
                </div>
            </div>
        </div>
    );
};

export default Venue;
