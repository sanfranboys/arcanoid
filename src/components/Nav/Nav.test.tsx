import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import * as renderer from 'react-test-renderer'
import Nav from './Nav'

describe('Nav testing', () => {
  it('Button renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
