import { createClient } from 'contentful'

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    host: 'preview.contentful.com'
  })

  const getWork = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'project',
        select: 'fields'
      })

      const sanitizedEntries = entries.items.map(({ fields }) => {
        const { projectName, projectType, titleCard } = fields

        return {
          ...fields,
          name: projectName,
          type: projectType,
          card: titleCard
        }
      })

      return sanitizedEntries
    } catch (err) {
      console.log(`Error fetching work: ${err}`)
    }
  }

  const getStyle = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'styles',
        select: 'fields'
      })

      const sanitizedEntries = entries.items.map(({ fields }) => {
        const { id, } = fields

        return {
          ...fields
        }
      })

      return sanitizedEntries
    } catch (err) {
      console.log(`Error fetching work: ${err}`)
    }
  }

  const getAbout = async () => {
    try {
      const { items } = await client.getEntries({
        content_type: 'about',
        select: 'fields'
      })

      if (items.length) {
        const { fields } = items[0]
        return fields
      }

      return {}
    } catch (err) {
      console.log(`Error fetching about: ${err}`)
    }
  }

  return {
    client,
    getWork,
    getAbout,
    getStyle
  }
}

export default useContentful