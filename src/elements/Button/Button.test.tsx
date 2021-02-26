import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { shallow, ShallowWrapper } from 'enzyme'
import Button from './Button'

describe('Button testing', () => {
  let wrapper: ShallowWrapper
  const props = {
    className: 'test-class',
    children: 'Push me',
    onClick: () => {
      /* eslint-disable no-alert */
      alert('Button was clicked')
    },
  }
  beforeEach(() => {
    wrapper = shallow(<Button {...props} />)
  })

  it('Button renders correctly', () => {
    const tree = renderer.create(<Button {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('component event testing', () => {
    it('Button handleClick works', async () => {
      window.alert = jest.fn()
      wrapper.simulate('click')
      expect(window.alert).toHaveBeenCalledWith('Button was clicked')
    })
  })
})
