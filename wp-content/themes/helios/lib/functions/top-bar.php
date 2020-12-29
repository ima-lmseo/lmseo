<?php
$out='<nav class="top-bar" data-topbar><ul class="title-area">
    <li class="name">';
$inside .= sprintf( '<a href="/" title="%s" class="logo">%s</a>', esc_attr( get_bloginfo( 'name' ) ), get_bloginfo( 'name' ) );
$out .=sprintf( '<h1 class="site-title">%1$s</h1>', $inside );
//<a class="logo" href="/">lmseo</a></h1>
$out .='
    </li>
     <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
    <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
  </ul>
  <section class="top-bar-section">
  <ul class="primary-links">
      <li><a href="/team/">Team</a></li>
      <li><a href="/contact/">Contact</a></li>
      <li><a href="/blog/">Blog</a></li>
      <li class="has-dropdown">
        <a href="#">Services</a>
        <ul class="dropdown">
          <li class="has-dropdown"><a href="/services/">Marketing</a>
            <ul class= "dropdown">
              <li><a href="/services/design/consulting/">UI/UX consulting</a></li>
            </ul>
          </li>
          <li class="has-dropdown"><a href="/services/programming/">Web Development</a>
            <ul class= "dropdown">
              <li><a href="/services/design/consulting/">UI/UX consulting</a></li>
            </ul>
          </li>
          <li class="has-dropdown"><a href="/services/design/">UI/UX Design</a>
            <ul class= "dropdown">
              <li><a href="/services/design/consulting/">UI/UX consulting</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
   <ul class="right topbar-more-info-nav hide-for-medium-down">
   <li><a href="tel:+18183966868">818.396.6868</a></li>
      <li class="has-form top-form">
        <div class="row collapse">
          <div class="large-8 small-9 columns"><input type="text" placeholder="Search LMSEO"></div>
            <div class="large-4 small-3 columns"><a href="/" class="button expand">Search</a></div>
        </div>
      </li>
    </ul>
    <!-- Right Nav Section -->
    <!-- Left Nav Section 
    <ul class="left">
      <li><a href="#">Left Nav Button</a></li>
    </ul>-->
  </section>
</nav>'
?>


