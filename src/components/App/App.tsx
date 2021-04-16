import React, { FC } from 'react'
import { Header, Content, Layout } from 'elements'

import { Nav } from 'components'
import { RootRoutes } from 'routes'

import './App.scss'

const App: FC = () => (
  <Layout>
    <Header>
      <Nav />
    </Header>
    <Content>
      <RootRoutes />
    </Content>
  </Layout>
)

export default App
