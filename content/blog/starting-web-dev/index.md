---
title: Why I Blog
date: "2019-03-05T22:40:32.169Z"
description: A little about myself and the reasons why I decided to start blogging.
---

# Zak Gordon WordPress Udemy Tutorial

## Learning the WordPress Template Hierarchy

<img src="./gatsby-icon.png" />

### section 1: template files
- custom sidebar templates
- custom headers and footers
- custom widget areas
- template parts
- custom taxonomies
- custom templates (ex: 'full-width', 'side-bar')
- css dependencies
- custom post types
- advanced custom fields
- loading JavaScript and dependencies (like jQuery)

### section 2: template tags
Template Tags are special functions that give you access to WordPress content and data.
- include tags, general tags, navigation tags, post tags, thumbnail tags, link tags, comment tags, author tags, category tags, bookmark tags, conditional tags, sanitization and escaping tags.

##### General Tags:
https://codex.wordpress.org/Template_Tags#General_tags
1. Include tags:
  - get_header( **string $name = null** )
  <pre>
  Example of Multiple Headers.
  <?php
  if ( is_home() ) :
  	get_header( 'home' );
  elseif ( is_404() ) :
  	get_header( '404' );
  else :
  	get_header();
  endif;
  ?>
  </pre>

  - get_template_part( string $slug, string $name = null )

  - bloginfo( **$show** ) :
    * Provides general info about a WordPress install based on the $show parameter submitted.
    * possible parameters: 'name', 'description', 'wpurl', 'url', 'admin_email', 'charset', 'version', 'html_type', 'text_direction' ( consider using *is_rtl()* instead), 'language', 'stylesheet_url' (consider using get_stylesheet_uri() instead), 'stylesheet_directory', 'template_directory'/ 'template_url',


2. Login tags:
  - wp_loginout() :
  Displays a login link, or if a user is logged in, displays a logout link. An optional, redirect argument can be used to redirect the user upon login or logout.
  - wp_logout_url()
  - wp_login_url()
  - wp_login_form()
  - wp_lostpassword_url()
  - wp_register()
  - is_user_logged_in()


3. Archive tags
  - single_post_title()
  - single_post_archive_title()
  - single_cat_title()
  - single_tag_title
  - single_term_title
  - single_month_title
  - single_archives_link()
  - wp_get_archives()

4. Misc General tags
  - register_nav_menus()
  - wp_nav_menu( $args )
    * $args = array(
      // Location pickable in Customizer
      'theme_location'  =>  'main-menu',
      // Assigns a default menu to location
      'menu'            =>  'Main Menu',
      // Main wrapper around the ul of posts
      'container'       =>  'div',
      'container_class' =>  'container-class',
      'container_id'    =>  'container-id',
      // Wrapper for menu items - defaults to ul
      'items_wrap'      =>  '<ul id="%1$s" class="%2$s">%3$s</ul>',
      'menu_class'      =>  'items-wrap-class',
      'menu_id'         =>  'items-wrap-id',
      // Add text before link text (outside a tag)
      'before'          =>  '<',
      'after'           =>  '>',
      // Add text to link text (inside a tag)
      'link_before'     =>  '{',
      'link_after'      =>  '}',
      // Depth of child nav items to show
      'depth'           =>  0,
      // Callback function if menu is not available
      'fallback_cb'     =>  'wp_page_menu',
      );

  - walk_nav_menu_tree()

5. Post Tags
  - Class Tags
    * body_class()
    * post_class()

  - Common Tags
    * the_ID()
    * the_title()
    * the_content()
    * the_excerpt()
    * the_category()
    * the_tags()
    * the_permalink()
  - Date Tags
    * the_date()
    * the_modified_date()
    * the_time()
  - Attachment Tags
    * is_attachment()
    * wp_attachment_is_image()
    * wp_get_attachment_image()
    * wp_get_attachment_image_src()
    * wp_get_attachment_image_metadata()

  - Link tags
    * home_url()
    * site_url()
    * get_home_url()
    * get_site_url()

  - get_the_... Tags


### Go through the files of template Hierarchy.
* index.php: The 'catch all' for every other template file. This template will be the fallback for every template if none are created.

* singular.php: This is the template that will be used for all single posts and pages if no other template defined higher up in the hierarchy.

* home.php: Used for the post archive page if the home page is static.

* page.php: All single pages (not posts) will use this template, which means singular will not be used for single pages if this template is created.
- page-custom.php: If appended with either the slug or an ID of a specific page, this template will be used for that page.

* single.php: Similar to the "single.php" template, but for single posts.
- single-custom.php: If appended with either the slug or an ID of a specific post, this template will be used for that post.



### Registering Nav Menus

- register_nav_menus()

- register_sidebar()

#### Custom Taxonomies
when adding custom taxonomies to custom post types make sure to mark 'show_in_rest' => true. or else the UI will not show up when editing a post.

You can add custom templates for both the custom taxonomy and each specific term. For example the skills taxonomy template would be "taxonomy-skills.php", and a term inside that taxonomy could also have a custom template for example "taxonomy-skills-html.php".

#### Cool things I learned
* Teaser content. Hide everything before the "read more" line on the single post. The "read more" content will only be shown on the archive list.

#### Things to study
* The Walker Class - for changing the markup of navigation tags.




















//
