import React from 'react'
import { Button,Title,Image,Group } from '@mantine/core';
import loanImg from './../assets/loan.png'
import MoneyData from '../components/MoneyData';
import HomeButton from '../components/HomeButton';
import { Link } from 'react-router-dom'

const LoanPage = () => {
  return (
    <>
      <Group position='center'>
        <Title order={1}>Loan Page</Title>
      </Group>

      <Group position='center'>
        <Image src={loanImg} alt="loan" style={{width: '20rem',marginTop: '20px'}} />
      </Group>

      <Group position='center' style={{margin: '70px auto'}}>
          <Link to='/loan/take'>
            <Button variant="gradient" gradient={{ from: 'orange', to: 'red', deg: 105 }}>Take Loan</Button>
          </Link>
          <Link to='/loan/pay'>
            <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Pay Loan</Button>
          </Link>
      </Group>

      <HomeButton/>

      <MoneyData/>
    </>
  )
}

export default LoanPage