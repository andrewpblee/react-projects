import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        {title: 'A', duration: '4:05'},
        {title: 'B', duration: '2:30'},
        {title: 'C', duration: '2:37'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
} 

export default combineReducers({
    songs: songsReducer, 
    selected: selectedSongReducer

})