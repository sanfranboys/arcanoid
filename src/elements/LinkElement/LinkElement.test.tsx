import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { create } from 'react-test-renderer'
import LinkElement from './LinkElement'

describe('LinkElement testing', () => {
  const props = {
    link: '/link',
    className: 'mix-className',
    children: 'Link text here',
  }

  describe('LinkElement snapshot testing', () => {
    it('snapshot matches', async () => {
      const tree = create(
        <BrowserRouter>
          <LinkElement {...props} />
        </BrowserRouter>
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
