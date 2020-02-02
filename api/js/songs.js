function playSong(url) {
    console.log(url)
    var audio = new Audio(url)
    audio.play();
}


var data = document.getElementById('cards');

var request = new XMLHttpRequest();
request.open('GET', 'https://demo3654873.mockable.io/songs', true)
request.onload = function () {
    console.log(this.response)
    var songs = JSON.parse(this.response);
    
    songs.forEach(song => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const songname = document.createElement('div')
        songname.textContent = 'Song Name : ' + song.songName

        const artist = document.createElement('div')
        artist.textContent = 'Artist : ' + song.artist

        const year = document.createElement('div')
        year.textContent = 'year : ' + song.year

        const play = document.createElement('input')
        play.setAttribute('type', 'button')
        play.setAttribute('value', 'Play')
        play.setAttribute('class', 'play-song')
        play.addEventListener('click', function () {
            playSong(`../mp3/${song.songName}.mp3`)
        })

        card.appendChild(songname)
        card.appendChild(artist)
        card.appendChild(year)
        card.appendChild(play)
        data.appendChild(card)


    })
}

request.send()
