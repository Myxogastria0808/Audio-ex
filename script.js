var wavesurfer = WaveSurfer.create({
  container: '#waveform',
    // waveColor: '#137a7f',
    // progressColor: 'purple',
    waveColor: [ // an array of colors, to be applied as gradient color stops to the waveform.
    "red",
    "green",
    "purple",
    "yellow",
    "rgba(0,255,255,.5)",
  ],
    progressColor: [ // the gradient fill styles are also available on the progressColor option
    "orange",
    "blue",
    "cyan",
    "black",
    "rgba(0,255,255,.5)",
  ],
    backgroundColor: 'skyblue',
    audioRate: 1,
    splitChannels: false,
    normalize: true,
    autoCenter: true,
    barWidth: 3,
    barGap: 3,
    barRadius: 3,
    cursorColor: 'green',
    cursorWidth: 5,
    forceDecode: true,
    height: 300,
    hideCursor: false,
    minPxPerSec: 1,
    partialRender: true,
    responsive: 0.01,
    plugins: [
      WaveSurfer.cursor.create({
          showTime: true,
          opacity: 1,
          customShowTimeStyle: {
              'background-color': '#000',
              color: '#fff',
              padding: '2px',
              'font-size': '10px'
          }
      }),
      WaveSurfer.markers.create({
        markers: [
            {
                time: 1.0,
                label: "V1",
                color: '#ff990a'
            },
            {
                time: 5.0,
                label: "V2",
                color: '#00ffcc',
                position: 'top'
            }
        ]
      })
  ],
});

wavesurfer.load('./onoko-koka.mp3');

playstop = () => {
  if (wavesurfer.isPlaying()){  
    // wavesurfer.setCurrentTime(0)
    wavesurfer.playPause();
  }
  else{
    wavesurfer.play();
  }
};