import React, { useEffect } from 'react';
import data from 'App/utils/data.json'
import Typed from 'typed.js';

const Home = ({ mode, myRef, createTyped }) => {
    useEffect(() => {
        const options = {
            strings: data.profiles,
            loop: true,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 2000
        };
        if (createTyped)
            new Typed('.typed', options);
    })

    return (
        <div
            className={mode === 'light' ?
                "hero bg-light"
                : "hero bg-dark"} ref={myRef}>

            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center w-100">
                    <img src={data.profile_url ? data.profile_url : process.env.PUBLIC_URL + "/profile.jpg"}
                        alt="profile" className="border rounded-circle img-profile"></img>
                    <div className="w-100 text-center p-1">
                        <h2><b>{data.name}</b></h2>
                    </div>
                    <div className="w-100 text-center p-1">
                        <h3><i><span className="typed"></span></i></h3>
                    </div>
                    <div className="d-flex flex-row flex-wrap justify-content-center justify-content-md-start p-3">
                        {
                            data.certifications && data.certifications.map((item, key) =>
                                <div key={key} className="d-flex px-2">
                                    <img className="hero-icon" src={item.image_url} alt="trailhead" />
                                    <div className="d-flex flex-column px-1">
                                        <h4 className="d-inline m-0 mt-1">{item.title}</h4>
                                        <p className="d-inline">{item.subtitle}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;