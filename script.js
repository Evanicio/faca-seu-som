
// Evento de click na tela inteira.
document.body.addEventListener('keyup' , (event) => {
    playSoud(event.code.toLowerCase());
});

// verificar se tem algum audio na tela.
document.querySelector('.composer button').addEventListener('click' , () => {
    
    // digite sua letra
    let song = document.querySelector('#input').value;

    // Verificar sons

    if(song !== '') {
        let songArray = song.split('');

        playComposition(songArray);
    }

});


function playSoud (sound) {
    // armazenando o elemento
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    // Verificar se achou minha sounds.

    if(audioElement){
        // volta ao começo do audio zerando

        // currentTime especifica o tempo de reprodução atual em segundos.
        audioElement.currentTime = 0;

        // Vericado se achou da um play.
        audioElement.play()
    };

    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(() => {

            // buscando a class especifica do css .key.active
            keyElement.classList.remove('active');
        }, 300); // Espere por 300 milisegundo

    };
}  

function playComposition (songArray) {

    // resetando o tempo para cada teclas apertada.
    let wait = 0;

    // loop for temporizado.
    for(let songItem of songArray) {

        // centando o tempo com set time out para cada key ser rodado em 250 milisegundos cada.
        setTimeout(() => {
            playSoud(`key${songItem}`)
        }, wait);

        // centando o tempo para cada uma das teclas e cetando 250 em cada uma.
        wait += 250
    }

};