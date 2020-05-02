import React from 'react';
import 'App.css'
import data from 'App/utils/data.json'

const About = ({ mode, myRef }) => {
    const isLight = mode === 'light'
    return (
        <div className={mode === 'light' ? "bg-white" : "bg-secondary"} ref={myRef}>
            <div className="container">
                <div className="row">
                    {
                        data.experience && data.experience.length !== 0 && <>
                            <div className="col-lg-6 pt-3 pb-4">
                                <div className="py-2"><h2><b>Professional Experience</b></h2></div>
                                {data.experience.map((item, key) =>
                                    <div key={key} className="position-relative px-3 pb-3 resume-item border-primary-dark">
                                        <h4 className="pb-1">{item.designation}</h4>
                                        <p className={isLight ? "px-2 py-1 d-inline bg-primary-light" : "px-2 py-1 d-inline bg-dark"}>
                                            {item.duration}
                                        </p>
                                        <p className="pt-2"><i>{item.organization}</i></p>
                                        <ul className="px-4">
                                            {
                                                item.extra && item.extra.map((item, key) =>
                                                    <li key={key}>{item}</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </>
                    }
                    {
                        data.education && data.education.length !== 0 && <>
                            <div className="col-lg-6 pt-3 pb-4">
                                <div className="py-2"><h2><b>Education</b></h2></div>
                                {
                                    data.education.map((item, key) =>
                                        <div key={key} className="position-relative px-3 pb-3 resume-item border-primary-dark">
                                            <div className="border-secondary-light rounded-circle position-absolute"></div>
                                            <h4 className="pb-1">{item.course}</h4>
                                            <p className={isLight ? "px-2 py-1 d-inline bg-primary-light" : "px-2 py-1 d-inline bg-dark"}><i>
                                                {item.duration}
                                            </i></p>
                                            <p className="pt-2"><i>{item.institution}</i></p>
                                            <ul className="px-4">
                                                {
                                                    item.extra && item.extra.map((item, key) =>
                                                        <li key={key}>{item}</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
export default About;