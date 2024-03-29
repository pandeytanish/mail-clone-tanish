import useCustom from "../useCustom";
const Drafts = () => {
  const data = useCustom("https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in:drafts")
const convertToAMPM = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true });
};
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
                    <span>{convertToAMPM(Value.payload.headers.find(item=>item.name == "Date").value)}</span>
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
export default Drafts;