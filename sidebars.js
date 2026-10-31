/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  courseSidebar: [
    {
      type: 'doc',
      id: 'introduction/index',
      label: '1. Introduction',
    },
    {
      type: 'doc',
      id: 'fundamentals/index',
      label: '2. Wind Tunnel Fundamentals',
    },
    {
      type: 'doc',
      id: 'windtunnel/index',
      label: '3. The Wind Tunnel',
    },
    {
      type: 'doc',
      id: 'instrumentation/index',
      label: '4. Measurement Instruments',
    },
    {
      type: 'doc',
      id: 'operating/index',
      label: '5. Operating PROTOFLOW',
    },
  ],
  refSidebar: [
    {
      type: 'category',
      label: 'Pressure Model',
      collapsible: false,
      items: [
        'theory/pressure-network',
      ],
    },
  ],
};

module.exports = sidebars;
