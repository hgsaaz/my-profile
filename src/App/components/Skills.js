import React from 'react';
import 'App/utils/width.css'
import data from 'App/utils/data.json'

const Skills = ({ mode, myRef }) => {
    const isLight = mode === 'light'

    return (
        <div className={mode === 'light' ? "bg-white" : "bg-secondary"} ref={myRef}>
            {data.skills &&
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="pt-3 pb-2"><b>Skills</b></h2>
                        </div>
                        {
                            data.skills.map((item, key) =>
                                <div className="col-12 col-lg-6 skill" key={key}>
                                    {item.name}
                                    <div className={isLight ? "w-100 h-25 bg-primary-light rounded"
                                        : "w-100 h-25 bg-primary-light rounded"}>
                                        <div className={isLight ? `w-${item.percentage} h-100 bg-primary-fade rounded`
                                            : `w-${item.percentage} h-100 bg-dark rounded`}></div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    )
}
export default Skills;


