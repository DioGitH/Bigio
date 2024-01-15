import React, { Component } from 'react';
import Header from './Header';
import SideNav from './SideNav';

class DashboardPage extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="section">
                    <div className="columns">
                        <SideNav />
                        <main className="column">
                            Dashboard
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardPage;