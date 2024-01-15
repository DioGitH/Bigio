import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <header className="header hero is-light">
                <div className="hero-head">
                    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <h1>StoryKu</h1>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;