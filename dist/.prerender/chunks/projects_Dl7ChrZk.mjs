import { a as renderComponent, d as maybeRenderHead, f as renderHead, m as createRenderInstruction, p as addAttribute, u as renderTemplate } from "./server_mi6IE9tw.mjs";
import { t as createComponent } from "./compiler_DsVodpbL.mjs";
import { t as $$Navigation } from "./global_Ba_I3N74.mjs";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/CategoryFilter.astro
var $$CategoryFilter = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<!-- Static Shell --><div class="filter-container" id="filter-import"><button class="all-category" data-filter="*">All</button><button class="web-category" data-filter="web">Web Development</button><button class="web-category" data-filter="research">Research</button><button class="experiments-category" data-filter="experiments">Experiments</button></div><!-- Hydration Trigger -->${renderScript($$result, "C:/Users/hcpri/portfolio-hchewai/src/components/CategoryFilter.astro?astro&type=script&index=0&lang.ts")}<!-- TODO:
Capture initial category the user clicked on with dataset
set up initilisation to set up the filter once and apply a category when user clicks a button instead of initialising again
Pass it to filter js

-->`;
}, "C:/Users/hcpri/portfolio-hchewai/src/components/CategoryFilter.astro", void 0);
//#endregion
//#region src/data/projects.json
var projects_default = [
	{
		"slug": "luciano",
		"title": "Client WordPress Theme",
		"category": "web",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget mauris mauris. Praesent egestas id nisi non pretium. Mauris at.",
		"thumbnail": "/images/placeholder.png",
		"technologies": ["PHP", "WordPress"]
	},
	{
		"slug": "nextapp",
		"title": "Next JS App",
		"category": "web",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget mauris mauris. Praesent egestas id nisi non pretium. Mauris at.",
		"thumbnail": "/images/placeholder.png",
		"technologies": ["NextJS", "CSS"]
	},
	{
		"slug": "portfolio",
		"title": "Implementation of Island Architecture",
		"category": "research",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget mauris mauris. Praesent egestas id nisi non pretium. Mauris at.",
		"thumbnail": "/images/placeholder.png",
		"technologies": [
			"JavaScript",
			"HTML",
			"CSS",
			"Astro"
		]
	}
];
//#endregion
//#region src/pages/projects.astro
var projects_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Projects,
	file: () => $$file,
	url: () => $$url
});
var $$Projects = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html><head> ${renderHead($$result)}</head><body>${renderComponent($$result, "Navigation", $$Navigation, {})}<main class="projects-content"><h1>Projects & Experiments</h1><p class="lead-text">A collection of things I've built and explored</p>${renderComponent($$result, "CategoryFilter", $$CategoryFilter, {})}<div id="projects-grid" class="projects-grid">${projects_default.map((project) => renderTemplate`<article class="project-card"${addAttribute(project.category, "data-category")}><img${addAttribute(project.thumbnail, "src")}${addAttribute(project.title, "alt")} class="project-thumbnail"><div class="project-info"><p class="project-category">${project.category}</p><h2>${project.title}</h2><p>${project.description}</p><a${addAttribute(`/projects/${project.slug}`, "href")} class="view-project">View Project</a><ul class="technology-tags" aria-label="Technologies">${project.technologies.map((technology) => renderTemplate`<li class="technology-tag">${technology}</li>`)}</ul></div></article>`)}</div></main></body></html>`;
}, "C:/Users/hcpri/portfolio-hchewai/src/pages/projects.astro", void 0);
var $$file = "C:/Users/hcpri/portfolio-hchewai/src/pages/projects.astro";
var $$url = "/projects";
//#endregion
//#region \0virtual:astro:page:src/pages/projects@_@astro
var page = () => projects_exports;
//#endregion
export { page, __exportAll as t };
