var songs = [
    {
        "songName": "Friends theme",
        "artist": "F.R.I.E.N.D.S",
        "year": "1995"
  },
    {
        "songName": "True friend",
        "artist": "Hannah Montana",
        "year": "2012"
  },
    {
        "songName": "The climb",
        "artist": "Hannah Montana",
        "year": "2009"
  }
]

function playSong(url) {
    console.log(url)
    var audio = new Audio(url)
    audio.play();
}

//function showData() {
//    var data = `<div class="card"><div>Song Name : Thanks!</div><div>Artist : Don Moen</div><div>Year : 1956</div></div><div class="card">
//            <div>Song Name : Thanks!</div>
//            <div>Artist : Don Moen</div>
//            <div>Year : 1956</div>
//        </div>
//        <div class="card">
//            <div>Song Name : Thanks!</div>
//            <div>Artist : Don Moen</div>
//            <div>Year : 1956</div>
//        </div>`
//    return data;
//}

var data = document.getElementById('cards');

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
