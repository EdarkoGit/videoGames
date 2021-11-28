const { Router } = require('express');
const { getRAWG, pushModel } = require('../metodos/metodos');
const {Genre}= require('../db')
const {API_KEY} = process.env;
const genre = Router();

genre.get('/',async (req,res, next)=>{
  try {
    const data= await getRAWG(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    res.status(200).json(await pushModel(Genre,data.results))
  } catch (error) {
    next(error)
  }
})

module.exports = genre;