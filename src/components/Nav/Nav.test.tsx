import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { create } from 'react-test-renderer'
import Nav from './Nav'

describe('Nav testing', () => {
  it('Button renders correctly', () => {
    const tree = create(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
