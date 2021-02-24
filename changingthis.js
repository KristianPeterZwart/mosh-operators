
function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'Kris' }, 1, 2);
playVideo.apply({ name: 'Kris' }, [1, 2]);
playVideo.bind({ name: 'Kris' } })();

playVideo();