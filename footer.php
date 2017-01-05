		<section ng-controller="FooterCtrl as vm" class="container padding-top-45">
			<div class="row">
				<div class="col-md-3 col-sm-6 col-xs-12 box-col-bottom">
					<h4 class="text-uppercase font-size-15">About us</h4>
					<div ng-bind-html="vm.posts.fields.footer_about_us_description"></div>
					<ul class="list-inline padding-top-15">
						<li><a href="{{vm.posts.fields.footer_link_linkedin}}" target="_blank">
							<i class="fa fa-{{vm.posts.fields.footer_icon_linkedin}} circle" aria-hidden="true"></i>
						</a></li>
						<li><a href="{{vm.posts.fields.footer_link_facebook}}" target="_blank">
							<i class="fa fa-{{vm.posts.fields.footer_icon_facebook}} circle" aria-hidden="true"></i>
						</a></li>
						<li><a href="{{vm.posts.fields.footer_link_gplus}}" target="_blank">
							<i class="fa fa-{{vm.posts.fields.footer_icon_gplus}} circle" aria-hidden="true"></i>
						</a></li>
						<li><a href="{{vm.posts.fields.footer_link_youtube}}" target="_blank">
							<i class="fa fa-{{vm.posts.fields.footer_icon_youtube}} circle" aria-hidden="true"></i>
						</a></li>
						<li><a href="{{vm.posts.fields.footer_link_twitter}}" target="_blank">
							<i class="fa fa-{{vm.posts.fields.footer_icon_twitter}} circle" aria-hidden="true"></i>
						</a></li>
					</ul>
				</div>
				<div class="col-md-3 col-sm-6 col-xs-12 box-col-bottom">
					<h4 class="text-uppercase font-size-15">Services</h4>
					<ul class="list-unstyled">
						<li ng-repeat="link in vm.posts.fields.footer_services_quick_links" >
							<a href="#/services">{{link.post_title}}</a>
						</li>
					</ul>
				</div>
				<div class="col-md-3 col-sm-6 col-xs-12 box-col-bottom">
					<h4 class="text-uppercase font-size-15">Quick links</h4>
					<ul ng-repeat="link in vm.posts.fields.footer_menu_quick_links" class="list-unstyled">
						<li><a href="#/{{link}}">{{link}}</a></li>
					</ul>
				</div>
				<div class="col-md-3 col-sm-6 col-xs-12 box-col-bottom">
					<h4 class="text-uppercase font-size-15">Info</h4>
					<ul class="icons-bullet">
						<li>
							<i class="fa fa-map-marker" aria-hidden="true"></i>
							<span>{{vm.contact.fields.contact_street}}</span>
						</li>
						<li>
							<i class="fa fa-phone" aria-hidden="true"></i>
							<span>{{vm.contact.fields.contact_phone}}</span>
						</li>
						<li>
							<i class="fa fa-envelope-o" aria-hidden="true"></i>
							<span>{{vm.contact.fields.contact_mail}}</span>
						</li>
						<li>
							<i class="fa fa-globe" aria-hidden="true"></i>
							<span>{{vm.contact.fields.contact_web}}</span>
						</li>
					</ul>
				</div>
			</div>
		</section>

	</main>

	<footer>
		<div class="container center-vertical">
			<div class="row">
				<div class="col-sm-6">
					<span>&copy; <?php echo date("Y"); ?> Angular Theme</span>
				</div>
				<div class="col-sm-6">
					<a class="pull-right" href="http://ivanalbizu.eu/">Maquetaci&oacute;n &amp; Programaci&oacute;n &ndash; Iv&aacute;n Albizu</a>
				</div>
			</div>
		</div>
	</footer>

	<?php wp_footer(); ?>
	<script>
		jQuery(function(){
			jQuery('#nav-main a').click(function(){
	      jQuery('.navbar-toggle:visible').click();
	    });
		});
	</script>
</body>

</html>
