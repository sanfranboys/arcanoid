import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header, Content, Layout } from 'elements'

import { Nav } from 'components'
import './App.scss'
import { RootRoutes } from 'routes'
import { withAuthCheck } from 'hocs'

const App: FC = () => (
  <BrowserRouter>
    <Layout>
      <Header>
        <Nav />
      </Header>
      <Content>
        <RootRoutes />
      </Content>
    </Layout>
  </BrowserRouter>
)

export default withAuthCheck(App)
