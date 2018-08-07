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
        <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css" rel="stylesheet" type="text/css" />
        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossOrigin="anonymous" />
        { styles }
      </head>
      <body { ...bodyAttrs }>
        <main id="app">{ children }</main>
        <script dangerouslySetInnerHTML={{ __html: state }} />
        <script src="/vendors~client.js" />
        <script src="/client.js" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-122647010-1" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-122647010-1');
          `,
          }}
        />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-6988311040138762",
              enable_page_level_ads: true
            });
          `,
          }}
        />
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
