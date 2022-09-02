import React from 'react'
import depositImg from './../assets/deposit.png'
import { Group } from '@mantine/core'
import { useState } from 'react';
import { NumberInput,Button,Title,Image } from '@mantine/core';
import MoneyData from '../components/MoneyData';
import HomeButton from '../components/HomeButton';
import { IconCoinRupee } from '@tabler/icons';


const DepositPage = ({depositMoney}) => {
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
              placeholder="Enter amount in ₹"
              min={0}
              value={value}
              icon={<IconCoinRupee size={18}/>}
              onChange={(val) => setValue(val)} 
          />
          <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }} onClick={()=>{
            depositMoney(value)
          }}>Deposit</Button>
      </Group>

      <HomeButton/>

      <MoneyData/>
    </>
  )
}

export default DepositPage