<?php
$out.='<a class="anchor" id="contact"></a><section class="contact">
  <form action="/contact/" autocomplete="on" method="post">
  <div class="row">
  <div class="col-lg-12 columns">
   <h1 class="contact-title">Contact Us</h1>
   <hr>
   </div>
    <div class="col-lg-6 columns">
        <div class="wrap-label">
           <label for="name">First Name</label>
           <i class="fa fa-pencil fa-3x iconicfill-pen-alt2"></i>
        </div>
        <input type="text" id="name" placeholder="First Name">
    </div>
    <div class="col-lg-6 columns">
      <div class="wrap-label">
        <label for="lname">Last Name </label>
        <i class="fa fa-pencil fa-3x iconicfill-pen-alt2"></i>
      </div>
        <input type="text" placeholder="Last Name" id="lname">
      
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 columns">
      <div class="wrap-label">
        <label for="email">Email</label>
        <i class="fa fa-pencil fa-3x iconicfill-pen-alt2"></i>
      </div>
      <input type="text" placeholder="example@email.com" id="email">
    </div>
    <div class="col-lg-6 columns">
      <div class="row collapse">
        <div class="wrap-label">
          <label for="pnumber">Phone Number</label>
          <i class="fa fa-pencil fa-3x iconicfill-pen-alt2"></i>
        </div>
          <input type="text" placeholder="xxx-xxx-xxxx" id="pnumber">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 columns">
      <label>Your Message
        <textarea placeholder="Your Message" rows="7"></textarea>
      </label>
    </div>
  </div>
   <div class="row">

      <div class="col align-self-center">
         <button type="submit" class="home-button xwide-button grey-button">Submit</button>
      </div>
  </div>
</form></section>';
?>
