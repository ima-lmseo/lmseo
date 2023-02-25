<?php
$out.='<a class="anchor" id="recent-posts"></a><section class="recent-posts">
  <div class="row" data-equalizer>
    <div class="large-12 columns recent-post-wrapper">
      <h1 class="recent-posts-title">Recent Posts</h1>
      <div class="row  recent-posts-content">
        <div class="large-12 columns recent-posts-list">
          <div class="radius">
          <div class="row">
          ';  
 $the_query = new WP_Query( 'showposts=3' );
$count=0;
while ($the_query->have_posts()){
  $the_query -> the_post();
  $out.='<div class="small-12 large-4 columns">';
  $out.='<h4><a href="' . get_permalink().'">'. get_the_title() .'</a></h4>
      <hr>
       
      <p data-equalizer-watch>'. get_the_excerpt().'</p>
     
     <p class="entry-meta">
        By <span class="entry-author" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
          <a href="'. get_author_posts_url( get_the_author_meta( 'ID' )).'" class="entry-author-link" itemprop="url" rel="author">
            <span class="entry-author-name" itemprop="name">
             '.get_the_author(). '
            </span>
          </a>
        </span> 
        <time class="entry-time" itemprop="datePublished" datetime="'.get_the_date('c'). '">'
            .get_the_date().
        '</time><!-- <div class="entry-comments-link">
          <a href="'.get_permalink().'#respond">Leave a Comment</a>
        </div>-->';
        if(is_admin_bar_showing()){
          $out.='<a class="post-edit-link" href="'.get_edit_post_link().'">(Edit)</a>';
        }
          //$out.='<p>'. get_the_excerpt(__('(more…)')).'</p>';

        $out.='</p>

    </div>';
    $count++;
}
 
/*$out.='<h4>Post #1</h4><hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit velit non voluptatum ut illum numquam inventore nulla quaerat maiores possimus, sint molestiae vitae voluptates tempora aut dolor fugit nisi unde autem debitis omnis laborum consequatur iusto ab! Veritatis, molestias, optio!Risus ligula, aliquam nec fermentum vitae, sollicitudin eget urna. Donec dignissim nibh fermentum odio ornare sagittis.
            </p>';*/
            $out .='</div>
        </div>
        </div>
      </div>
      <div class="more-centered-button-wrapper recent-posts-button-wrapper">
        <a href="/services/" class="home-button xlarge-button grey-button">More Posts</a>
      </div>
    </div>
   
  </div>
  </section>';
?>