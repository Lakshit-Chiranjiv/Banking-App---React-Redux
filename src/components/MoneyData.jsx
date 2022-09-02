import React from 'react'
import { Group,Title } from '@mantine/core'
import { useSelector } from 'react-redux'

const MoneyData = () => {

  const { amount,loan } = useSelector((state)=> state) 

  return (
    <>
      <Group position='center'>
          <Title order={2}>Current Amount in Bank : </Title>
          <Title order={2} color='green.5'>₹{amount}</Title>
      </Group>
      <Group position='center'>
          <Title order={2}>Current Loan Due : </Title>
          <Title order={2} color='red.5'>₹{loan}</Title>
      </Group>
    </>
  )
}

export default MoneyData