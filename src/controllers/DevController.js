const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// o controller geralmente tem 5 funções:
// index, show, store, update, destroy

module.exports = {
    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    },

    async store (req, res) {
        const { github_username, techs, latitude, longitude } = req.body;
        // console.log(github_username);

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const response = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name = login, avatar_url, bio } = response.data;
        
            console.log(name, avatar_url, bio);
        
            const techsArray = parseStringAsArray(techs); //tring remove espaços antes e no final da string
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            // short sintaxe do objeto sem precisar repetir os nomes das variaveis
            dev = await Dev.create({
                name,
                github_username,
                bio,
                avatar_url,
                techs: techsArray,
                location
            }); 
        }
    
        return res.json(dev);
    },

    async update() {

    },

    async destroy() {

    },

    async show() {

    }
}