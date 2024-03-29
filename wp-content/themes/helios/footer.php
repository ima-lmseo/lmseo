<?php
/**
 * Genesis Framework.
 *
 * WARNING: This file is part of the core Genesis Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package Genesis\Templates
 * @author  StudioPress
 * @license GPL-2.0+
 * @link    http://my.studiopress.com/themes/genesis/
 */


do_action( 'genesis_before_footer' );
do_action( 'genesis_footer' );
do_action( 'genesis_after_footer' );

do_action( 'genesis_after' );

	wp_footer(); //* we need this for plugins	
?>
</body>
</html>
