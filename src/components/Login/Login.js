import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {
        signInUsingGoogle,

    } = useFirebase();


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className="div d-flex justify-content-center align-items-center">
            <div className="row container">
                <div className="col-md-6">
                    <div>

                        <div className="login-btn mt-4">
                            <button
                                onClick={handleGoogleLogin}
                                className="btn btn-warning m-2"
                            >
                                google sign in
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-side-image">
                        <img
                            className="w-100 mt-5"
                            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/53883144/original/a7678373b0aa4c3b2f61e17f2396882d836c37f7/let-african-kids-draw-or-write-your-message-on-a-hold-sign-ebff0b3e-58fc-494e-8eb9-f0004f768755.jpg"
                            alt=""
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;