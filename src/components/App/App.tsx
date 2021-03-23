import React, { FC } from 'react'
import { Header, Content, Layout } from 'elements'

import { Nav } from 'components'
import './App.scss'
import { RootRoutes } from 'routes'

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
