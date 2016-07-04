'use strict';
const express = require('express');
let Photo = require('../models/photos')
let router = express.Router();

// get to api/superheros
//////////////////////////////////////
router.route('/')
  .get((req,res) => {
    Photo.find({}, (err,properties) => {
      res.status(err ? 400 : 200).send(err || properties)
    })
  })
  .post((req,res) => {
    Photo.create(req.body, (err, photos) => {
      res.status(err ? 400 : 200).send(err || photos)
    })
  });

router.route('/:id')
  .get((req,res) => {
    Photo.findById(req.params.id, (err, photos) => {
      res.status(err ? 400 : 200).send(err || photos)
    })
  })

  .put((req, res) => {
    Photo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, photos) => {
      res.status(err ? 400 : 200).send(err || photos);
    });
  })

  .delete((req,res) => {
    Photo.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err)
    })
  })


module.exports = router;
