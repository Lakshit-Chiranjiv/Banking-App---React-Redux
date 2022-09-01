import React from 'react'
import withdrawImg from './../assets/withdraw.png'
import { Group } from '@mantine/core'
import { useState } from 'react';
import { NumberInput,Button,Title,Image } from '@mantine/core';
import MoneyData from '../components/MoneyData';


const WithdrawPage = () => {
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
              placeholder="Enter amount"
              min={0}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              formatter={(value) =>
                !Number.isNaN(parseFloat(value))
                  ? `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  : '₹ '
              }

              value={value} 
              onChange={(val) => setValue(val)} 
          />
          <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Withdraw</Button>
      </Group>

      <MoneyData/>
    </>
  )
}

export default WithdrawPage