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
})
