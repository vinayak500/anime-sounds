const sounds = ['dattebayo','mangekyou-sharingan' , 'luffy-imitate-chopper' ,  'luffy-smile' , 'naruto-confused', 'the-tale-of-naruto-uzumaki','pain-theme'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();

        document.getElementById(sound).play();
        console.log(sound);
    });

    document.getElementById('buttons').appendChild(btn);
});


function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause()
        song.currentTime = 0;
    })
}