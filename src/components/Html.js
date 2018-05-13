/* eslint-disable react/no-danger */
import React from 'react'
import { PropTypes } from 'prop-types'
import { Helmet } from 'react-helmet'

const Html = ({ styles, state, children }) => {
  const helmet = Helmet.renderStatic()
  const htmlAttrs = helmet.htmlAttributes.toComponent()
  const bodyAttrs = helmet.bodyAttributes.toComponent()

  return (
    <html lang="ko" { ...htmlAttrs }>
      <head>
        { helmet.title.toComponent() }
        { helmet.meta.toComponent() }
        { helmet.link.toComponent() }
        <meta charSet="utf8" />
        <link href="/style.css" rel="stylesheet" type="text/css" />
        <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css" rel="stylesheet" type="text/css" />
        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossOrigin="anonymous" />
        { styles }
      </head>
      <body { ...bodyAttrs }>
        <main id="app">{ children }</main>
        <script dangerouslySetInnerHTML={{ __html: state }} />
        <script src="/client.js" />
      </body>
    </html>
  )
}

Html.propTypes = {
  styles: PropTypes.node.isRequired,
  state: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Html
