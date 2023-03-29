<?php
/**
 * This file adds the Landing template to the Streamline Child Theme.
 *
 * @author StudioPress
 * @package Generate
 * @subpackage Customizations
 */

/*
Template Name: Services
*/
/** Add page image above breadcrumbs */
add_action( 'genesis_before_content', 'streamline_post_image', 1);
function streamline_post_image() {

//	if ( is_page() ) return;

//    if ( $image = genesis_get_image( 'format=url&size=post-image' ) ) {
    if ( $image = genesis_get_image( array('size'=>'post-image') ) ) {
        echo($image);
//        printf( '<a href="%s" rel="bookmark"><img class="post-photo" src="%s" alt="%s" height="%s" width="%s"/></a>', get_permalink(), $image, the_title_attribute( 'echo=0' ) );

    }

}
add_action( 'genesis_before_content', 'custom_breadcrumbs', 10);
function custom_breadcrumbs(){
    if(is_home() or is_front_page()){
    }else {
        echo '<nav class="lmseo-breadcrumb-wrap"><div class="container"><div class="row"><div class="lmseo-breadcrumb" xmlns:v="http://rdf.data-vocabulary.org/#">';
        if(function_exists('bcn_display')){
            bcn_display();
        }
        echo '</div></div></div></nav>';
    }
}
// Add custom body class to the head
add_filter( 'body_class', 'streamline_add_body_class' );
function streamline_add_body_class( $classes ) {
    $classes[] = 'services-category';
    return $classes;
}

// Remove header, navigation, breadcrumbs, footer widgets, footer
//add_filter( 'genesis_pre_get_option_site_layout', '__genesis_return_full_width_content' );
//remove_action( 'genesis_header', 'genesis_header_markup_open', 5 );
//remove_action( 'genesis_header', 'genesis_do_header' );
//remove_action( 'genesis_header', 'genesis_header_markup_close', 15 );
//remove_action( 'genesis_after_header', 'genesis_do_nav' );
//remove_action( 'genesis_after_header', 'genesis_do_subnav', 15 );
//remove_action( 'genesis_before_content_sidebar_wrap', 'genesis_do_breadcrumbs');
//remove_action( 'genesis_before_footer', 'genesis_footer_widget_areas' );
//remove_action( 'genesis_footer', 'genesis_footer_markup_open', 5 );
//remove_action( 'genesis_footer', 'genesis_do_footer' );
//remove_action( 'genesis_footer', 'genesis_footer_markup_close', 15 );
//disable or remove wp-embed.js from WordPress
add_action( 'wp_footer', 'lmseo_deregister_scripts' );
function lmseo_deregister_scripts(){
    wp_deregister_script( 'wp-embed' );
}

add_action(  'wp_enqueue_scripts', 'lmseo_index_print_styles'   );
function lmseo_index_print_styles() {
    global $portArchDev;

//  Disabling CSS styles of WooCommerce blocks
//  https://themesharbor.com/disabling-css-styles-of-woocommerce-blocks/
    wp_dequeue_style( 'wc-blocks-style' ); //wc-blocks-integration-css
    wp_dequeue_style( 'wc-blocks-integration' ); //wc-blocks-integration-css
    wp_dequeue_style( 'woocommerce-smallscreen' ); //wc-blocks-integration-css
    wp_dequeue_style( 'woocommerce-layout' ); //wc-blocks-integration-css
    wp_dequeue_style( 'woocommerce-general' ); //wc-blocks-integration-css
    wp_dequeue_style( 'woocommerce-inline' ); //wc-blocks-integration-css
    wp_dequeue_style( 'classic-theme-styles' ); //wc-blocks-integration-css
//  Dequeue Gutenberg Block Library CSS Code Snippet
//  https://smartwp.com/remove-gutenberg-css/
    wp_dequeue_style( 'wp-block-library' ); // wp-block-library-css
//  https://wordpress.org/support/topic/how-to-disable-inline-styling-style-idglobal-styles-inline-css/
    wp_dequeue_style( 'global-styles' ); //  global-styles-inline-css
    wp_dequeue_style('lmseo'); // main css
    if( !is_super_admin() || !is_admin_bar_showing() || is_wp_login()){
        wp_deregister_script('jquery');
        wp_dequeue_script('jquery');
        wp_dequeue_script('jquery-migrate');
    }
}
/** Add Services JS to website */
add_action( 'wp_enqueue_scripts','ServicesJS');
function ServicesJS(){
    wp_register_script( 'internal-services',get_stylesheet_directory_uri( 'bootstrap' ) . '/dist/internal/services/js/app.js',array(), '1.0', true );
    wp_enqueue_script('internal-services');

}
/** Add Services JS to website */
add_action( 'wp_enqueue_scripts','ServicesCSS');
function ServicesCSS(){
    wp_register_style( 'services-css',get_stylesheet_directory_uri( ) . '/dist/internal/services/style.css',array(), '1.0', 'all' );
    wp_enqueue_style('services-css');

}
/*
*remove wrappers for header and inner
*/
add_filter( 'genesis_markup_content-sidebar-wrap', '__return_null' );
remove_theme_support('genesis-structural-wraps',array( 'header'));

//add_filter( 'genesis_markup_content', '__return_null' );
//add_action( 'genesis_before_content', 'lmseoMainContentWrapper' );
//function lmseoMainContentWrapper(){
//    genesis_markup(
//        [
//            'open'    => '<main %s>',
//            'context' => 'container',
//        ]
//    );
//}
//add_action( 'genesis_after_content', 'lmseoAfterMainContentWrapper' );
//function lmseoAfterMainContentWrapper(){
//    genesis_markup(
//        [
//            'close'   => '</main>', // End .content.
//            'context' => 'container',
//        ]
//    );
//}
add_filter('genesis_attr_content','contentClassesFunction');

function contentClassesFunction($attributes) {
    $attributes['class'] = $attributes['class'] . ' ' . 'container';
    return $attributes;
}

add_filter('genesis_attr_entry','entryClassesFunction');

function entryClassesFunction($attributes) {
    $attributes['class'] = $attributes['class'] . ' ' . 'row pb-5';
    return $attributes;
}

genesis();
