const connection = require('../config/database')
const {getAllUsers, updateUserById} = require('../sevices/CRUDSevices');


const getHomepage = async (req,res) =>{
  let results = await getAllUsers();
  return res.render('home.ejs',{listUsers: results})
}
const getABC = (req,res) =>{
res.render('example.ejs')
}
const postCreateUser = async (req,res)=>{
  console.log(req.body);
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
console.log(email,name,city);

//   connection.query(
//     ` INSERT INTO 
//     Users (email,name,city)
//     VALUES (?,?,?) `,
//     [email,name,city],
//     function(err,results){
//     console.log(results);
//       res.send('created a new user')
  
// }
//   );

   let [results,fields] = await connection.query(
    'INSERT INTO Users (email,name,city) VALUES (?,?,?)',[email,name,city],
  );

   res.send('success')
// connection.query(
//   'select * from Users',
//   function(err,results,fields){
//     console.log(">>results = ",results);
//   }
// )
// const [results,fields] = await connection.query('select * form Users');
// console.log(results);


}
const getCreatePage = (req,res) => {
  res.render('create.ejs')
}
const getUpdatePage = async (req,res) => {
  const userId = req.params.id;

  let [results,fields] = await connection.query('select * from Users where id = ?', [userId]);

  let user = results && results.length > 0 ? results[0] : {};
  res.render('edit.ejs', {userEdit: user})
}

const postUpdateUser = async (req,res)=>{

  let userId = req.body.userId;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
console.log(email,name,city,userId);

   await updateUserById(email,name,city,userId);

  //  res.send('update success')
  res.redirect('/');

}
module.exports = {
    getHomepage,
    getABC,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
}