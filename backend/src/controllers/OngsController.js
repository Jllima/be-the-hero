const connect = require('../database/connec')
const crypto = require('crypto')

module.exports = {
  async index(req, res){
    const ongs = await connect('ongs').select('*')
  
    res.json(ongs);
  },

  async create(req, res){
    const { name, email, whatsapp, city, uf } = req.body
  
    const id = crypto.randomBytes(4).toString('HEX')
  
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