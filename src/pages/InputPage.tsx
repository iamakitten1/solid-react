import React from 'react'
import MyInput from '../components/users/input/MyInput'
import { PhoneIcon } from '@chakra-ui/icons'
import { color } from 'framer-motion'

const InputPage:React.FC = () => {
  return (
    <>
      
      <br />
      <MyInput leftAddon='+995' variant='outline' placeholder='phone' type='phone'  />
      <br />
      <MyInput leftAddon={<PhoneIcon color={'gray'}/>} variant='outline' placeholder='phone' type='phone'  />
      <br />
      <MyInput leftAddon='https://' rightAddon='.ge' variant='outline' placeholder='mywebsite' type='text'  />
      <br />
      <MyInput leftAddon='https://' rightAddon='.ge' variant='outline' placeholder='mywebsite' type='text'  />
    </>
  )
}

export default InputPage
