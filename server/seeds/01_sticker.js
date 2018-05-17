const stickers = require('../stickers')

exports.seed = function(knex, Promise) {
  return knex('sticker').del()
    .then(() => {
      return knex('sticker').insert(stickers)
    })
}
