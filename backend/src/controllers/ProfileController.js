const connect = require('../database/connec')

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization

    const incidents = await connect('incidents')
      .select('*')
      .where('ong_id', ong_id)
    
    return res.json(incidents);
  }
}