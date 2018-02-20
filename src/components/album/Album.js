import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Scroll from '../../common/scroll/Scroll';
import Loading from '../../common/loading/Loading';

import {getAlbumInfo} from '../../api/recommend';
import {CODE_SUCCESS} from '../../api/config';
import * as AlbumModel from '../../model/album';
import * as SongModel from '../../model/song';

import './album.styl';

class Album extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            loading: true,
            album: {},
            songs: [],
            refreshScroll: false
        };
    }

    componentWillMount() {
        this.setState({
            show: true
        });      
        let albumBgDOM = ReactDOM.findDOMNode(this.refs.albumBg);
        let albumContainerDOM = ReactDOM.findDOMNode(this.refs.albumContainer);
        albumContainerDOM.style.top = albumBgDOM.offsetHeight + "px";

        // 获取专辑详情
        getAlbumInfo(this.props.match.params.id).then((res) => {
            console.log('获取专辑详情');
            if (res) {
                console.log(res);
                if (res.code === CODE_SUCCESS) {
                    let album = AlbumModel.createAlbumByDetail(res.data);
                    album.desc = res.data.desc;

                    let songList = res.data.list;
                    let songs = [];

                    songList.forEach(item => {
                        let song = SongModel.createSong(item);
                        songs.push(song);
                    });
                    // DOM
                    this.setState({
                        loading: false,
                        album: album,
                        songs: songs
                    }, () => {
                        // 刷新 scroll
                        this.setState({refreshScroll: true});
                    });
                }
            }
        });
    }
    
    render() {
        let album = this.state.album;
        let songs = this.state.songs.map((song) => {
            return (
                <div className="song" key={song.id}>
                    <div className="song-name">{song.name}</div>
                    <div className="song-singer">{song.singer}</div>
                </div>
            );
        });

        return(
            <div className="music-album">
                <Header title={album.name} ref="header"></Header>
                <div style={{position: "relative"}}>
                    <div ref="albumBg" className="album-img" style={{backgroundImage: `url(${album.img})`}}>
                        <div className="filter"></div>
                    </div>
                    <div ref="albumFixedBg" className="album-img fixed" style={{backgroundImage: `url(${album.img})`}}>
                        <div className="filter"></div>
                    </div>
                    <div className="play-wrapper" ref="playButtonWrapper">
                        <div className="play-button">
                            <i className="icon-play"></i>
                            <span>播放全部</span>
                        </div>
                    </div>
                </div>
                <div ref="albumContainer" className="album-container">
                    <div className="album-scroll" style={this.state.loading === true ? {display:"none"} : {}}>
                        <Scroll refresh={this.state.refreshScroll}>
                            <div className="album-wrapper">
                                <div className="song-count">专辑 共{songs.length}首</div>
                                <div className="song-list">
                                    {songs}
                                </div>
                                <div className="album-info" style={album.desc? {} : {display:"none"}}>
                                    <h1 className="album-title">专辑简介</h1>
                                    <div className="album-desc">
                                        {album.desc}
                                    </div>
                                </div>
                            </div>
                        </Scroll>
                    </div>
                    <Loading title="正在加载..." show={this.state.loading}/>
                </div>
            </div>
        );
    }
}

export default Album;