const request = require('supertest')
const app = require('../../src/app')
const connec = require('../../src/database/connec')

describe('ONG', ()=>{
  beforeEach(async ()=>{
    await connec.migrate.rollback()
    await connec.migrate.latest()
  })

  afterAll(async ()=>{
    await connec.destroy()
  })

  it('shold be able to create new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD2",
	      email: "apad@mail.com",
	      whatsapp: "85676776767",
	      city: "Fortaleza",
	      uf: "CE"
      })
    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)    
  })
})