require('./database-connection')

const Comment = require('./models/comment')
const Movie = require('./models/movie')
const Theater = require('./models/theater')

async function main() {
  // console.log(
  //   await Movie.find({ 'imdb.rating': { $gt: 1 } })
  //     .sort('-imdb.rating')
  //     .limit(30)
  // )

  //const res = await Movie.aggregate([
  //  { $match: { 'imdb.rating': { $gt: 1 } } },
  //  { $sort: { 'imdb.rating': -1 } },
  //  { $limit: 30 },
  //])

  /*const theaters = await Theater.aggregate([
    {
      $group: {
        _id: '$location.address.state',
        theaters: { $push: '$theaterId' },
        numberOfTheaters: { $sum: 1 },
      },
    },
    { $set: { state: '$_id' } },
    { $sort: { numberOfTheaters: -1 } },
    {
      $group: {
        _id: 1,
        mostCrowdedState: { $first: '$state' },
        mostCrowdedCount: { $first: '$numberOfTheaters' },
        leastCrowdedState: { $last: '$state' },
        leastCrowdedCount: { $last: '$numberOfTheaters' },
      },
    },
    {
      $project: {
        _id: 0,
        mostCrowdedState: {
          name: '$mostCrowdedState',
          count: '$mostCrowdedCount',
        },
        leastCrowdedState: {
          name: '$leastCrowdedState',
          count: '$leastCrowdedCount',
        },
      },
    },
  ])
*/
  const movies = await Movie.aggregate([
    { $group: { _id: { $isoDayOfWeek: '$released' }, count: { $sum: 1 }, avgRating: { $avg: '$imdb.rating' } } },
    { $sort: { avgRating: -1 } },
  ])

  console.log(movies)
}

main()
