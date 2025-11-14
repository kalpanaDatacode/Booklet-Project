import React from "react";
import { useNavigate } from "react-router-dom";

const LoginCard = ({ image1, heading, image2, btntext, label1, label2, showSignup }) => {
    const navigate = useNavigate();

    return (
        <section>
            <div className="row mx-0 my-0 bg-dark vh-100 vw-100 overflow-hidden d-flex">
                <div className="col-12 col-md-6 ps-md-5 pt-md-5 pt-5">
                    <div className="text-center">
                        <img className="bg-dark object-fit-cover" src={image1} alt="logo" />
                    </div>

                    <h1 className="text-white fw-200 my-3 text-small text-center">{heading}</h1>

                    <div>
                        <form className="row">
                            <div className="col-md-10 col-sm-5">

                                <label htmlFor="email" className="form-label text-white bg-dark ms-sm-5">{label1}</label><br />
                                <input className="form-control me-5 bg-dark border border-1 rounded ms-sm-5" type="email" /><br />

                                <label htmlFor="password" className="form-label w-40 text-white bg-dark mt-4 ms-md-5 ms-sm-5">{label2}</label><br />
                                <input className="form-control w-40 bg-dark border border-1 rounded ms-md-5 ms-sm-5" type="password" /><br />
                            </div>

                            <div className="text-center">

                                {/* LOGIN REDIRECT BUTTON */}
                                <button
                                    type="button"
                                    onClick={() => navigate("/dashboard")}
                                    className="btn btn-primary rounded-pill ps-md-4 pe-md-4 m-3"
                                >
                                    {btntext}
                                </button>

                                {showSignup && (
                                    <button
                                        type="button"
                                        onClick={() => navigate("/signup")}
                                        className="btn btn-primary rounded-pill ps-md-4 pe-md-4 m-3"
                                    >
                                        Sign Up
                                    </button>
                                )}

                            </div>
                        </form>
                    </div>
                </div>

                <div className="img-fluid col-12 col-md-6 m-0">
                    <img className="h-100 w-100 object-fit-cover" src={image2} alt="side" />
                </div>
            </div>
        </section>
    );
};

export default LoginCard;
