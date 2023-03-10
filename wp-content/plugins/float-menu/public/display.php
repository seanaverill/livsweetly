<?php
/**
 * Display
 *
 * @package     Public
 * @subpackage
 * @copyright   Copyright (c) 2018, Dmytro Lobov
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $wpdb;
$table  = $wpdb->prefix . "wow_" . $this->plugin['prefix'];
$result = $wpdb->get_results( "SELECT * FROM $table order by id asc" );

if ( count( $result ) > 0 ) {
	foreach ( $result as $key => $val ) {
		$param   = unserialize( $val->param );
		$display = ! empty( $param['show'] ) ? $param['show'] : 'all';
		if ( $display === 'all' ) {
			echo do_shortcode( '[' . esc_attr( $this->plugin['shortcode'] ) . ' id=' . absint( $val->id ) . ']' );
		}
	}
}
