import React from 'react';

const Header = ({ mode, toggleTheme, scrollTo }) => {
    return (
        <>
            <nav className={(mode === 'light') ? "navbar navbar-expand-lg fixed-top navbar-dark bg-dark"
                : "navbar navbar-expand-lg fixed-top navbar-light bg-light"}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <label className="nav-link m-0" onClick={() => scrollTo('HOME')}>
                                Home <span className="sr-only">(current)</span></label>
                        </li>
                        <li className="nav-item">
                            <label className="nav-link m-0" onClick={() => scrollTo('ABOUT')}>About</label>
                        </li>
                        <li className="nav-item">
                            <label className="nav-link m-0" onClick={() => scrollTo('CONNECT')}>Connect</label>
                        </li>
                    </ul>
                </div>
                <span className={mode === 'light' ? 'px-1 text-white mode-icon cursor' : 'px-1 text-dark mode-icon cursor'} onClick={toggleTheme}>
                    {mode === 'light' ? <i className="fa fa-moon-o" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Dark Mode"></i> :
                        <i className="fa fa-sun-o" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Light Mode"></i>}
                </span>
            </nav>
        </>
    )
}

export default Header;