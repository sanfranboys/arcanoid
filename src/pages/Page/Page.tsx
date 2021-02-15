import React, { FC } from 'react'
import { PageProps } from './type'

import './Page.scss'

const Page: FC<PageProps> = ({ title, children }) => (
  <section className="page">
    <h1 className="page__title">{title}</h1>
    {children}
  </section>
)

export default Page
