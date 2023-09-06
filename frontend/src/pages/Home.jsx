import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Box, Container, Text } from '@chakra-ui/react'
import Login from '../components/Login'
import Signup from '../components/Signup'
const home = () => {
  return (
    <Container maxW={'xl'} centerContent>
<Box
 d="flex"
 justifyContent={'center'}
 p={3}
 bg="white"
 w="100%"
 m="40px 0 15px 0"
 borderWidth="1px"
 borderRadius={'3xl'}
 boxShadow={'2xl'}
>
<Text fontSize={'4xl'} borderRadius={'3xl'}  fontFamily={'cursive'} marginLeft={'35%'}>chit-chat</Text>
</Box>
<Box
bg="white"
 w="100%"
  p={4} 
  borderRadius="lg" 
  borderWidth="1px"
  boxShadow={'2xl'}
>
<Tabs variant='solid-rounded' colorScheme='messenger' color={'black'}>
  <TabList mb={'1em'}>
    <Tab width={'50%'}>Login</Tab>
    <Tab width={'50%'}>Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
    </Container>
  )
}

export default home
