import React, { useState } from 'react'
import { Menu, Button, Text,Burger } from '@mantine/core';
import { IconHome2,IconFileAnalytics,IconLink } from '@tabler/icons';

const NavLinks = () => {

  const [burgerOpen,setBurgerOpen] = useState(false)

  return (
    <Menu transition="rotate-right" transitionDuration={150} shadow="md" width={200}>
      <Menu.Target>
        <Burger
          opened={burgerOpen}
          color='#fff'
          onClick={() => setBurgerOpen((x) => !x)}
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconHome2 size={14} />}>Home</Menu.Item>
        <Menu.Item icon={<IconFileAnalytics size={14} />}>About</Menu.Item>
        <Menu.Item icon={<IconLink size={14} />}>Contact</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default NavLinks