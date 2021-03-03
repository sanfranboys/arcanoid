import React, { ButtonHTMLAttributes, FC, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import './Return.scss'

const Return: FC<ButtonHTMLAttributes<HTMLButtonElement>> = () => {
  const history = useHistory()
  const goBack = useCallback(() => history.goBack(), [history])
  return (
    <button type="button" onClick={goBack} className="return-button">
      <img
        src="/assets/images/arrow-return.svg"
        alt="arrow-return"
        className="arrow-return"
      />
    </button>
  )
}

export default Return
