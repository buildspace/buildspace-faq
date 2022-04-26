// theme.config.js
export default {
    github: "https://github.com/helloitsm3/buildspace-faq", // GitHub link in the navbar
    docsRepositoryBase: "https://github.com/helloitsm3/buildspace-faq/blob/master", // base URL for the docs repository
    titleSuffix: " – Buildspace FAQ",
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: (
        <>
            <span>
                MIT {new Date().getFullYear()} ©{" "}
                <a href="https://github.com/helloitsm3" target="_blank" rel="noopener noreferrer">
                    CodePerfect
                </a>
                .
            </span>
        </>
    ),
    footerEditLink: `Edit this page on GitHub`,
    logo: (
        <>
            <span className="mr-2 font-extrabold hidden md:inline">Buildspace FAQ</span>
            <span className="text-gray-600 font-normal hidden md:inline">All your questions answered</span>
        </>
    ),
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Buildspace FAQ: All your questions answered" />
            <meta name="og:title" content="Buildspace FAQ: All your questions answered" />
        </>
    ),
    unstable_faviconGlyph: "🦄",
};
