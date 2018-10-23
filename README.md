# wavesurfer-test

### How to Enable the Fallback</h3>
     
*wavesurfer.js* will automatically fallback to HTML5 Media if Web Audio is not supported.  
However, you can choose to use audio element manually.  
Simply set the `backend` option to `MediaElement`.
              
```javascript                
    var wavesurfer = WaveSurfer.create({
        container: document.querySelector('#wave'),
        backend: 'MediaElement'
    });
```

### Rendering Peaks

```shell
    $ brew install audiowaveform
    $ audiowaveform -i 67f00fe3-0f29-45b9-8a9b-1b3fce454264.mp3 \
      -o b7107ac14a30ea698f830ba96109861ffe2c93401ecfff347db8548844325f14.json \
      --pixels-per-second 1 -b 8
```      

### Pre-rendered Peaks

If you have pre-rendered peaks (on your server), you can pass them into the `load` function.     
This is optional–if you don't provide any peaks, *wavesurfer.js* will first draw a    
thin line instead of a waveform, then attempt to download the audio file via Ajax and  
decode it with Web Audio if available.

        wavesurfer.load('./67f00fe3-0f29-45b9-8a9b-1b3fce454264.mp3');

LICENSE: [BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)
