const Sequelize = require('sequelize');

const sequelize = new Sequelize('clase4', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class Cars extends Sequelize.Model {}
Cars.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });


/*crea usuario*/
sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Maria',
    lastName: 'Perez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'user'
});
 
sequelize.sync({alter: true}).then(() => User.destroy({
  where: {
    id: 1
  }
}).then(() => {
  console.log("Elimine Registro");
}));  

