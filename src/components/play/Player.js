import React from "react";
import ReactDOM from 'react-dom';
import {Song} from '../../model/song';

import "./Progress";

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.currentSong = new Song(0, "", "", 0, "", "");
        this.currentIndex = 0;

        // 播放模式 list-列表 single-单曲shuffle-随机
        this.playModes = ["list", "single", "shuffle"];

        // 初始化状态
        this.state = {
            currentTime: 0,
            playProgress: 0,
            playStatus: false,
            currentPlayMode: 0
        };
    }

    componentDidMount() {
        this.audioDOM = ReactDOM.findDOMNode(this.refs.audio);
        this.singerImgDOM = ReactDOM.findDOMNode(this.refs.singerImg);
        this.playerDOM = ReactDOM.findDOMNode(this.refs.player);
        this.playerBgDOM = ReactDOM.findDOMNode(this.refs.playerBg);
    }

    render() {
        let song = this.currentSong;

        let playBg = song.img ? song.img : require("../../assets/imgs/play_bg.jpg");

        // 播放按钮样式
        let playButtonClass = this.state.playStatus === true ? "icon-pause" : "icon-play";

        song.playStatus = this.state.playStatus;

        return (
            <div>player ...</div>
        );
    }
}

export default Player
