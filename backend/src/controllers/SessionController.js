const connect = require('../database/connec')

module.exports = {
  async create(req, res){
    const { id } = req.body 
    
    const ong = await connect('ongs')
      .select('name')
      .where('id', id)
      .first()
    
    if(!ong){
      return res.status(400).json({error: 'Ong not found'});
    }

    return res.json(ong);
  }
}