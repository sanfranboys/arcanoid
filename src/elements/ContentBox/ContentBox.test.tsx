import React from 'react'
import { create } from 'react-test-renderer'
import ContentBox from './ContentBox'

describe('ContentBox testing', () => {
  const props = {
    children: 'Content here',
  }

  describe('ContentBox snapshot testing', () => {
    it('snapshot matches', async () => {
      const tree = create(<ContentBox {...props} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
