const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Genrate Uniq ID', () =>{
  it('shold generate an unique ID', () => {
    const Id = generateUniqueId()

    expect(Id).toHaveLength(8)
  })
})