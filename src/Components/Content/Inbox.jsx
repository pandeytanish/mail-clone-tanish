import { getValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
const Inbox = () => {
  const [data,setData] = useState([])
  useEffect(() => {   
    const url = window.location.href
    const token = url.match(/access_token=([^&]+)/)
    localStorage.setItem("Token",token && token[1])
    getEmailData()
  }, [])
  const getEmailData = () => {
    let token = localStorage.getItem("Token")
    console.log("hello", token)
    let url = "https://gmail.googleapis.com/gmail/v1/users/me/messages"
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
    return(
<>
{console.log("static data is" , data)}
<div class="content">
   <div class="mail">
   {data && data.map((Value) =>(<>              <div class="inbox-message-item">
                <div class="checkbox"  >
                  <button class="btn">
                    <img src="./icons/check_box_outline_blank_black_24dp.svg" alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
                  </button>
                </div>
                <div class="message-group-hidden">
                  <button class="btn-alt btn-nofill drag-indicator" >
                    <img src="./icons/drag_indicator_black_24dp.svg" alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
                  </button>
                </div>

                <button class="btn star" >
                  <img src="./icons/star_border_black_24dp.svg" alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
                </button>

                <div class="message-default" >

                  <div class="message-sender message-content unread" >
                    <span >{Value.payload.headers.find(item=>item.name == "From").value}</span>
                  </div>
      
                  <div class="message-subject message-content unread">
                    <span>{Value.payload.headers.find(item=>item.name == "Subject").value}</span>
                  </div>

                  <div class="message-seperator message-content"> - </div>

                  <div class="message-body message-content">
                    <span>{Value.snippet}</span>
                  </div>
                  
                  <div class="gap message-content" > &nbsp; </div>

                  <div class="message-date center-text unread" >
                    <span>{Value.payload.headers.find(item=>item.name == "Date").value}</span>
                  </div>

                </div>

                <div class="message-group-hidden" >
                  <div class="inbox-message-item-options">
                    <button class="btn">
                      <img src="./icons/archive_black_24dp.svg" alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                    </button>
      
                    <button class="btn">
                      <img src="./icons/delete_black_24dp.svg" alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                    </button>
      
                    <button class="btn">
                      <img src="./icons/mark_as_unread_black_24dp.svg" alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                    </button>
      
                    <button class="btn">
                      <img src="./icons/access_time_filled_black_24dp.svg" alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                    </button>
                  </div>
                </div>

              </div></>))}      

          </div>






        </div>
</>
    );
}
export default Inbox;