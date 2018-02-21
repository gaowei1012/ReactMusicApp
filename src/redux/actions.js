import * as ActiveTypes from './actionTypes';


export function showPlayer(showStatus) {
    return {type: ActiveTypes.SHOW_PLAYER, showStatus};
};

export function changeSong(song) {
    return {type: ActiveTypes.CHANGE_SONG, song};
};

export function removeSong(id) {
    return {type: ActiveTypes.REMOVE_SONG_FROM_LIST, id};
};

export function setSongs(songs) {
    return {type: ActiveTypes.SET_SONGS, songs};
};
