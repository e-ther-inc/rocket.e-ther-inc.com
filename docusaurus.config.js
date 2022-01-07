// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rocket React Course',
  tagline: 'Introduction course to React and React Native',
  url: 'https://rocket.e-ther-inc.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon/e-ther-inc-favicon.svg',
  organizationName: 'e-ther-inc',
  projectName: 'rocket.e-ther-inc.com',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/e-ther-inc/rocket.e-ther-inc.com/edit/main/',
          lastVersion: 'current',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/e-ther-inc/rocket.e-ther-inc.com/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Rocket React Course',
        logo: {
          alt: 'Rocket React',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Introduction',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/e-ther-inc/rocket.e-ther-inc.com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigate',
            items: [
              {
                label: 'Course',
                to: '/',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Download book',
                href: 'https://rocket.e-ther-inc.com/rocket.e-ther-inc.com.pdf',
              }
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'tipuban',
                href: 'https://github.com/tipuban',
              },
              {
                label: '0-vortex',
                href: 'https://github.com/0-vortex',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'e-ther-inc',
                href: 'https://e-ther-inc.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/e-ther-inc',
              },
            ],
          },
        ],
        logo: {
          alt: "E-ther-inc logo",
          src: "img/logo.png",
          href: "https://www.polywork.com",
        },
        copyright: `Copyright © ${new Date().getFullYear()} [e-ther-inc]. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#f49048',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'icon',
            href: '/favicon/favicon-16x16.png',
            sizes: '16x16'
          },
          {
            tagName: 'link',
            rel: 'icon',
            href: '/favicon/favicon-32x32.png',
            sizes: '32x32'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon-precomposed',
            href: '/favicon/apple-touch-icon.png',
            sizes: '180x180'
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.png',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/favicon/android-chrome-192x192.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ]
};

module.exports = config;
