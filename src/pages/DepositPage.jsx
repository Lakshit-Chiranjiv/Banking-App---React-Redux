import React from 'react'
import depositImg from './../assets/deposit.png'
import { Group } from '@mantine/core'
import { useState } from 'react';
import { NumberInput,Button,Title,Image } from '@mantine/core';


const DepositPage = () => {
    const [value, setValue] = useState(0);
  return (
    <>
      <Group position='center'>
          <Title order={1}>Deposit your Money</Title>
      </Group>

      <Group position='center'>
          <Image src={depositImg} alt="deposit" style={{width: '24rem'}} />
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

      <Group position='center'>
          <Title order={2}>Current Amount in Bank : </Title>
          <Title order={2} color='green.5'>₹500</Title>
      </Group>
    </>
  )
}

export default DepositPage