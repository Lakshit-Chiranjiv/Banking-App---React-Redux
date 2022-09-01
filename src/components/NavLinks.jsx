import React, { useState } from 'react'
import { Menu, Button, Text,Burger } from '@mantine/core';
import { IconHome2,IconFileAnalytics,IconBusinessplan,IconCash,IconReportMoney } from '@tabler/icons';

const NavLinks = () => {

  const [burgerOpen,setBurgerOpen] = useState(false)

  return (
    <Menu transition="rotate-right" transitionDuration={150} shadow="md" width={200} onClose={()=>setBurgerOpen(false)}>
      <Menu.Target>
        <Burger
          opened={burgerOpen}
          color='#fff'
          onClick={() => setBurgerOpen((x) => !x)}
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconHome2 size={14} />}>Home</Menu.Item>
        <Menu.Item icon={<IconBusinessplan size={14} />}>Deposit</Menu.Item>
        <Menu.Item icon={<IconCash size={14} />}>Withdraw</Menu.Item>
        <Menu.Item icon={<IconReportMoney size={14} />}>Loan</Menu.Item>
        <Menu.Item icon={<IconFileAnalytics size={14} />}>About</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default NavLinks