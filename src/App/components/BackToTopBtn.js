import React, { useState, useEffect } from 'react';
import { back_to_top } from 'App/utils/Icons'

const BackToTopBtn = ({ mode }) => {
    const isLight = mode === 'light'
    const [hideBtn, setHideBtn] = useState(false)

    useEffect(() => {
        window.onscroll = function () {
            if (window.pageYOffset < 200) {
                setHideBtn(false)
            } else {
                setHideBtn(true)
            }
        };
    })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (<>
        {
            hideBtn && <div onClick={scrollToTop} className={back_to_top(isLight)}>
                <i className="fa fa-chevron-up" aria-hidden="true" />
            </div>
        }
    </>
    )
}
export default BackToTopBtn;