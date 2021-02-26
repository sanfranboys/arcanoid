import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { create } from 'react-test-renderer'
import StringButton from './StringButton'

describe('StringButton testing', () => {
  let wrapper: ShallowWrapper
  const props = {
    children: 'Push me',
    onClick: () => {
      /* eslint-disable no-alert */
      alert('StringButton was clicked')
    },
  }

  beforeEach(() => {
    wrapper = shallow(<StringButton {...props} />)
  })

  describe('StringButton snapshot testing', () => {
    it('snapshot matches', async () => {
      const tree = create(<StringButton {...props} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('StringButton event testing', () => {
    it('StringButton handleClick works', async () => {
      window.alert = jest.fn()
      wrapper.simulate('click')
      expect(window.alert).toHaveBeenCalledWith('StringButton was clicked')
    })

    it('StringButton handleKeyDown works', async () => {
      window.alert = jest.fn()
      wrapper.simulate('keydown')
      expect(window.alert).toHaveBeenCalledWith('StringButton was clicked')
    })
  })
})
