import { Box, VStack,Image, Heading, HStack,Text, Input, Button } from '@chakra-ui/react'
import React from 'react'
import qr from '../assets/qr.png'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {AiOutlineUpload} from 'react-icons/ai'
const MemberShip = () => {
  return (
        <VStack>

      <Box w={'50%'} height={'100vh'}>
             <VStack p={['4','16']} mt={['16','16']} justifyContent={'center'}>
                <Image src={qr}/>


                <Heading> Pay Using Any Upi <Text fontSize={'27'}>  Secure Payment Gateway<RiSecurePaymentFill/>  </Text> </Heading> 
            
            <AiOutlineUpload size={'5vmax'}/>
            <form >
                <HStack>
                    <Input required type={'file'}  css={{
                        "&::file-selector-button":{
                            border:"none",
                            width:"calc(100% +36px)",
                            height:"100%",
                            marginLeft:"-18px",
                            color:"blue",
                            backgroundColor:"white",
                            cursor:"pointer"
                            
                        }
                    }}/>
                    <Button colorScheme='blue' type='submit'>Upload</Button>
                </HStack>
                    <Text >Pay & Upload ScreenShot of Payment Your MemberShip Will be Renewed </Text>
            </form>
             </VStack>
            
    </Box>
        </VStack>
  )
}

export default MemberShip