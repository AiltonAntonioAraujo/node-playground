import db from "./environment/database.js"

async function getAllCities () {
    let response;
    try{
        response = await db.query(
            `SELECT * FROM cidade`,
        );
        if(response.rows.length === 0) throw 'The cities table is empty. Please insert data';
    }catch(e){
        console.error('Cannot get cities from database', e);
    }
    return response.rows;
}

export default {
    getAllCities
}