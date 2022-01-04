const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/pages/whitepages.svelte"),
	() => import("../../../src/routes/pages/contact.svelte"),
	() => import("../../../src/routes/pages/about.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/pages/whitepages.svelte
	[/^\/pages\/whitepages\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/pages/contact.svelte
	[/^\/pages\/contact\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/pages/about.svelte
	[/^\/pages\/about\/?$/, [c[0], c[5]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];