import { actionCreatorFactory } from '../common'
import { artworkSchema } from '../schemas'

const factory = actionCreatorFactory('Bookmark')

export const createBookmarkActions = factory.async('CREATE_BOOKMARK', { schema: artworkSchema })
export const createBookmarksActions = factory.async('CREATE_BOOKMARKS', { schema: artworkSchema })
export const readBookmarksActions = factory.async('READ_BOOKMARKS', { schema: artworkSchema })
export const deleteBookmarkActions = factory.async('DELETE_BOOKMARK')
export const readRecommendationsActions = factory.async('READ_RECOMMENDATIONS', { schema: artworkSchema })
