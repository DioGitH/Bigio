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
                            <div className="has-text-centered">
                                <a className='is-size-1 has-text-weight-semibold has-text-black'>
                                    Dashboard
                                </a>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardPage;