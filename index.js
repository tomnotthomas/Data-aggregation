require('./database-connection')

const Comment = require('./models/comment')
const Movie = require('./models/movie')
const Theater = require('./models/theater')

async function main() {
  const topMovies = await Movie.aggregate([
    //QUESTION1:which are the 3 top-rated movies for each genre, based on the average rating?

    /*   { $unwind: '$genres' },
    { $group: { _id: { genre: '$genres', title: '$title' }, rating: { $avg: '$imdb.rating' } } },
    { $sort: { '_id.genre': 1, rating: -1 } },
    {
      $group: {
        _id: '$_id.genre',
        movies: { $push: { title: '$_id.title', rating: '$rating' } },
      },
    },
    { $project: { topThreeMovies: { $slice: ['$movies', 3] } } },
  ])

  console.log(JSON.stringify(topMovies, null, 2))
}*/

    //QUESTION2: Which genre has the highest average ratings?

    { $unwind: '$genres' },
    { $group: { _id: { genre: '$genres' }, rating: { $avg: '$imdb.rating' } } },

    {
      $group: {
        _id: '$_id.genre',
        avgRating: { $avg: '$rating' },
      },
    },
    { $sort: { avgRating: -1 } },
    { $limit: 1 },
  ])
  console.log(topMovies)
}

main()
