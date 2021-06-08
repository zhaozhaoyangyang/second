export default {
    currentSong(state) {
        if (state.currentIndex >= 0 && state.currentIndex < state.sequencePlayList.length) {
            return state.sequencePlayList[state.currentIndex]
        } else {
            return {
                
            }
        }
 }
};
