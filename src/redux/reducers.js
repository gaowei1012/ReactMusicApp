import {combineReducers} from 'redux';
import * as ActiveTypes from './actionTypes';

// reducer 就是一个纯函数， 接受就得state和active， 返回新的state和active

// 存储数据的数据状态
const initialState = {
    showStatus: false, // 显示状态
    song: {}, // 当前歌曲
    songs: [] // 歌曲列表
};


// 显示或隐藏播放状态
function showStatus(showStatus = initialState.showStatus, active) {
    switch (active.type) {
        case ActiveTypes.SHOW_PLAYER:
            return active.showStatus;
        default:
            return song;  
    }
}

// 修改当前歌曲
function song(song = initialState.song, active) {
    switch (active.type) {
        case ActiveTypes.CHANGE_SONG:
            return active.song;
        default:
            return song;    
    }
}

// 添加或删除歌曲
function songs(songs = initialState.songs, active) {
    switch (active.type) {
        case ActiveTypes.SET_SONGS:
            return songs;
        case ActiveTypes.REMOVE_SONG_FROM_LIST:
            return songs.filter(song => song.id !== active.id);
        default:
            return songs;        
    }
}

const reducer = combineReducers({
    showStatus,
    song,
    songs
});

export default reducer