import React from 'react';
import { phone, mail, skype, linkedin } from 'App/utils/Icons'
import data from 'App/utils/data.json'

const Connect = ({ mode, myRef }) => {
    const isLight = mode === 'light'
    return (
        <div className={isLight ? "pb-3 bg-light" : "pb-3 bg-dark"} ref={myRef}>
            {data.connect &&
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-3">
                            <h2>Connect</h2>
                        </div>
                        <div className="col-lg-6 py-2">
                            <div className={isLight ? "p-3 shadow rounded bg-white" : "p-3 shadow rounded bg-secondary"}>
                                <div className="py-2">
                                    <div className="d-inline">
                                        <i className={mail(isLight)} aria-hidden="true" />
                                        <p className="d-inline px-3">{data.connect.email}</p>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <div className="d-inline">
                                        <i className={phone(isLight)} aria-hidden="true" />
                                        <p className="d-inline px-3">{data.connect.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 py-2">
                            <div className={isLight ? "p-3 shadow rounded bg-white" : "p-3 shadow rounded bg-secondary"}>
                                <div className="py-2">
                                    <div className="d-inline">
                                        <i className={skype(isLight)} aria-hidden="true" />
                                        <p className="d-inline px-3">{data.connect.skype}</p>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <div className="d-inline">
                                        <i className={linkedin(isLight)} aria-hidden="true" />
                                        <p className="d-inline px-3">{data.connect.linkedin}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default Connect;