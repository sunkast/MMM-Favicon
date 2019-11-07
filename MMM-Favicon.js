Module.register("MMM-Favicon", {
		defaults: {
		icon: 'icon.png'
	},
	getStyles: function() {
		return ["MMM-Favicon.css"];
	},
getDom: function() {
var icon = document.querySelector('link[rel="icon"]').setAttribute('href', this.file(this.config.icon));

  return icon;
}
});
