const Drafts = () => {
    return(
<>
<section class="inbox" >
      
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
                    <span >Draft</span>
                  </div>
      
                  <div class="message-subject message-content unread">
                    <span>I want to know my credit score  </span>
                  </div>

                  <div class="message-seperator message-content"> - </div>

                  <div class="message-body message-content">
                    <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
                  </div>
                  
                  <div class="gap message-content" > &nbsp; </div>

                  <div class="message-date center-text unread" >
                    <span>02:45 PM</span>
                  </div>

                </div>
              </div>
          </div>
        </div>

    </section>
</>
    );
}
export default Drafts;