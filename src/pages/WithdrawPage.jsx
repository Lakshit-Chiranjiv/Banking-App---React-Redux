import React from 'react'
import withdrawImg from './../assets/withdraw.png'
import { Group } from '@mantine/core'
import { useState } from 'react';
import { NumberInput,Button } from '@mantine/core';


const WithdrawPage = () => {
    const [value, setValue] = useState(0);
  return (
    <>
      <Group position='center'>
          <h1>Withdraw Money</h1>
      </Group>
      <Group position='center'>
          <img src={withdrawImg} alt="withdraw" />
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
    </>
  )
}

export default WithdrawPage