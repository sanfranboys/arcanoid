import React, { FC } from 'react'
import { ErrorProps } from '../types'
import Image from '../../../components/Image'
import Centered from '../../../components/Centered'

import './Error.scss'

const Error: FC<ErrorProps> = ({ description, hasLink, errorType }) => (
  <div className="error">
    <Centered>
      <p className="error__status">{errorType}</p>
      <p className="error__description">{description}</p>

      <Image
        className="error__image"
        src="assets/images/error.jpg"
        preview={false}
      />

      {hasLink && (
        <a className="error__link" href="/" title="На главную">
          Перейти на главную
        </a>
      )}
    </Centered>
  </div>
)

export default Error
