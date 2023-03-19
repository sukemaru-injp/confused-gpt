import { css } from 'styled-components'

type PointType = 'default' | 'mobile' | 'tabletOnly' | 'spOnly' | 'spSmallOnly' | 'pcOnly'

export const mediaQuery = (content: string, point: PointType = 'default') => {
  let mediaQueryPoint
  switch (point) {
  case 'default':
    mediaQueryPoint = 'screen and (max-width: 1024px)'
    break
  case 'mobile':
    mediaQueryPoint = 'screen and (max-width: 1024px)'
    break
  case 'tabletOnly':
    mediaQueryPoint = 'screen and (max-width: 1024px) and (min-width:600px)'
    break
  case 'spOnly':
    mediaQueryPoint = 'screen and (max-width : 599px)'
    break
  case 'spSmallOnly':
    mediaQueryPoint = 'screen and (max-width : 350px)'
    break
  case 'pcOnly':
    mediaQueryPoint = 'screen and (min-width : 1025px)'
    break
  }
  const mediaQueryCss = css`
    @media ${mediaQueryPoint} {
      ${content}
    }
  `
  return mediaQueryCss
}
