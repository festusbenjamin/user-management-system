const db = require('../database/connection');

//Get All Users
exports.get = (req, res) => {
    db.query(`SELECT * FROM users`, (err,result) => {
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
};

//Create a User 
exports.post = (req,res) => {
    const name = req.body.name
    const email = req.body.email
    const contact = req.body.contact
    db.query("INSERT INTO users (name, email, contact) VALUES (?,?,?)",
    [name,email,contact],(err, result) => {
        if(err){
            console.log(err);
        }else {
          res.send("Inserted successfully");
        }
    })
}

//Delete a User
exports.delete = (req,res) => {
    const id = req.params.id;
    const query = `DELETE FROM users WHERE id = ${id}`;
    db.query(query,(err,result) => {
        if(!err){
            res.send(result)
        }else{
            res.send(err);
        }
    })
};

//Get One User
exports.getuser = (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM users WHERE id = ${id}`
    db.query(query, (err, result) => {
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
};

//Update a User
exports.update = (req,res) => {
    const id = req.params.id;
    const { name, email, contact } = req.body;
    const query = `UPDATE users SET name = ?, email = ?, contact = ? WHERE id = ${id}`;
    db.query(query, [name,email,contact], (err, result) => {
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
};
