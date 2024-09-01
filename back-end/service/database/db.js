// Initialise the database connection

const { Sequelize } = require("sequilize");

const sequilize = new Sequelize({
    dialect: "sqlite",
    storage: "./service/database/db.sqlite",
    logging: false,
})

sequilize.authenticate().then(async () => {
    await sequelize.sync({alter:true}).then(() => {
        console.log("Database synchronized");
      })
      console.log("Connection has been established successfully");
    })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });
    
    module.exports = {
      sequelize,
    };