<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
        <nav id="site-navigation" class="main-navigation">
            <div class="navigation-center">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="site-title"><?php bloginfo( 'name' ); ?></a>
            </div>
            <div class="navigation-right">
		        <a href="#" id="openBtn">       
                    <span class="burger-icon">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </span>
                </a>
            </div>
        </nav>
        <div id="mySidenav" class="sidenav">            
                <ul>
                    <li><img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/logo1.png'; ?>" alt="logo Koukaki"></li>
                    <li><a href="#story"><span class="animate-section-link">Histoire</span></a></li>
                    <li><a href="#characters"><span class="animate-section-link">Personnages</span></a></li>
                    <li><a href="#place"><span class="animate-section-link">Lieu</span></a></li>
                    <li><a href="#studio"><span class="animate-section-link">Studio Koukaki</span></a></li>
                    <p> STUDIO KOUKAKI </p>
                </ul>
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/cat1.png'; ?>" class="cat cat1" alt="Tenshi">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/cat2.png'; ?>" class="cat cat2" alt="Kawakeno">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/cat3.png'; ?>" class="cat cat3" alt="Jaakuna">

                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/Sunflower.png'; ?>" class="flower sunflower" alt="Sunflower">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/orchid.png'; ?>" class="flower orchid" alt="Orchid">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/random_flower.png'; ?>" class="flower random_flower" alt="Random Flower">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/flower.png'; ?>" class="flower flowers" alt="Flower">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/hibiscus_footer.png'; ?>" class="flower hibiscus_footer" alt="Hibiscus Footer">
        </div>
	</header><!-- #masthead -->
