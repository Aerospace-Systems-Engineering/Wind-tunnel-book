// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
async function createConfig() {
  const remarkMath = (await import('remark-math')).default;
  const rehypeKatex = (await import('rehype-katex')).default;

  return {
    title: 'ProtoFlow',
    tagline: 'Rapid Prototyping Wind Tunnel — Documentation',
    favicon: 'img/protoflow-logo.svg',

    // Update this to your GitHub Pages URL once deployed
    url: 'https://aerospace-systems-engineering.github.io',
    baseUrl: '/Wind-tunnel-book/',

    organizationName: 'Aerospace-Systems-Engineering',
    projectName: 'Wind-tunnel-book',

    onBrokenLinks: 'throw',
    markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },


    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            routeBasePath: '/', // Docs served from site root
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
          },
          blog: false,
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: 'img/protoflow-logo.svg',
        navbar: {
          title: 'ProtoFlow',
          logo: {
            alt: 'ProtoFlow Logo',
            src: 'img/protoflow-logo.svg',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'courseSidebar',
              position: 'left',
              label: 'User Guide',
            },
            {
              type: 'docSidebar',
              sidebarId: 'refSidebar',
              position: 'left',
              label: 'Technical Reference',
            },
            {
              href: 'https://github.com/Aerospace-Systems-Engineering/Wind-tunnel-book',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Chapters',
              items: [
                { label: 'Introduction', to: '/' },
                { label: 'Wind Tunnel Fundamentals', to: '/fundamentals' },
                { label: 'The Wind Tunnel', to: '/windtunnel' },
                { label: 'Instrumentation', to: '/instrumentation' },
                { label: 'Operating ProtoFlow', to: '/operating' },
              ],
            },
            {
              title: 'TU/e',
              items: [
                {
                  label: 'Eindhoven University of Technology',
                  href: 'https://www.tue.nl/',
                },
              ],
            },
          ],
          copyright: `Built with Docusaurus.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
          additionalLanguages: ['python', 'bash'],
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
      }),

    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn',
        crossorigin: 'anonymous',
      },
    ],
  };
}

module.exports = createConfig;
