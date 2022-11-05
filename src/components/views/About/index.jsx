import React, { Suspense, useState, useEffect } from "react";
import { Link, Heading, Pane, Paragraph } from "evergreen-ui";
import { Loader } from "../../base/Loader";
import useContentful from "../../../hooks/useContentful";
import { SocialLinks } from "../../partials";

export const About = () => {
  const { getAbout } = useContentful();
  const [isAboutLoading, setIsAboutLoading] = useState(false);
  const [about, setAbout] = useState({
    bio: "",
    email: "",
    headline: "",
    photo: {},
    socials: [],
    error: "",
  });

  useEffect(async () => {
    setIsAboutLoading(true);
    try {
      const response = await getAbout();
      setAbout(response);
      setIsAboutLoading(false);
    } catch (error) {
      setAbout({ error: error.message });
      setIsAboutLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log(about);
  }, [about]);

  if (isAboutLoading) {
    return <Loader />;
  }

  return (
    <Pane
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      alignContent='center'
      width='79vw'
      margin='auto'
    >
      {!about.error ? (
        about.bio ? (
          <AboutInfo about={about} />
        ) : null
      ) : (
        "there was an issue with the server, please try again"
      )}
    </Pane>
  );
};

const AboutInfo = ({ about }) => {
  const { headline: name, email, bio, photo, socials } = about;
  const {
    fields: {
      file: { url },
      title,
    },
  } = photo;

  const mailTo = "mailto:" + email + "?subject=Wanting To Connect";
  const photoSource = `https:${url}`;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Heading size={900} is="h1" margin="1em">
          {name.toUpperCase()}
        </Heading>

      <Pane is='img' src={photoSource} alt={title} width={'80vw'} paddingTop={'2%'} />
      
      <Heading size={900} is='h1' margin='1em'>{name}</Heading>
      
      <Paragraph 
        paddingBottom='1%'
        textAlign='center'
        >
        {bio}
      </Paragraph>
      
      <Link 
        href={mailTo}
        marginBottom='3%'
        paddingY='1%'
        paddingX='3%'
        fontSize='large'
        border='1px blue solid'
        >
          Say Hello
        </Link>

        {socials.map((social, index) => (
          <SocialLinks key={`social-${index}`} info={social} />
        ))}
      </Suspense>
    </>
  );
};
