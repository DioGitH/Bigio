import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <header className="header hero has-background-info pb-3 pl-3">
                <div class="navbar-brand">
                    <div className="has-text-centered">
                        <a className='is-size-1 has-text-weight-semibold has-text-white'>
                            StoryKu
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;