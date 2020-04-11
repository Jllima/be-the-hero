const connect = require('../database/connec')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
  async index(req, res){
    const ongs = await connect('ongs').select('*')
  
    res.json(ongs);
  },

  async create(req, res){
    const { name, email, whatsapp, city, uf } = req.body
  
    const id = generateUniqueId()
  
    await connect('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
    
    return res.json({ id });
  }
}