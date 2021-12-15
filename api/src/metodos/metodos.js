const axios = require('axios')
const {Videogame} = require('../db')
const {API_KEY} = process.env;

const getRelation= async (element,param)=>{
  let result=[]
  if (param) {
    result= await element.getGenres() //getGenres return array de objtos
  }
  else{
    result= await element.getPlatforms()
  }
  return result.map(e=>e.name)
}

module.exports= {
  getRAWG: async function(url){
    const requestRAWG= await axios.get(url)
    return requestRAWG.data
  },
  pushModel: async function(model,array){
    const flag= await model.findAll()
    if (flag.length===0) {
      const result = array.map(element=>({id:element.id,name: element.slug}))
      return await model.bulkCreate(result)  
    }
    return flag
  },
  extractData: async function(array,full){
    const result=[]
    for (let i = 0; i < array.length; i++) {
      const obj= {
        id: array[i].id,
        img: array[i].background_image || array[i].img,
        name: array[i].slug || array[i].name,
        genres: !array[i].db ? array[i].genres.map(e=>e.slug) : await getRelation(array[i],true),  //getGenres return array de objtos
        rating: array[i].rating
      }
      if (full) {
        obj.description= array[i].description_raw || array[i].description
        obj.released= array[i].released 
        obj.platforms= !array[i].db ? array[i].platforms.map(e=>e.platform.slug) : await getRelation(array[i])
      }
      result.push(obj)      
    }
    return result 
  },
  validateExists: async function(name){ // este meetodo returna true si existe y false si no existe
    const result= await Videogame.findOne({where:{name:name}}) // return null si no encuentra nada
    if (result!==null) {
      return true
    }
    try {
      const data= await this.getRAWG(`https://api.rawg.io/api/games?search=${name}&&key=${API_KEY}`).results // data sería un objeto
      return true
    } catch (error) {
      return false
    }
  }
}