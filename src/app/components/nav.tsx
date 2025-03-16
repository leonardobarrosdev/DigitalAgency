import { useEffect } from 'react';
import Image from 'next/image';
import logo from 'assets/img/navbar-logo.svg';

export function Nav() {
    useEffect(() => {
        if (typeof document !== 'undefined') {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            require("@popperjs/core/dist/umd/popper.js");
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            require("bootstrap/dist/js/dist/dropdown.js");
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            require("public/assets/js/scripts.js");
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">
                    <Image src={logo} width={100} alt="..." />
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarResponsive" 
                    aria-controls="navbarResponsive" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item dropdown"> {/* Bootstrap 5.2.3 dropdown */}
                            <div className="d-flex align-items-center">
                                <a 
                                    className="nav-link pe-0" 
                                    href="#portfolio"
                                >
                                    Portfolio
                                </a>
                                <a
                                    className="nav-link dropdown-toggle ps-1"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Social Network</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}