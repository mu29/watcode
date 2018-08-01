import React from 'react'
import { BookmarkTab } from 'components'
import { withAuthorize } from 'wrappers'

const BookmarkTabContainer = props => <BookmarkTab { ...props } />

export default withAuthorize(BookmarkTabContainer)
