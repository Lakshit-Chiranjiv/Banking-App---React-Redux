import React from 'react'
import { Button,Title,Image,Group } from '@mantine/core';
import loanImg from './../assets/loan.png'

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
          <Button variant="gradient" gradient={{ from: 'orange', to: 'red', deg: 105 }}>Take Loan</Button>
          <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Pay Loan</Button>
      </Group>

      <Group position='center'>
          <Title order={2}>Current Amount in Bank : </Title>
          <Title order={2} color='green.5'>₹500</Title>
      </Group>
    </>
  )
}

export default LoanPage