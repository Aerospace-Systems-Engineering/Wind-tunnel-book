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
    {
      type: 'doc',
      id: 'references/index',
      label: 'References',
    },
  ],
  refSidebar: [
    {
      type: 'doc',
      id: 'theory/aerodynamics',
      label: 'Aerodynamics',
    },
    {
      type: 'doc',
      id: 'theory/pressure-network',
      label: 'Wind tunnel model',
    },
    {
      type: 'doc',
      id: 'theory/references',
      label: 'References',
    },
  ],
};

module.exports = sidebars;
