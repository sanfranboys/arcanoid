import React from 'react'
import Space from '../../../../components/Space'
import Panel from '../../../../components/Panel'
import Description from '../../../../components/Description'
import TextArea from '../../../../components/TextArea'
import BtnString from '../../../../components/BtnString'

const Discussion = () => (
  <Space direction="vertical" full size="large">
    <Panel head="Впечатления от игры">
      <Space size={20} direction="vertical" full>
        <Description
          title="Графика 3 бала Оптимизация 7 баллов на 1070ти на высоких идет 50+
              Звуки норм Ожидал большего.."
        />

        <Description
          title="Графика 3 бала Оптимизация 7 баллов на 1070ти на высоких идет 50+
              Звуки норм Ожидал большего.."
        />

        <Description title="косяки есть но игра все равно нормальная" />

        <Description
          title="Клавиши движения персонажа WASD не могу переназначить на клавиши
              курсора. Кто нибудь сталкивался с этой проблемой? Если да, то
              удалось ли решить?"
        />
      </Space>
    </Panel>

    <Panel>
      <Space direction="vertical" full size="large">
        <TextArea rows={7} />

        <BtnString>Отправить</BtnString>
      </Space>
    </Panel>
  </Space>
)

export default Discussion
