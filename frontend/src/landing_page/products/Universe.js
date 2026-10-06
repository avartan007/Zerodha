import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3 mt-5" style={{ padding: "20px" }}>
                    <img 
                        src="./images/smallcaseLogo.png" 
                        className="img-fluid" 
                        alt="Smallcase" 
                        style={{ width: "250px", height: "130px", objectFit: "contain" }} 
                    />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>

                <div className="col-4 p-3 mt-5" style={{ padding: "20px" }}>
                    <img 
                        src="./images/streakLogo.png" 
                        className="img-fluid" 
                        alt="Streak" 
                        style={{ width: "250px", height: "130px", objectFit: "contain" }} 
                    />
                    <p className='text-small text-muted'>Systematic trading platform</p>
                </div>

                <div className="col-4 p-3 mt-5" style={{ padding: "20px" }}>
                    <img 
                        src="./images/sensibullLogo.svg" 
                        className="img-fluid" 
                        alt="Sensibull" 
                        style={{ width: "250px", height: "130px", objectFit: "contain" }} 
                    />
                    <p className='text-small text-muted'>Options trading platform</p>
                </div>

                <div className="col-4 p-3 mt-5" style={{ padding: "20px" }}>
                    <img 
                        src="./images/dittoLogo.png" 
                        className="img-fluid" 
                        alt="Ditto" 
                        style={{ width: "250px", height: "130px", objectFit: "contain" }} 
                    />
                    <p className='text-small text-muted'>Investment research platform</p>
                </div>

                <div className="col-4 p-3 mt-5" style={{ padding: "20px" }}>
                    <img 
                        src="./images/zerodhaFundhouse.png" 
                        className="img-fluid" 
                        alt="Zerodha Fundhouse" 
                        style={{ width: "250px", height: "130px", objectFit: "contain" }} 
                    />
                    <p className='text-small text-muted'>Our asset management venture</p>
                </div>

                <div className="col-4 p-3 mt-5" style={{ padding: "20px" }}>
                    <img 
                        src="./images/goldenpiLogo.png" 
                        className="img-fluid" 
                        alt="GoldenPi" 
                        style={{ width: "250px", height: "130px", objectFit: "contain" }} 
                    />
                    <p className='text-small text-muted'>Options trading platform</p>
                </div>

                <button 
                    className='p-2 btn btn-primary fs-5 mb-5' 
                    style={{ width: "20%", margin: "0 auto", padding: "10px 30px", marginTop: "25px" }}
                >
                    Signup For Free
                </button>
            </div>
        </div>
    );
}

export default Universe;
