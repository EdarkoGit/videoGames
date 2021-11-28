const { Router } = require('express');
const { getRAWG, pushModel } = require('../metodos/metodos');
const {Platform} = require('../db')
const {API_KEY} = process.env;
const platforms = Router();

platforms.get('/',async (req,res, next)=>{
  try {
    const data= await getRAWG(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
    res.status(200).json(await pushModel(Platform, data.results))
  } catch (error) {
    next(error)
  }
})

module.exports = platforms;