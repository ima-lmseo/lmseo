<?php
/** Force the full width layout layout on the Portfolio page */
add_filter( 'genesis_pre_get_option_site_layout', '__genesis_return_full_width_content' );
/** Add support for structural wraps */
add_theme_support( 'genesis-structural-wraps', array( 'header', 'nav', 'subnav', 'inner', 'footer-widgets', 'footer' ) );


add_action( 'genesis_meta', 'streamline_home_genesis_meta' );
/**
 * Add widget support for homepage.
 *
 */
function streamline_home_genesis_meta() {
	if ( is_active_sidebar( 'home-featured-1' ) || is_active_sidebar( 'home-featured-2' ) || is_active_sidebar( 'home-featured-3' ) ) {
		add_action( 'genesis_before_content_sidebar_wrap', 'streamline_home_loop_helper' );
	}
}
/**
 * Display widget content for home featured sections.
 *
 */
function streamline_home_loop_helper() {

	if ( is_active_sidebar( 'home-featured-1' ) || is_active_sidebar( 'home-featured-2' ) || is_active_sidebar( 'home-featured-3' ) ) {

		echo '<div id="home-featured">';

		echo '<div class="home-featured-1">';
		dynamic_sidebar( 'home-featured-1' );
		echo '</div><!-- end .home-featured-1 -->';	

		echo '<div class="home-featured-2">';
		dynamic_sidebar( 'home-featured-2' );
		echo '</div><!-- end .home-featured-2 -->';

		echo '<div class="home-featured-3">';
		dynamic_sidebar( 'home-featured-3' );
		echo '</div><!-- end .home-featured-3 -->';

		echo '</div><!-- end #home-featured -->';	
	}
}
//add_theme_support('genesis-footer-widgets');
genesis();