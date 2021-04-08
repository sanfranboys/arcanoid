import { APP_URL, OAuthRedirecUrl } from '@/constants'

export const getOAuthURL = (service_id: string): string =>
  `${OAuthRedirecUrl}${service_id}&redirect_uri=${APP_URL}`
