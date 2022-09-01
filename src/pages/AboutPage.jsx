import React from 'react'
import { Group,Text,Title,Image } from '@mantine/core'
import HomeButton from '../components/HomeButton'
import aboutImg from './../assets/about.png'

const AboutPage = () => {
  return (
    <>
        <Group position='center'>
            <Title order={1}>About Me</Title>
        </Group>
        <Group position='center' style={{marginBottom: '20px'}}>
            <div className='homeHeroImg'>
                <Image src={aboutImg} alt='about'/>
            </div>
        </Group>
        <Group position='center'>
            <Text
            component="span"
            align="center"
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            size="xl"
            weight={700}
            style={{ width: '70%',margin: '16px auto' }}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorum iste, officiis minima quaerat, mollitia, minus laboriosam illum accusantium quia tenetur consectetur assumenda. Adipisci modi unde, perferendis cumque eius voluptatibus delectus ab dolores, nihil amet ipsam aliquid veritatis at hic aut necessitatibus beatae sint ducimus earum repellendus! Ut!
            </Text>
        </Group>

        <HomeButton/>
    </>
  )
}

export default AboutPage