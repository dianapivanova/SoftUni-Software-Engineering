function solve(array) {

    class Song {
        constructor(type, name, time) {
            this.type = type
            this.name = name
            this.time = time
        }
    }

    let songs = []
    let numberOfSongs = array.shift()
    let typeSong = array.pop()

    for (let i = 0; i < array.length; i++) {
        let songData = array[i].split("_")
        let type = songData[0]
        let name = songData[1]
        let time = songData[2]

        let song = new Song(type, name, time)
        songs.push(song)
    }

    if (typeSong === "all") {
        songs.forEach((i) => console.log(i.name))
    } else {
        let filtered = songs.filter((i) => i.type === typeSong)
        filtered.forEach((i) => console.log(i.name))
    }
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)