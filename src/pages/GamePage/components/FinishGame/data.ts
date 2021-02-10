import { FinishGameDataProps } from './types'

const FinishGameData: FinishGameDataProps = {
  description: 'Отлично сыграно!',
  scoreText: 'Твой счет:',
  score: '268',
  image: 'assets/images/notbad.jpg',
  leaderbordLink: {
    label: 'Посмотреть на лидеров',
    href: '/leaderboard',
  },
  restartLink: {
    label: 'Сыграть снова',
    href: '/game/proccess',
  },
}

export default FinishGameData
