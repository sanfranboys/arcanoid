import React, { FC } from 'react'
import { Image, Centered } from 'elements/'
import { ErrorProps } from '../types'
import './Error.scss'

const Error: FC<ErrorProps> = ({ description, hasLink, errorType }) => (
  <div className="error">
    <Centered>
      <p className="error__status">{errorType}</p>
      <p className="error__description">{description}</p>

      <Image className="error__image" src="assets/images/error.jpg" />

      {hasLink && (
        <a className="error__link" href="/" title="На главную">
          Перейти на главную
        </a>
      )}
    </Centered>
  </div>
)

export default Error
