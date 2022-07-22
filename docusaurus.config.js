// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "buildspace localhost",
    tagline: "Fix your issues and get off localhost!",
    url: "https://buildspace.so",
    baseUrl: "/help/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon-shipyard.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "buildspace",
    projectName: "buildspace-faq",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/buildspace/buildspace-faq",
                    routeBasePath: "/",
                },
                blog: {
                    showReadingTime: true,
                    editUrl: "https://github.com/buildspace/buildspace-faq",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // algolia: {
            //     appId: "UXEM07LQ1Q",
            //     apiKey: "cb4e627bf94e42f8699a376d4799e0e6",
            //     indexName: "buildspace help",
            //     contextualSearch: true,
            //     searchPagePath: "search",
            // },

            algolia: {
                appId: "SS3UZTTJJ9",
                apiKey: "a80d085ec7be3a5367479de9aa724a37",
                indexName: "dev_buildspacehelp",
                contextualSearch: true,
                searchPagePath: "search",
            },
            navbar: {
                title: "localhost",
                logo: {
                    alt: "buildspace localhost Logo",
                    src: "img/logo-light.svg",
                    srcDark: "img/logo-dark.svg",
                },
                items: [
                    {
                        href: "https://github.com/buildspace/buildspace-faq",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Buildspace links",
                        items: [
                            {
                                label: "Buildspace projects",
                                to: "https://buildspace.so/p?utm_source=raza&utm_medium=footer&utm_campaign=search-buildspace",
                            },
                            {
                                label: "Buildspace jobs",
                                to: "https://buildspace.so/jobs?utm_source=raza&utm_medium=footer&utm_campaign=search-buildspace",
                            },
                            {
                                label: "Buildspace discover",
                                to: "https://buildspace.so/discover?utm_source=raza&utm_medium=footer&utm_campaign=search-buildspace",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/buildspace",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/_buildspace",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            // {
                            //   label: 'Blog',
                            //   to: '/blog',
                            // },
                            {
                                label: "GitHub",
                                href: "https://github.com/buildspace/buildspace-faq",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} buildspace.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
