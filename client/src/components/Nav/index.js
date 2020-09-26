import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

//  YOUR NAV COMPONENT HERE
class Nav extends Component {
    state = {
        open: false,
        width: window.innerWidth
    };

    updateWidth = () => {
        const newState = { width: window.innerWidth };

        if (this.state.open && newState.width > 991) {
            newState.open = false;
        }

        this.setState(newState);
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    };

    componentWillMount() {
        window.removeEventListener("resize", this.updateWidth);
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navar-light bg-light mb-2">
                <Link className="navbar-brand" to="/">
                    Find Books
                </Link>
                <button
                    onClick={this.toggleNav}
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={`${this.state.open ? "" : "collapse"}navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <Link
                            onclick={this.toggleNav}
                            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                            to="/"
                    >
                        Search
                    </Link> */}
                            <Link
                                onClick={this.toggleNav}
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                to="/saved"
                            >
                                My Books
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Nav;
