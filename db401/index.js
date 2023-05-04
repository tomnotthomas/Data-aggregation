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

  const res = await Theater.aggregate([
    //  { $group: { _id: '$location.address.state', theaters: { $push: '$theaterId' }, numberOfTheaters: { $sum: 1 } } },
    // { $sort: { numberOfTheaters: -1 } },
    { $sortByCount: '$location.address.state' },
  ])

  console.log(res)
}

main()
