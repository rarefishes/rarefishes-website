import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      background: string
      text: {
        black: string
        white: string
      }
    }
    textSize: {
      small: string
      medium: string
      big: string
      title: string
    }
  }
}
