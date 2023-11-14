function movies(array) {
    let movies = []

    for (let command of array) {
        if (command.includes('addMovie')) {
            let movie = command.split('addMovie ')[1]
            let movieObj = { name: movie }
            movies.push(movieObj)
        } else if (command.includes('directedBy')) {
            let [movie, director] = command.split(' directedBy ')
            let movieName = movies.find(movieName => movieName.name == movie)
            if (movieName) {
                movieName.director = director
            }
        } else if (command.includes(' onDate ')) {
            let [movie, date] = command.split(' onDate ')
            let movieName = movies.find(movieName => movieName.name == movie)
            if (movieName) {
                movieName.date = date
            }
        }

    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }
    }

}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])