import React from 'react'
import { Group,Title } from '@mantine/core'

const MoneyData = () => {
  return (
    <>
      <Group position='center'>
          <Title order={2}>Current Amount in Bank : </Title>
          <Title order={2} color='green.5'>₹500</Title>
      </Group>
      <Group position='center'>
          <Title order={2}>Current Loan Due : </Title>
          <Title order={2} color='red.5'>₹34</Title>
      </Group>
    </>
  )
}

export default MoneyData