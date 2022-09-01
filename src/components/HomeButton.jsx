import React from 'react'
import { Group,Button } from '@mantine/core'

const HomeButton = () => {
  return (
    <Group position='center' style={{margin: '24px auto'}}>
        <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Head To Home</Button>
    </Group>
  )
}

export default HomeButton