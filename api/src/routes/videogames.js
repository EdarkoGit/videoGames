const { Router } = require("express");
const { getRAWG, extractData, validateExists } = require("../metodos/metodos");
const { Videogame } = require("../db");
const { API_KEY } = process.env;
const videogames = Router();

videogames.get("/", (req, res) => res.json("hola"));
videogames.get("/", async (req, res, next) => {
  const { word } = req.query;
  try {
    // devolver img, name, genre, rating
    const dataRAWG = await getRAWG(
      `https://api.rawg.io/api/games?key=${API_KEY}&&page_size=40`
    );
    const dataDb = await Videogame.findAll();
    const data = [...dataRAWG.results, ...dataDb];
    const result = await extractData(data);
    if (word) {
      const arr = [];
      for (let i = 0; i < result.length; i++) {
        if (result[i].name.split("-").includes(word)) arr.push(result[i]);
        if (arr.length === 15) return res.status(200).json(arr);
      }
      if (arr.length === 0) res.status(200).json({ msg: "Not found" });
      else res.status(200).json(arr);
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    next(error);
  }
});
videogames.get("/:idVideogame", async (req, res, next) => {
  const { idVideogame } = req.params;
  try {
    // devolver img, name, genre, rating, description, platforms, genres
    if (idVideogame.length === 36) {
      const searchDb = await Videogame.findByPk(idVideogame); // return un objeto
      console.log("------>", searchDb);
      if (searchDb !== null) {
        const result = await extractData([searchDb], true);
        return res.status(200).json(result[0]);
      }
    }
    const dataRAWG = await getRAWG(
      `https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`
    ); //https://api.rawg.io/api/games/4?key=4575ee8ccb974b7db0add89fe707f077
    const result = await extractData([dataRAWG], true);
    res.status(200).json(result[0]);
  } catch (error) {
    next(error);
  }
});

videogames.post("/", async (req, res, next) => {
  // devolver img, name, genre, rating
  const { name, description, platforms, genres, released, img } = req.body;
  if (await validateExists(name)) {
    return res.json({ msg: "Already exists" });
  }
  try {
    const tupla = await Videogame.create({ name, description, released, img }); //tupla = fila de x modelo
    await tupla.setGenres(genres);
    await tupla.setPlatforms(platforms); // el param hace refencia a lo que llega por body
    res.json({ msg: "Videogame added successfully" });
  } catch (error) {
    next(error);
  }
});
videogames.delete("/:idVideogame", async (req, res, next) => {
  // devolver img, name, genre, rating
  const { idVideogame } = req.params;
  try {
    const tupla = await Videogame.findByPk(idVideogame);
    await tupla.destroy();
    res.json({ msg: "Videogame destroyed" });
  } catch (error) {
    next(error);
  }
});

/* {
  "name":"dofus",
  "description": "lorem ipsum",
  "platforms": [20,25],
  "genres": [4,51],
  "released": "2021-11-27",
  "img":"https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
} */

module.exports = videogames;
