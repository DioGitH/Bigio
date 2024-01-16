import React, { Component } from 'react';
import {Link} from "react-router-dom";


class SideNav extends Component {
    render() {
        return (
            <aside className="SideNav column is-2" style={{ borderRight: "2px solid #ccc" }}>
                <nav className="menu">
                    <p className="menu-label">
                        General
                    </p>
                    <ul className="menu-list">
                        <Link to="/"><li>Dashboard</li></Link>
                        <Link to="/story"><li>Management Story</li></Link>
                    </ul>
                </nav>
            </aside>
        );
    }
}

export default SideNav;