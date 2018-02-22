import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './progress.styl';

class Progress extends React.Component {

    componentDidUpdate() {
        
    }

    componentDidMount() {

        let propressBarDOM = ReactDOM.findDOMNode(this.refs.progressBar);
        let progressDOM = ReactDOM.findDOMNode(this.refs.progress);
        let progressBtnDOM = ReactDOM.findDOMNode(this.refs.progressBtn);
        this.progressBarWidth = progressBtnDOM.offsetWidth;

    }

    render() {
        let {progress, disableButton} = this.props;
        if (!progress) progress = 0;
        
        // left 按钮的值
        let progressButtonOffsetLeft = 0;
        if (this.progressBarWidth) {
            progressButtonOffsetLeft = progress * this.progressBarWidth;
        }
        return (
            <div className="progress-bar" ref="propressBar">
                <div className="progress" style={{width: "20%"}} ref="progress"></div>
                <div className="progress-buttom" style={{left: "70px"}} ref="progressBtn"></div>
            </div>
        );
    }
}

Progress.PropTypes = {
    progress: PropTypes.number.isRequired,
    disableButton: PropTypes.bool,
    disableDrag: PropTypes.bool,
    onDragStart: PropTypes.func,
    onDragEnd: PropTypes.func
};

export default Progress