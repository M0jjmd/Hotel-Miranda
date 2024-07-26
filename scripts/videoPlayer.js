let player;
let playButton = document.getElementById('play-button');
let iframe = document.getElementById('video-iframe');

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-iframe', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

const onPlayerReady = (event) => {
    checkPlayerState();
}

const onPlayerStateChange = (event) => {
    checkPlayerState();
}

const checkPlayerState = () => {
    if (player.getPlayerState() === YT.PlayerState.PAUSED || player.getPlayerState() === YT.PlayerState.ENDED) {
        playButton.classList.remove('hidden');
    } else {
        playButton.classList.add('hidden');
    }
}

playButton.addEventListener('click', () => {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
});