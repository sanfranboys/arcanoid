import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { create } from 'react-test-renderer'
import StringButton from './StringButton'

describe('StringButton testing', () => {
  let wrapper: ShallowWrapper
  const mockClick = jest.fn()
  const props = {
    children: 'Push me',
    onClick: mockClick,
  }

  beforeEach(() => {
    wrapper = shallow(<StringButton {...props} />)
  })

  describe('StringButton snapshot testing', () => {
    it('snapshot matches', () => {
      const tree = create(<StringButton {...props} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('StringButton event testing', () => {
    it('StringButton handleClick works', () => {
      window.alert = jest.fn()
      wrapper.simulate('click')
      expect(mockClick.mock.calls.length).toEqual(1)
    })

    it('StringButton handleKeyDown works', () => {
      window.alert = jest.fn()
      wrapper.simulate('keydown')
      expect(mockClick.mock.calls.length).toEqual(2)
    })
  })
})
