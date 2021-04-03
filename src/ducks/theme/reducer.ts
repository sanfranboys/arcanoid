import { SET_STATUS, THEME_CHANGE } from "./actionTypes"
import { ActionTheme, ThemeState } from "./types"


export const initialState: ThemeState = {
  theme: 'default-theme',
  loading: false
}

const reducer = (state = initialState, action: ActionTheme) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        theme: action.payload,
      }
    case SET_STATUS:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

export default reducer
