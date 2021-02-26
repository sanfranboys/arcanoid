import React from 'react'
import { create } from 'react-test-renderer'
import Description from './Description'

describe('Description testing', () => {
  const props = {
    title: 'test-title',
    noBorder: true,
    children: 'Content here',
  }
  describe('Description snapshot testing', () => {
    it('snapshot matches', async () => {
      const tree = create(<Description {...props} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
