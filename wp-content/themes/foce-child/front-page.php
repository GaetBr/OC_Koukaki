<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner fade-in-from-top">
            <!-- Vidéo en arrière-plan avec image de secours -->
            <video class="hero-video" autoplay loop muted playsinline>
                <source src="<?php echo get_stylesheet_directory_uri() . '/assets/studio_koukaki-video_header.mp4'; ?>" type="video/mp4">
            </video>
            <div class="parallax-title">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
            </div>
        </section>
        <section id="#story" class="story fade-in">
            <h2><span class="animate-section-title">L'histoire</span></h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <article id="characters">
                <?php get_template_part('templates/characters-carousel'); ?>
            </article>
            <article id="place">
                <div>
                    <h3><span class="animate-section-title">Le Lieu</span></h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/little_cloud.png'; ?> " alt="petit nuage" class="parallax-nuage little-cloud">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/big_cloud.png'; ?> " alt="gros nuage" class="parallax-nuage big-cloud">
            </article>
        </section>


        <section id="studio" class="fade-in">
            <h2><span class="animate-section-title">Studio Koukaki</span></h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>

            <?php get_template_part('templates/oscar'); ?>

    </main><!-- #main -->

<?php
get_footer();
