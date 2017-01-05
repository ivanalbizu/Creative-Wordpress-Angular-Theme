<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js" ng-app="app">

<head>
	<base href="/wpcreative/">
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<title><?php wp_title(''); ?><?php if( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet">
	<link href="//www.google-analytics.com" rel="dns-prefetch">
	<link href="<?php the_favicon_url(); ?>" rel="shortcut icon">
	<link href="<?php the_apple_touch_url(); ?>" rel="apple-touch-icon-precomposed" sizes="144x144">

	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title" content="Squarespace" />

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="<?php bloginfo( 'description' ); ?>">

	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

	<header>
	  <nav class="navbar navbar-default navbar-fixed-top">
	    <div id="nav-main" class="container">
	      <div class="navbar-header">
	        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false">
	          <span class="sr-only">Toggle navigation</span>
	          <span class="icon-bar"></span>
	          <span class="icon-bar"></span>
	          <span class="icon-bar"></span>
	        </button>
					<a class="navbar-brand" href="#/home/">
						<img src="<?php the_logo_url(); ?>" alt="<?php bloginfo( 'name' ); ?>" class="logo-img">
					</a>
	      </div>
	      <div class="collapse navbar-collapse" id="bs-navbar-collapse">
					<ul class="nav navbar-nav navbar-right">
						<li ng-class="{active: activetab=='/about'}"><a href="#/about/">about</a></li>
						<li ng-class="{active: activetab=='/services'}"><a href="#/services/">services</a></li>
						<li ng-class="{active: activetab=='/works'}"><a href="#/works/">works</a></li>
						<li ng-class="{active: activetab=='/contact'}"><a href="#/contact/">contact</a></li>
					</ul>
	      </div>
	    </div>
	  </nav>
	</header>

	<main>
