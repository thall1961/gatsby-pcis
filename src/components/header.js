import React from 'react';
import {Link} from 'gatsby';

const header = () => {
    return (
        <nav className="container navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
                <img
                    src="https://www.pcisgold.com/hubfs/Pcis%20Gold%20February2018/Image/pcis-logo.svg?t=1527774755774"
                    alt="PCISGOLD"
                    width="150"
                />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/practice-management">
                            Practice Management
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/electronic-health-records"
                        >
                            Electronic Health Record
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">
                            Events
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="https://secure.pcisgold.com/"
                        >
                            Login
                        </a>
                    </li>
                    <li className="nav-item" style={{paddingTop: '5px'}}>
                        <Link to="/" className="btn btn-primary btn-sm">
                            2-minute demo
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default header;
