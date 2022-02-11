var hasRunAlready = false;

if (!hasRunAlready) {
	replaceTextOnDocument("javascript", "HIIIIIIII");
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
	var randomImgSrcs = ["https://miro.medium.com/max/1400/1*ZmpgStvNsZXnyUfMGDVj2Q.jpeg", "", "", "", ""];

	for (var i = 0; i < imgs.length; i++) {
		var randomNumber = Math.floor((Math.random() * 10)); //Between 0 and 10

		if (randomNumber < 5) {
			imgs[i].src = newLink;
		}
	}
};