import React from 'react'
import takeLoanImg from './../assets/loanTake.png'
import { Group } from '@mantine/core'
import { useState } from 'react';
import { NumberInput,Button,Title,Image } from '@mantine/core';
import MoneyData from '../components/MoneyData';
import HomeButton from '../components/HomeButton';
import { IconCoinRupee } from '@tabler/icons';


const TakeLoanPage = ({takeLoan}) => {
    const [value, setValue] = useState(0);
  return (
    <>
      <Group position='center'>
        <Title order={1}>Take Loan</Title>
      </Group>

      <Group position='center'>
        <Image src={takeLoanImg} alt="take loan" style={{width: '24rem'}} />
      </Group>

      <Group position='center' style={{margin: '70px auto'}}>
          <NumberInput 
              placeholder="Enter amount in ₹"
              min={0}
              icon={<IconCoinRupee size={18}/>}
              value={value} 
              onChange={(val) => setValue(val)} 
          />
          <Button variant="gradient" gradient={{ from: 'orange', to: 'red', deg: 105 }} onClick={() => {
            takeLoan(value)
          }}>Take Loan</Button>
      </Group>

      <HomeButton/>

      <MoneyData/>
    </>
  )
}

export default TakeLoanPage