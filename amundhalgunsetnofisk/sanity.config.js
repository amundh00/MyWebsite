import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Amundhalgunset.no/fisk',

  projectId: '4yny62s5',
  dataset: 'fiskelogg',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
