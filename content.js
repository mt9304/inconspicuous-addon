var hasRunAlready = false;

if (!hasRunAlready) {
	replaceTextOnDocument("anime", "CUPS");
	replacePicsOnDocument();
	hasRunAlready = true;
}

function replaceTextOnDocument(pattern, string, {target = document.body} = {}) {
	// Handle `string` — see the last section
	[
	  target,
	  ...target.querySelectorAll("*:not(script):not(noscript):not(style)")
	].forEach(({childNodes: [...nodes]}) => nodes
	  .filter(({nodeType}) => nodeType === document.TEXT_NODE)
	  .forEach((textNode) => textNode.textContent = textNode.textContent.replace(pattern, string)));
};

function replacePicsOnDocument() {
	var imgs = document.getElementsByTagName("img");
	var randomImgSrcs = ["https://www.ikea.com/us/en/images/products/ikea-365-mug-white__0711130_pe727998_s5.jpg?f=s", "https://cb.scene7.com/is/image/Crate/EverydayMugSHS18/$web_pdp_main_carousel_high$/190411135031/everyday-mug.jpg", "https://secure.img1-fg.wfcdn.com/pp/90059160/resize-h600-w600%5Ecompr-r85/1346/13465965/Mugs+%26+Teacups.jpg", "https://cdn.shopify.com/s/files/1/2081/7373/products/452345_1500x.jpg?v=1592238450", "https://cdn.shopify.com/s/files/1/2281/6071/t/161/assets/1766e131ed12--22-UT-MU-COLL.png?v=1642043243"];

	for (var i = 0; i < imgs.length; i++) {
		var randomNumber = Math.floor((Math.random() * 10)); //Between 0 and 10

		if (randomNumber < 5) {
			try {
				imgs[i].src = randomImgSrcs[randomNumber];
			}
			catch (e) {

			}
		}
	}
};