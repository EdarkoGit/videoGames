const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATE,
    },
    rating: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    img: {
      type: DataTypes.STRING,
      defaultValue:'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
    },
    db: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
