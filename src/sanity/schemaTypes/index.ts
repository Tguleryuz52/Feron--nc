import { type SchemaTypeDefinition } from 'sanity'
import journalPost from './journalPost'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [journalPost, siteSettings],
}
