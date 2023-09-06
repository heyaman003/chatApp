import React, { useState } from 'react'
import { FormControl, VStack,FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const Signup = () => {
const [show,setShow]=useState(false);
const [name,setName]=useState();
const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);
  const [loading,setLoading]=useState(false);
  const toast = useToast()
  const handelClick1=()=>setShow(!show)
  const handelClick2=()=>setShow(!show)
  const postDetails=(pics)=>{
    setLoading(true);
      if(pics==undefined){
        toast({
          title: 'please select an image',
          description: "you have to select an image",
          status:"warning",
          duration: 8000,
          isClosable: true,
        })
        return;
      }
      console.log(pics);
      setLoading(false);
      if (pics.type === "image/jpeg" || pics.type === "image/png") {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "chat app");
        data.append("cloud_name", "duzn4m7cq");
        fetch("https://api.cloudinary.com/v1_1/duzn4m7cq/image/upload", {
          method: "post",
          body: data,
        })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
      }
      else {
        toast({
          title: "Please Select an Image!",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setPicLoading(false);
        return;
      }
  }
  const submitHandler=()=>{
       console.log("rukiye karte hain");
  }
  return (
    <VStack spacing={'5px'} color={'black'} >
      <FormControl id='frist-name' isRequired >
       <FormLabel>Name</FormLabel>
       <Input
       placeholder='Enter your name'
       onChange={(e)=>setName(e.target.value)} />
      </FormControl>
      <FormControl id='email' isRequired >
       <FormLabel>Email</FormLabel>
       <Input
       placeholder='Enter your email'
       onChange={(e)=>setEmail(e.target.value)} />
      </FormControl>
      <FormControl id='password' isRequired >
       <FormLabel>Password</FormLabel>
       <InputGroup>
       <Input
       type={show?"text":"password"}
       placeholder='Enter your password'
       onChange={(e)=>setPassword(e.target.value)} />
       <InputRightElement width={'4rem'}>
       <Button h={'1.7rem'} size={'sm'} onClick={handelClick1}>
              {show?"Hide":"Show"}
       </Button>
       </InputRightElement>
       </InputGroup>
       
      </FormControl>
      <FormControl id='confirm-password' isRequired >
       <FormLabel>Password</FormLabel>
       <InputGroup>
       <Input
       type={show?"text":"password"}
       placeholder='Enter your password again'
       onChange={(e)=>setConfirmpassword(e.target.value)} />
       <InputRightElement width={'4rem'}>
       <Button h={'1.7rem'} size={'sm'} onClick={handelClick2}>
              {show?"Hide":"Show"}
       </Button>
       </InputRightElement>
       </InputGroup>
       
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme='messenger'
        width="100%"
        borderRadius={'2xl'}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  )
}

export default Signup
