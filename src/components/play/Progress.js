import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './progress.styl';

class Progress extends React.Component {

    componentDidUpdate() {
        // 组件更新后重新获取进度条总宽度
        if (!this.progressBarWidth) {
            this.progressBarWidth = ReactDOM.findDOMNode(thid.refs.progressBar).offsetWidth;
        }

    }

    componentDidMount() {
        // progress
        let propressBarDOM = ReactDOM.findDOMNode(this.refs.progressBar);
        let progressDOM = ReactDOM.findDOMNode(this.refs.progress);
        let progressBtnDOM = ReactDOM.findDOMNode(this.refs.progressBtn);
        this.progressBarWidth = progressBtnDOM.offsetWidth;

        // 移动端拖拽
        let {disableButton, disableDrag, onDragStart, onDragEnd} = this.props;
        if (disableButton !== true && disableDrag !==true) {
            // 触摸开始位置
            let downX = 0;
            // 按钮letf值
            let buttonLeft = 0;

            progressBtnDOM.addEventListener("touchstart", (e) => {
                let touch = e.touches[0];
                downX = touch.clientX;
                buttonLeft = parseInt(touch.target.style.left, 10);
                // 开始记录
                if (onDragStart) {
                    onDragStart();
                }
            });

            progressBtnDOM.addEventListener("touchmove", (e) => {
                e.preventDefault();

                let touch = e.touches[0];
                let diffX = touch.clientX -downX;

                let btnLeft = buttonLeft + diffX;
                if (btnLeft > progressDOM.offsetWidth) {
                    btnLeft = progressBtnDOM.offsetWidth; 
                } else if (btnLeft < 0) {
                    btnLeft = 0;
                }

                // 设置按钮left 值
                touch.target.style.left = btnLeft + 'px';
                // 设置进度width值
                progressDOM.style.width = btnLeft / this.progressBarWidth * 100 + '%' ;

                if (onDrag) {
                    onDrag(btnLeft / this.progressBarWidth);
                }
            });

            progressBtnDOM.addEventListener("touchend", (e) => {
                if (onDragEnd) {
                    onDragEnd();
                }
            });

        }

    }

    render() {
        let { progress, disableButton } = this.props;
        if (!progress) progress = 0;

        // left 按钮的值
        let progressButtonOffsetLeft = 0;
        if (this.progressBarWidth) {
            progressButtonOffsetLeft = progress * this.progressBarWidth;
        }
        return (
            <div className="progress-bar" ref="propressBar">
                <div className="progress-load"></div>
                <div className="progress" style={{ width: `${progress * 100}%` }} ref="progress"></div>
                {
                        disableButton === true ? "" :
                        <div className="progress-buttom" style={{ left: progressButtonOffsetLeft}} ref="progressBtn"></div>

                }
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