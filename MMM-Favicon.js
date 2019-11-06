Module.register("MMM-Favicon", {
		defaults: {
		icon: 'icon.png'
	},
getDom: function() {
var icon = document.querySelector('link[rel="icon"]').setAttribute('href', this.file(this.config.icon));

  return icon;
}
});
