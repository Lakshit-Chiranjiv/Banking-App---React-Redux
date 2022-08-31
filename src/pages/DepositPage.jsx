import React from 'react'
import depositImg from './../assets/deposit.png'
import { Group } from '@mantine/core'
import { useState } from 'react';
import { NumberInput,Button } from '@mantine/core';


const DepositPage = () => {
    const [value, setValue] = useState(0);
  return (
    <>
      <Group position='center'>
          <h1>Deposit your Money</h1>
      </Group>
      <Group position='center'>
          <img src={depositImg} alt="deposit" />
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
          <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Deposit</Button>
      </Group>
    </>
  )
}

export default DepositPage