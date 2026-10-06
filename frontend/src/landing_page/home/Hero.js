import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5  mb-5">
            <div className="row text-center">
                <img src = 'images/homeHero.png' alt = 'Hero Image' className='mb-5'/>
                <h1 className='mt-5' style={{fontSize: "44px"}}>Invest in everything</h1>
                <p style={{fontSize: "20px", margin:"10px 0 15px 0"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto", padding:"10px 30px", marginTop:"25px"}}>Signup Now</button>
            </div>  
        </div>
     );
}

export default Hero;