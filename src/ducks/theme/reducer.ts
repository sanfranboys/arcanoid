import { THEME_CHANGE } from "./actionTypes"
import { ActionTheme, ThemeState } from "./types"


export const initialState: ThemeState = {
  theme: 'default-theme',
}

const reducer = (state = initialState, action:ActionTheme) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state
  }
}

export default reducer
