import React from 'react'
import withdrawImg from './../assets/withdraw.png'
import { Group } from '@mantine/core'
import { useState } from 'react';
import { NumberInput,Button,Title,Image } from '@mantine/core';
import MoneyData from '../components/MoneyData';
import HomeButton from '../components/HomeButton';
import { IconCoinRupee } from '@tabler/icons';

const WithdrawPage = ({withdrawMoney}) => {
    const [value, setValue] = useState(0);
  return (
    <>
      <Group position='center'>
        <Title order={1}>Withdraw Money</Title>
      </Group>

      <Group position='center'>
        <Image src={withdrawImg} alt="withdraw" style={{width: '24rem'}} />
      </Group>

      <Group position='center' style={{margin: '70px auto'}}>
          <NumberInput 
              placeholder="Enter amount in ₹"
              min={0}
              icon={<IconCoinRupee size={18}/>}
              value={value} 
              onChange={(val) => setValue(val)} 
          />
          <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} onClick={() => {
            withdrawMoney(value)
          }}>Withdraw</Button>
      </Group>

      <HomeButton/>

      <MoneyData/>
    </>
  )
}

export default WithdrawPage