import React from 'react'
import { Header, GenericTemplate } from 'components'
import { BookmarkTab } from 'containers'

const BookmarkPage = () => (
  <GenericTemplate header={ <Header location="/bookmarks" /> }>
    <BookmarkTab />
  </GenericTemplate>
)

export default BookmarkPage
