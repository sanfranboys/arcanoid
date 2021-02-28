import * as React from 'react'
import { create } from 'react-test-renderer'
import { shallow, ShallowWrapper } from 'enzyme'
import Button from './Button'

describe('Button testing', () => {
  let wrapper: ShallowWrapper
  const mockClick = jest.fn()
  const props = {
    className: 'test-class',
    children: 'Push me',
    onClick: mockClick,
  }
  beforeEach(() => {
    wrapper = shallow(<Button {...props} />)
  })

  it('Button renders correctly', () => {
    const tree = create(<Button {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('component event testing', () => {
    it('Button handleClick works', () => {
      wrapper.simulate('click')
      expect(mockClick.mock.calls.length).toEqual(1)
    })
  })
})
