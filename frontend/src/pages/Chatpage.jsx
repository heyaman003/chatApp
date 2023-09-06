import React, { useState,useEffect } from 'react'
import axios from 'axios'
const Chatpage = () => {
       const [chats,setChats]=useState([]);
       const fetchChats=async()=>{
              const {data}=await axios.get("http://localhost:8080") 
              setChats(data);
            }
      useEffect(()=>{
       fetchChats();
       },[]) 
  return (
    <div>
      hello i'm chat page
       {
              chats.map((chat)=>(
               <h1 key={chat._id}>{chat.chatName}</h1>
              ))
       }
    </div>
  )
}

export default Chatpage
