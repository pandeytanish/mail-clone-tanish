import { useEffect } from "react";
const Inbox = () => {

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

const fetchMail = (id) => {
console.log("message id is" ,id)

// let id = '18e462bcf161bc72'
let token = localStorage.getItem("Token")
const options = {
    method : 'GET',
    headers : {
        'Authorization' : `Bearer ${token}`,
        'Content-Type':'application/json'
    }
}
for (let message_id of id.slice(0,10)){
    
        let url =  `https://gmail.googleapis.com/gmail/v1/users/me/messages/${message_id.id}`
fetch(url,options)
.then(response => response.json())
.then(json=>console.log("mails data is ===",json))
.catch(error=>console.log('Error in fetching mails',error))
}
}


    return(
<>
<div class="content">
          <div class="mail">
              
              <div class="inbox-message-item">

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
                    <span >Cascadom</span>
                  </div>
      
                  <div class="message-subject message-content unread">
                    <span>Dev Horror Stories: 👻 2000 lines of inline styles</span>
                  </div>

                  <div class="message-seperator message-content"> - </div>

                  <div class="message-body message-content">
                    <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
                  </div>
                  
                  <div class="gap message-content" > &nbsp; </div>

                  <div class="message-date center-text unread" >
                    <span>12:09 AM</span>
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

              </div>
              
              <div class="inbox-message-item  message-default-unread">

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

                <div >
                  <button class="btn star" >
                    <img src="./icons/star_border_black_24dp.svg" alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
                  </button>
                </div>

                <div class="message-default" >

                  <div class="message-sender message-content" >
                    <span >Mr. President</span>
                  </div>
      
                  <div class="message-subject message-content">
                    <span>Thanks for Saving the World</span>
                  </div>

                  <div class="message-seperator message-content"> - </div>

                  <div class="message-body message-content">
                    <span> Party at my crib next weekend, amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
                  </div>
                  
                  <div class="gap message-content" > &nbsp; </div>

                  <div class="message-date center-text" >
                    <span>4:23 PM</span>
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

              </div>
              
              <div class="inbox-message-item  message-default-unread">

                <div class="checkbox"  >
                  <button class="btn">
                    <img src="./icons/check_box_outline_blank_black_24dp.svg" alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
                  </button>
                </div>

                <div class="message-group-hidden">
                  <button class="btn-alt btn-nofill drag-indicator" >
                    <img src="./icons/drag_indicator_black_24dp.svg" alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled"/>
                  </button>
                </div>

                <div >
                  <button class="btn star" >
                    <img src="./icons/star_border_black_24dp.svg" alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
                  </button>
                </div>

                <div class="message-default" >

                  <div class="message-sender message-content" >
                    <span >Spotify</span>
                  </div>
      
                  <div class="message-subject message-content">
                    <span>🎉 💰 New Job who this? </span>
                  </div>

                  <div class="message-seperator message-content"> - </div>

                  <div class="message-body message-content">
                    <span> Hello, Habib! We are glad to break the news to you, amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
                  </div>
                  
                  <div class="gap message-content" > &nbsp; </div>

                  <div class="message-date center-text" >
                    <span>2:01 PM</span>
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

              </div>

          </div>





        </div>
</>
    );
}
export default Inbox;