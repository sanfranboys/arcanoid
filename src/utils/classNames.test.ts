import classNames from './classNames'

describe('checking classNames', () => {
  it('not fall with empty case', () => {
    const input = ''
    const output = ''
    expect(classNames(input)).toEqual(output)
  })

  it('array concatination', () => {
    const input = ['one', 'two', 'three']
    const output = 'one two three'
    expect(classNames(input)).toEqual(output)
  })

  it('object class adding', () => {
    const input = { one: true, two: true, three: false }
    const output = 'one two'
    expect(classNames(input)).toEqual(output)
  })
})
