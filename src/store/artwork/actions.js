import { actionCreatorFactory } from '../common'
import { artworkSchema } from '../schemas'

const factory = actionCreatorFactory('Artwork')

export const readArtworkActions = factory.async('READ_ARTWORK', { schema: artworkSchema })
export const readArtworksActions = factory.async('READ_ARTWORKS', { schema: artworkSchema })
export const readPopularArtworksActions = factory.async('READ_POPULAR_ARTWORKS', { schema: artworkSchema })
