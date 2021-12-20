import { remark } from "remark";
import remarkPresetLintMarkdownStyleGuide from "remark-preset-lint-markdown-style-guide";
import remarkHtml from "remark-html";

function updateColor() {
	const markdown = document.querySelector(
		".share-update-card__update-text"
	).textContent;
	remark()
		.use(remarkPresetLintMarkdownStyleGuide)
		.use(remarkHtml)
		.process(markdown)
		.then((html) => {
			document.querySelector(".share-update-card__update-text").innerHTML =
				String(html);
		});
}

window.addEventListener("load", updateColor);
