import { Group, Image} from '@mantine/core'
import React from 'react'
import BankImg from './../assets/bank.png'
import MoneyData from './MoneyData'

const Homehero = () => {
  return (
    <>
        <Group className='homeHero' position='center'>
            <h1>You can Bank on Us</h1>
        </Group>
        <Group position='center' style={{marginBottom: '20px'}}>
            <div className='homeHeroImg'>
                <Image src={BankImg} alt='bank'/>
            </div>
        </Group>
        <MoneyData/>
    </>
  )
}

export default Homehero