import { actionCreatorFactory } from '../common'
import { bookmarkSchema } from '../schemas'

const factory = actionCreatorFactory('Bookmark')

export const createBookmarkActions = factory.async('CREATE_BOOKMARK', { schema: bookmarkSchema })
export const readBookmarksActions = factory.async('READ_BOOKMARKS', { schema: bookmarkSchema })
export const deleteBookmarkActions = factory.async('DELETE_BOOKMARK')
