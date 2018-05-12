import { schema } from 'normalizr'

export const artworkSchema = new schema.Entity('artworks')
export const postSchema = new schema.Entity('posts')
export const userSchema = new schema.Entity('users')

postSchema.define({
  userAttributes: userSchema,
})
