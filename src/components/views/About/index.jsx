import React, { useState, useEffect } from 'react'
import { Link, Heading, Pane, Paragraph } from 'evergreen-ui'
import useContentful from '../../../hooks/useContentful'
import { SocialLinks }  from '../../partials'

export const About = () => {
  const { getAbout } = useContentful()
  const [about, setAbout] = useState({
    bio: '',
    email: '',
    headline: '',
    photo: {},
    socials: [],
    error: ''
  })

  useEffect(async () => {
    try {
      const response = await getAbout()
      setAbout(response)
    } catch (error) {
      setAbout({ error: error.message })
    }
  }, [])

  useEffect(() => {
  }, [about])

  return (
    <Pane
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      alignContent='center'
    >
      {!about.error
        ? (about.bio ? <AboutInfo about={about} /> : null)
        : 'there was an issue with the server, please try again'}
    </Pane>
  )
}

const AboutInfo = ({ about }) => {
  const { headline: name, email, bio, photo, socials } = about
  const { fields: { file: { url }, title } } = photo

  const mailTo = 'mailto:' + email + '?subject=Wanting To Connect'
  const photoSource = `https:${url}`

  return (
    <>
      <Heading size={900} is='h1' margin='1em'>{name}</Heading>
      <Pane is='img' src={photoSource} alt={title} />
      <Paragraph>{bio}</Paragraph>
      <Link href={mailTo}>Say Hello</Link>
      {socials.map((social, index) => <SocialLinks key={`social-${index}`} info={social} />)}
    </>
  )
}