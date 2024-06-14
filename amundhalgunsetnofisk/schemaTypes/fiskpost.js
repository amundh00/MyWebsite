// schemas/post.js
export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required().min(5).max(100)
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required().min(20).max(500)
      },
      {
        name: 'length',
        title: 'Lengde på fisken:',
        type: 'number',
        description: 'Number to display on the website'
      },
      {
        name: 'weight',
        title: 'Vekten på fisken:',
        type: 'number',
        description: 'Vekten på fisken'
      },
      {
        name: 'author',
        title: 'author',
        type: 'string',
        validation: Rule => Rule.required().min(5).max(100)
      },
      {
        name: 'picture',
        title: 'Picture',
        type: 'image',
        options: {
          hotspot: true // Enables image hotspotting
        },
        validation: Rule => Rule.required()
      }
    ],
    preview: {
      select: {
        title: 'title',
        authorName: 'author.name',
        media: 'picture'
      },
      prepare({ title, authorName, media }) {
        return {
          title,
          subtitle: `by ${authorName}`,
          media
        }
      }
    }
  }
  