/* eslint-disable no-shadow */
const checkIfValid = value => value === undefined && value
const extract = value => value
const toColor = (value, theme) => {
  if (typeof value === 'string' && value.includes('.')) {
    const data = value.split('.')
    const color = data[0]
    const level = data[1]
    return theme.palette[color][level]
  }

  return false
}
const toPercent = value => typeof value === 'string' && value
const toRem = (value) => {
  if (typeof value === 'number') {
    return `${value / 16}rem`
  }

  if (typeof value === 'string' && value.includes(' ')) {
    return value.split(' ').map(v => `${v / 16}rem`).join(' ')
  }

  return false
}

const applyRules = (value, ...rules) => ({ theme }) => [checkIfValid, ...rules]
  .map(rule => rule(value, theme))
  .filter(v => v !== false)[0]

export const palette = color => ({ theme }) => toColor(color, theme)
export const fonts = name => ({ theme }) => theme.fonts && theme.fonts[name]
export const sizes = name => ({ theme }) => theme.sizes && theme.sizes[name]
export const filteredBy = (filter, extractor) => props => (props[filter] ? extractor(props) : 'undefined')

export const width = ({ block, width }) => (block ? '100%' : applyRules(width, toPercent, toRem))
export const height = ({ height }) => applyRules(height, toPercent, toRem)
export const padding = ({ padding }) => applyRules(padding, toRem)
export const fontFamily = ({ font }) => (font ? fonts(font) : fonts('myeongjo'))
export const fontSize = ({ fontSize }) => applyRules(fontSize, toRem)
export const fontWeight = ({ fontWeight }) => applyRules(fontWeight, extract)
export const color = ({ color }) => applyRules(color, toColor)
export const primaryColor = ({ primaryColor }) => applyRules(primaryColor, toColor)
export const backgroundColor = ({ backgroundColor }) => applyRules(backgroundColor, toColor)
export const border = ({ border }) => ({ theme }) => (border ? `1px solid ${toColor(border, theme)}` : 'none')
export const borderColor = ({ borderColor }) => applyRules(borderColor, toColor)
export const borderRadius = ({ borderRadius }) => applyRules(borderRadius, toRem)
