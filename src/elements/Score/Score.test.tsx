import React from 'react'
import { create } from 'react-test-renderer'
import Score from './Score'

describe('Score testing', () => {
  const props = {
    small: true,
    children: 'Score here',
  }

  describe('Score snapshot testing', () => {
    it('snapshot matches', () => {
      const tree = create(<Score {...props} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
