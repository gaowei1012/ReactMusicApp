import React from 'react';
import LoadingImg from './loading.gif';

import './loadding.styl';

class Loading extends React.Component {
    render() {
        let displayStyle = this.props.show === true ? 
            {display: ''} : {display: 'none'};
        return (
            <div className="loading-container" style={displayStyle}>
                <div className="loading-wrapper">
                    <img src={LoadingImg} width="18px" height="18px" alt='loading' />
                    <div className="loading-title">
                        {this.props.title}
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;
