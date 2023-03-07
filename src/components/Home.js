import React from "react";
import '../Home.css'

import { Link } from "react-router-dom";

const Home = () => {
    return (  
        <div>
           
          <section className="about">
                <div className="about-content">
                    <div className="about-column">
                        <div className="about-row">
                            <div className="about-content-wrapper">
                                <h1 className="about-heading">
                                    <span className="show-about-heading">Come and Make A Meme</span> 
                                    <br></br>
                                    &nbsp; Let's Have A Laugh Together
                                </h1>
                                <div className="main-content">
                                    <p className="p-content">
                                        Create an account, Login and fill the form to start making your own custom memes
                                    </p>
                                    <div className="button-container">
                                        <span className="sign-up-button">
                                            <Link to="/register" className="showing-sign">
                                                <span className="signing-now">Sign up now</span>

                                            </Link>

                                        </span>

                                        <span className="sign-up-button">
                                            <Link to="/login" className="showing-sign">
                                                <span className="signing-now">Login now</span>

                                            </Link>

                                        </span>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
          </section>
        </div>
    );
}
 
export default Home;