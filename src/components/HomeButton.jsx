import React from 'react'
import { Group,Button } from '@mantine/core'
import { Link } from 'react-router-dom'

const HomeButton = () => {
  return (
    <Group position='center' style={{margin: '24px auto'}}>
        <Link to='/'>
          <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Head To Home</Button>
        </Link>
    </Group>
  )
}

export default HomeButton