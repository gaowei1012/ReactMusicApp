import React from 'react';

import './header.styl';

class Header extends React.Component {

    // back 
    haldleClick() {
        window.history.back();
    };

    render() {
        return(
            <div className="music-header">
                <span className="header-back" 
                    onClick={this.haldleClick}
                >
                    <i className="icon-back"></i>
                </span>
                <div className="header-title">
                    {this.props.title}
                </div>
            </div>
        );
    }
}

export default Header;