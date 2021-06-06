const knex = require('../../database');

const getUsers = async ()=>{
    const query =await  knex.select().from("usuarios");

    return query;
}

const insertUser= async ({name, lastname, email})=>{

    return await knex
    .insert({ Name: name, LastName: lastname, Email:email })
    .into('usuarios');


};

const updateUser =  ({name,lastname,email,id})=>{

    return  knex('usuarios').where({idUsuarios:id}).update({Name:name, LastName:lastname, Email:email})
};


module.exports={getUsers,insertUser,updateUser};