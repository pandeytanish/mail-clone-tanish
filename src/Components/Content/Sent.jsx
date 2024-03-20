const Sent = () => {
    return(
<>
<h1>Hello this is sent</h1>
{/* <section class="inbox" >
<div class="inbox-menu">

<div class="inbox-menu-group">

  <div class="inbox-btn-group" >
    <button class="btn-alt">
      <img src="./icons/check_box_outline_blank_black_24dp.svg" alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
    </button>

    <button class="btn-sm btn-alt">
      <img src="./icons/arrow_drop_down_black_24dp.svg" alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
    </button>
  </div>

  <button class="btn">
    <img src="./icons/refresh_black_24dp.svg" alt="Refresh" class="btn-icon btn-icon-sm btn-icon-alt btn-icon-hover"/>
  </button>

  <button class="btn">
    <img src="./icons/more_vert_black_20dp.png" alt="More" class="btn-icon btn-icon-sm btn-icon-alt btn-icon-hover"/>
  </button>

</div>

<div class="inbox-menu-group">

  <button class="btn-lg btn-alt" >
    <div class="inbox-menu-pagination">
      1-1 of 1
    </div>
  </button>

  <div class="inbox-menu-pagination-btn">
    <button class="btn btn-nofill btn-pagination">
      <img src="./icons/chevron_left_black_24dp.svg" alt="Newer" class="btn-icon-sm btn-icon-alt"/>
    </button>

    <button class="btn btn-pagination">
      <img src="./icons/chevron_right_black_24dp.svg" alt="Older" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
    </button>
  </div>

  <div class="inbox-btn-group" >
    <button class="btn-alt">
      <img src="./icons/keyboard_black_24dp.svg" alt="Input tools on/off" class="btn-icon-sm btn-icon-alt" />
    </button>

    <button class="btn-sm btn-alt">
      <img src="./icons/arrow_drop_down_black_24dp.svg" alt="Select input tool" class="btn-icon-sm btn-icon-alt"/>
    </button>
  </div>

</div>

</div>
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
                    <span >Mr. Superman</span>
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
                    <span >Jio Savvan</span>
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

    </section> */}
</>
    );
}
export default Sent;