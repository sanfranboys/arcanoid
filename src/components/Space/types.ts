import { SpaceProps as AntdSpaceProps } from 'antd/lib/space'

export type SpaceProps = {
  full?: boolean,
  between?: boolean
} & AntdSpaceProps;
