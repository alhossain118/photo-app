const mongoose = require('mongoose');

let albumSchema = new mongoose.Schema({
  name: String
  // property: {type: mongoose.Schema.Types.ObjectId, ref: 'Property'}
})

let Album = mongoose.model('Album', albumSchema)

module.exports = Album;
