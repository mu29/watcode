import React from 'react'

const newlineRegex = /(\r\n|\n\r|\r|\n)/g

export default function (str) {
  if (typeof str === 'number') {
    return str
  } else if (typeof str !== 'string') {
    return ''
  }

  return str.split(newlineRegex).map((line, index) => {
    if (line.match(newlineRegex)) {
      /* eslint-disable react/no-array-index-key */
      return React.createElement('br', { key: index })
    }
    return line
  })
}
