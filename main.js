'use strict';

// Create an instance
var wavesurfer, wavesurfer2;

// Init & load audio file
document.addEventListener('DOMContentLoaded', function() {
    // Init
    wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        waveColor: '#A8DBA8',
        backend: 'WebAudio',
        normalize: true,
        minPxPerSec   : 1,
        progressColor: 'hsla(200, 100%, 30%, 0.5)',
        cursorColor: '#fff',
        // This parameter makes the waveform look like SoundCloud's player
        barWidth: 2,
        barHeight     : 3,
    });

    // Init
    wavesurfer2 = WaveSurfer.create({
        container: document.querySelector('#waveform2'),
        waveColor: '#A8DBA8',
        backend: 'WebAudio',
        // normalize: true,
        minPxPerSec   : 1,
        progressColor: 'hsla(200, 100%, 30%, 0.5)',
        cursorColor: '#fff',
        // This parameter makes the waveform look like SoundCloud's player
        barWidth: 2,
        // barHeight     : 3,
    });

    // Load audio from URL
    wavesurfer.load('https://raw.githubusercontent.com/katspaugh/wavesurfer.js/master/example/media/demo.wav');
    wavesurfer2.load('https://raw.githubusercontent.com/katspaugh/wavesurfer.js/master/example/media/demo.wav');

    document
        .querySelector('[data-action="play"]')
        .addEventListener('click', wavesurfer.playPause.bind(wavesurfer));

    document
        .querySelector('[data-action="play2"]')
        .addEventListener('click', wavesurfer2.playPause.bind(wavesurfer2));

    document
        .querySelector('[data-action="peaks"]')
        .addEventListener('click', function() {
            $.getJSON('./b7107ac14a30ea698f830ba96109861ffe2c93401ecfff347db8548844325f14.json', function(data){
                var peaks = data["data"],
                    newPeaks = [];
                var maxPeak = WaveSurfer.util.max(peaks);
                // var maxPeak = 128;
                peaks.forEach(function(peak){
                   if(peak >= 0)
                   newPeaks.push(peak/maxPeak);
                   else
                   newPeaks.push(-1*(peak/maxPeak));
                });
                wavesurfer.load('./67f00fe3-0f29-45b9-8a9b-1b3fce454264.mp3');
                wavesurfer2.load('./67f00fe3-0f29-45b9-8a9b-1b3fce454264.mp3', newPeaks);
                document.body.scrollTop = 0;
            });
        });
});
