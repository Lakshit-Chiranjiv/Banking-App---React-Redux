import React from 'react'
import withdrawImg from './../assets/withdraw.png'
import { Group } from '@mantine/core'
import { useState } from 'react';
import { NumberInput,Button,Title,Image,Text } from '@mantine/core';
import MoneyData from '../components/MoneyData';
import HomeButton from '../components/HomeButton';
import { IconCoinRupee } from '@tabler/icons';
import { useSelector } from 'react-redux'

const WithdrawPage = ({withdrawMoney}) => {
    const [value, setValue] = useState(0);
    const [errorMsg, setErrorMsg] = useState('')

    const { amount } = useSelector((state)=> state) 

    const withdrawHandler = () => {
      if(amount >= value){
        setErrorMsg('')
        withdrawMoney(value)
      }
      else{
        setErrorMsg('Not Enough Amount in Bank')
        setTimeout(()=>{
          setErrorMsg('')
        },7000)
      }
    }
    
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
          <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} onClick={withdrawHandler}>Withdraw</Button>
      </Group>

      {
        errorMsg && 
        <Group position='center'>
          <Text
            component="span"
            align="center"
            variant="gradient"
            gradient={{ from: 'orange', to: 'red', deg: 45 }}
            weight={700}
            style={{margin: '20px auto'}}
          >{errorMsg}</Text>
        </Group>
      }

      <HomeButton/>

      <MoneyData/>
    </>
  )
}

export default WithdrawPage