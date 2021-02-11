import React, { ChangeEvent, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { ContentBox, Row, Col, Button, Image } from '@/elements/'
import { useForm } from 'react-hook-form'
import { Form } from 'antd'
import { Input } from '@/components/'
import { StartGameFormData, StartGameFormDataKey } from './types'
import StartData from './data'

const StartGame = () => {
  const history = useHistory()
  const {
    description,
    inputLabel,
    buttonLabel,
    titleImage,
    dogImage,
    dogText,
  } = StartData
  const {
    handleSubmit,
    errors,
    register,
    setValue,
  } = useForm<StartGameFormData>()

  const onSubmit = () => {
    history.push('/game/proccess')
  }

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget
      setValue(name as StartGameFormDataKey, value)
    },
    [setValue]
  )

  return (
    <div className="start-game">
      <ContentBox>
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <Image className="start-game__image" src={titleImage} />
          </Col>
          <Col span={24}>{description}</Col>
        </Row>
        <Form onFinish={handleSubmit(onSubmit)}>
          <Row gutter={[0, 30]}>
            <Col span={24}>
              <Image className="start-game__image" src={dogImage} />
              {dogText}
            </Col>
            <Col span={24}>
              <Input
                label={inputLabel}
                name="nickname"
                id="nickname"
                onChange={handleChange}
                register={register({ name: 'nickname' }, { required: true })}
                error={errors.nickname?.type}
              />
            </Col>
            <Col span={24}>
              <Button type="submit">{buttonLabel}</Button>
            </Col>
          </Row>
        </Form>
      </ContentBox>
    </div>
  )
}

export default StartGame
