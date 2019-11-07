Module.register("MMM-Favicon", {
		defaults: {
		icon: 'icon.png'
	},
	start: function() {
var icon = document.querySelector('link[rel="icon"]').setAttribute('href', this.file(this.config.icon));
	}
});
