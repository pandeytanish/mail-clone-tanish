const Snoozed = () => {
    return(
<>
<section class="inbox" >
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
      1-50 of 262
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
</section>
</>
    );
}
export default Snoozed;