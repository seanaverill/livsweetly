<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'livsweet_WPVKH');

/** MySQL database username */
define('DB_USER', 'livsweet_WPVKH');

/** MySQL database password */
define('DB_PASSWORD', 'DI$>eIe5hEX]c72Uv');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '2fafd9beb0b066d54ac025c6698c83a68a9edf213faae3aeba5cc577b6c4a0e3');
define('SECURE_AUTH_KEY', 'dbe2f5612f10cf43125adbb98f598dccdb3fb9e913cf56fbd7d18cead69d0e32');
define('LOGGED_IN_KEY', '5375285a121e402cb25a786f2b37fc5a92655e6f0744eb17cbb5dfa25bd71657');
define('NONCE_KEY', '18b5debfe001890db0212ccf3d3e7f6c13eafef590fc2f6cc2826c66c3c2a10c');
define('AUTH_SALT', '106cf07b6c5fe4a53c55512bb4269335d36bd8732bab36d5b52733581ccc09f8');
define('SECURE_AUTH_SALT', '2322191a51ac778a6dcc5e9a5b07e5271f29645162c51c9ff270ddcaef1f5f76');
define('LOGGED_IN_SALT', '472471e705e0ab696ca8428043f99d840ecdd3befd666301029ad43270ae4b44');
define('NONCE_SALT', 'c5f7e96cc929ee980c99f98f1dc22c1910def256491e5c005a8b4624017d1c46');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'VPl_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 5);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
