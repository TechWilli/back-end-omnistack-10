const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store (req, res) {
        const { github_username, techs, latitude, longitude } = req.body; // , latitude, longitude
        // console.log(github_username);
    
        const response = await axios.get(`https://api.github.com/users/${github_username}`);
    
        const { name = login, avatar_url, bio } = response.data;
    
        console.log(name, avatar_url, bio);
    
        const techsArray = techs.split(',').map(tech => tech.trim()); //tring remove espaços antes e no final da string
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
    
        // short sintaxe do objeto sem precisar repetir os nomes das variaveis
        const dev = await Dev.create({
            name,
            github_username,
            bio,
            avatar_url,
            techs: techsArray,
            location
        });
    
        return res.json(dev);
    }
}