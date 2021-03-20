import { APP_URL, isProd, OAuthRedirecUrl } from '@/constants'

export const getOAuthURL = (service_id: string): string => {
  if (isProd) {
    return `${OAuthRedirecUrl}${service_id}&redirect_uri=${APP_URL}`
  }

  return `${OAuthRedirecUrl}${service_id}&redirect_uri=https://localhost:5000/`
}
