var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#137a7f',
    progressColor: 'purple',
    backgroundColor: 'skyblue',
    audioRate: 1,
    splitChannels: false,
    normalize: true,
    autoCenter: true,
    barWidth: 1,
    cursorColor: 'green',
    cursorWidth: 5,
    forceDecode: true,
    height: 300,
    hideCursor: false,
    minPxPerSec: 1,
    partialRender: true,
    responsive: 0.01,
    plugins: [

    ]
});

wavesurfer.load('https://dl.dropbox.com/s/c4i9dvr6g7bjvhr/miku_doremi120.mp3?dl=0');

playstop = () => {
  if (wavesurfer.isPlaying()){  
    // wavesurfer.setCurrentTime(0)
    wavesurfer.playPause();
  }
  else{
    wavesurfer.play();
  }
};