'use strict';

const express2 = require('express')
const express = require('express');
let Album = require('../models/album')
let router = express.Router();


router.route('/')
  .get((req,res) => {
    Album.find({})
      // .populate('property')
      .exec((err, albums) => {
        res.status(err ? 400 : 200).send(err || albums);
      })
  })

  .post((req,res) => {
    Album.create(req.body, (err,album) => {
      res.status(err ? 400 : 200).send(err || album);
    })
  })

router.route('/:id')
    .put((req, res) => {
      console.log(req.params)
      Album.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, album) => {
        res.status(err ? 400 : 200).send(err || album);
      });
    })

  .delete((req,res) => {
    Album.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);
    });
  })

module.exports = router;
