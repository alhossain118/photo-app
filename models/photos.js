'use strict';

const mongoose = require('mongoose');
const moment = require('moment')
let photoSchema = new mongoose.Schema({
  name: {type: String, required:true}
  //album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' },
  //moment: moment().format("MMM Do YY"
})

photoSchema.statics.addAlbum = function(photoId, albumId, cb){
  this.findById(photoId, function(err, photo){
    if(err) return cb(err)
    album.attachAlbum(photo)
  })
}

photoSchema.methods.attachAlbum = function(albumId, cb) {
  this.album = albumId;
  this.save(cb);
};


let Photo = mongoose.model('Photo', photoSchema)

module.exports = Photo;
