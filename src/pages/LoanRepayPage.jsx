import React from 'react'
import loanRepayImg from './../assets/loanRepay.png'
import { Group } from '@mantine/core'
import { useState } from 'react';
import { NumberInput,Button,Title,Image } from '@mantine/core';
import MoneyData from '../components/MoneyData';
import HomeButton from '../components/HomeButton';
import { IconCoinRupee } from '@tabler/icons';
import { useSelector } from 'react-redux'

const LoanRepayPage = ({payLoan}) => {
    const [value, setValue] = useState(0);

    const { loan } = useSelector((state)=> state) 

    const payLoanHandler = () => {
      if(loan >= value){
        payLoan(value)
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

      <HomeButton/>

      <MoneyData/>
    </>
  )
}

export default LoanRepayPage