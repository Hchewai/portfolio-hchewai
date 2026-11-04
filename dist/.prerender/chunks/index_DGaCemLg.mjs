import { a as renderComponent, f as renderHead, u as renderTemplate } from "./server_mi6IE9tw.mjs";
import { t as createComponent } from "./compiler_DsVodpbL.mjs";
import { t as $$Navigation } from "./global_Ba_I3N74.mjs";
import { t as __exportAll } from "./projects_Dl7ChrZk.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<!-- Below is your "component template." It's just HTML, but with
    some magic sprinkled in to help you build great templates. --><html><head> ${renderHead($$result)}</head><body>${renderComponent($$result, "Navigation", $$Navigation, {})}<h1>Hello, World!</h1></body></html>`;
}, "C:/Users/hcpri/portfolio-hchewai/src/pages/index.astro", void 0);
var $$file = "C:/Users/hcpri/portfolio-hchewai/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
