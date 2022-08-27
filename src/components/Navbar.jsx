import React from 'react'
import { Title,Image, Group } from '@mantine/core';
import NavLinks from './NavLinks'
import AppLogo from './../assets/logo.png'

const Navbar = () => {
  return (
    <Group className='navGrp'>
      <Group>
        <Title order={1}>Banking Bay</Title>
        <div className='logo'>
          <Image
            radius="md"
            src={AppLogo}
            alt="Random unsplash image"
          />
        </div>
      </Group>
      <NavLinks/>
    </Group>
  )
}

export default Navbar