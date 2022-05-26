// theme.config.js
export default {
    github: "https://github.com/buildspace/buildspace-faq", // GitHub link in the navbar
    docsRepositoryBase: "https://github.com/buildspace/buildspace-faq/blob/master", // base URL for the docs repository
    titleSuffix: " – buildspace FAQ",
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
                <a href="https://github.com/buildspace" target="_blank" rel="noopener noreferrer">
                    CodePerfect
                </a>
                .
            </span>
        </>
    ),
    footerEditLink: `Edit this page on GitHub`,
    logo: (
        <>
            <span className="mr-2 font-extrabold hidden md:inline">buildspace FAQ</span>
            <span className="text-gray-600 font-normal hidden md:inline">all your web3 questions answered</span>
        </>
    ),
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="buildspace FAQ - All your questions answered" />
            <meta name="og:title" content="buildspace FAQ - All your questions answered" />
        </>
    ),
    unstable_faviconGlyph: "🦄",
};
