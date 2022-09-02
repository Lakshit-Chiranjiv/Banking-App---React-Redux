import React from 'react'
import loanRepayImg from './../assets/loanRepay.png'
import { Group } from '@mantine/core'
import { useState } from 'react';
import { NumberInput,Button,Title,Image,Text } from '@mantine/core';
import MoneyData from '../components/MoneyData';
import HomeButton from '../components/HomeButton';
import { IconCoinRupee } from '@tabler/icons';
import { useSelector } from 'react-redux'

const LoanRepayPage = ({payLoan}) => {
    const [value, setValue] = useState(0);
    const [errorMsg, setErrorMsg] = useState('')

    const { loan } = useSelector((state)=> state) 

    const payLoanHandler = () => {
      if(loan >= value){
        setErrorMsg('')
        payLoan(value)
      }
      else{
        setErrorMsg('Can\'t pay more than loaned')
        setTimeout(()=>{
          setErrorMsg('')
        },7000)
      }
    }
  return (
    <>
      <Group position='center'>
        <Title order={1}>Repay Loan</Title>
      </Group>

      <Group position='center'>
        <Image src={loanRepayImg} alt="loan repay" style={{width: '24rem'}} />
      </Group>

      <Group position='center' style={{margin: '70px auto'}}>
          <NumberInput 
              placeholder="Enter amount in ₹"
              min={0}
              icon={<IconCoinRupee size={18}/>}
              value={value} 
              onChange={(val) => setValue(val)} 
          />
          <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} onClick={payLoanHandler}>Repay Loan</Button>
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

export default LoanRepayPage