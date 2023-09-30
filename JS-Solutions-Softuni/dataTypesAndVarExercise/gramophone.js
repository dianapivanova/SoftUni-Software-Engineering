function gramophone(band, album, song) {
    let songDuration = (album.length * band.length) * song.length / 2
    let result = songDuration / 2.5

    console.log(`The plate was rotated ${Math.ceil(result)} times.`)
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')