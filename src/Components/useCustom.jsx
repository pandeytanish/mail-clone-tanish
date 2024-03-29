import React from 'react'
import { useEffect, useState } from "react";
function useCustom(apiUrl) {
    const [data,setData] = useState([])
  useEffect(() => {   
    const url = window.location.href
    const token = url.match(/access_token=([^&]+)/)
    if (token) {
      localStorage.setItem("Token",token && token[1])
    }
    getEmailData()
  }, [])
  const getEmailData = () => {
    let token = localStorage.getItem("Token")
    let url = apiUrl
    const options = {
        method : 'GET',
        headers : {
            'Authorization' : `Bearer ${token}`,
            'Content-Type':'application/json'
        }
    }
    fetch(url,options)
    .then(response => response.json())
    .then(json=>fetchMail(json.messages))
    .catch(error=>console.log('Error in fetching mails',error))
}
const fetchMail = async (id) => {
console.log("message id is" ,id)
let token = localStorage.getItem("Token")
const options = {
    method : 'GET',
    headers : {
        'Authorization' : `Bearer ${token}`,
        'Content-Type':'application/json'
    }
}
let mailData = []
for (let message_id of id.slice(0,10)) {
  let url =  `https://gmail.googleapis.com/gmail/v1/users/me/messages/${message_id.id}`
  const responce = await fetch(url,options)
const  message_data = await responce.json();
  mailData.push(message_data)
  console.log("message_data", message_data)
}

console.log("email data is", mailData)
setData(mailData)
}
    return data 
}

export default useCustom