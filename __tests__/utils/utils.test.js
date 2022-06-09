import Utils from '../../src/utils'

describe('Utility function tests', () => {
  it('should return string formated date', () => {
    expect(Utils.formatDate(new Date(2020,2,21))).toEqual('2020-2-21')
  })
  it('should return true for letters', () => {
    expect(Utils.validateLetters("dsdsdds")).toEqual(true)
  })

  it('should return false for included character rather than letters', () => {
    expect(Utils.validateLetters("dsdsdds22")).toEqual(false)
  })
  it('should return true for valid email', () => {
    expect(Utils.validateEmail("buwaneka@gmail.com")).toEqual(true)
  })
  it('should return false for invalid email', () => {
    expect(Utils.validateEmail("buwanek33")).toEqual(false)
  })
  it('should return pokemon Id with forward slash', () => {
    expect(Utils.getPokemonIdFromURL("https://pokeapi.co/api/v2/pokemon/1/")).toEqual("1")
  })
  it('should return pokemon Id', () => {
    expect(Utils.getPokemonIdFromURL("https://pokeapi.co/api/v2/pokemon/1")).toEqual("1")
  })
  
})
