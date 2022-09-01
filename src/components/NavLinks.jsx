import React, { useState } from 'react'
import { Menu, Button, Text,Burger } from '@mantine/core';
import { IconHome2,IconFileAnalytics,IconBusinessplan,IconCash,IconReportMoney } from '@tabler/icons';
import { useNavigate } from 'react-router-dom'

const NavLinks = () => {

  const navigate = useNavigate()

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
        <Menu.Item icon={<IconHome2 size={14} />} onClick={()=>navigate('/')}>Home</Menu.Item>
        <Menu.Item icon={<IconBusinessplan size={14} />} onClick={()=>navigate('/deposit')}>Deposit</Menu.Item>
        <Menu.Item icon={<IconCash size={14} />} onClick={()=>navigate('/withdraw')}>Withdraw</Menu.Item>
        <Menu.Item icon={<IconReportMoney size={14} />} onClick={()=>navigate('/loan')}>Loan</Menu.Item>
        <Menu.Item icon={<IconFileAnalytics size={14} />} onClick={()=>navigate('/about')}>About</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default NavLinks