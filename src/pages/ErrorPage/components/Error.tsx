import React, { FC } from 'react'
import { Image, Centered } from '@/elements/'
import { ErrorProps } from '../types'

import './Error.scss'
import { fallbackImage } from '../../../constants'

const Error: FC<ErrorProps> = ({ description, hasLink, errorType }) => (
  <div className="error">
    <Centered>
      <p className="error__status">{errorType}</p>
      <p className="error__description">{description}</p>

      <Image
        className="error__image"
        src="assets/images/error.jpg"
        preview={false}
        fallback={fallbackImage}
        onError={(event: Event) => {
          console.error('failure while image loading here:', event?.target)
        }}
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
