import type {SizeLimitConfig} from 'size-limit';

const config: SizeLimitConfig = [
  {
    name: "import * from 'next-intl' (react-client)",
    path: 'dist/production/index.react-client.js',
    limit: '14.095 KB'
  },
  {
    name: "import * from 'next-intl' (react-server)",
    path: 'dist/production/index.react-server.js',
    limit: '15.355 KB'
  },
  {
    name: "import {createSharedPathnamesNavigation} from 'next-intl/navigation' (react-client)",
    path: 'dist/production/navigation.react-client.js',
    import: '{createSharedPathnamesNavigation}',
    limit: '4.125 KB'
  },
  {
    name: "import {createLocalizedPathnamesNavigation} from 'next-intl/navigation' (react-client)",
    path: 'dist/production/navigation.react-client.js',
    import: '{createLocalizedPathnamesNavigation}',
    limit: '4.125 KB'
  },
  {
    name: "import {createNavigation} from 'next-intl/navigation' (react-client)",
    path: 'dist/production/navigation.react-client.js',
    import: '{createNavigation}',
    limit: '4.125 KB'
  },
  {
    name: "import {createSharedPathnamesNavigation} from 'next-intl/navigation' (react-server)",
    path: 'dist/production/navigation.react-server.js',
    import: '{createSharedPathnamesNavigation}',
    limit: '16.805 KB'
  },
  {
    name: "import {createLocalizedPathnamesNavigation} from 'next-intl/navigation' (react-server)",
    path: 'dist/production/navigation.react-server.js',
    import: '{createLocalizedPathnamesNavigation}',
    limit: '16.805 KB'
  },
  {
    name: "import {createNavigation} from 'next-intl/navigation' (react-server)",
    path: 'dist/production/navigation.react-server.js',
    import: '{createNavigation}',
    limit: '16.805 KB'
  },
  {
    name: "import * from 'next-intl/server' (react-client)",
    path: 'dist/production/server.react-client.js',
    limit: '1 KB'
  },
  {
    name: "import * from 'next-intl/server' (react-server)",
    path: 'dist/production/server.react-server.js',
    limit: '14.635 KB'
  },
  {
    name: "import createMiddleware from 'next-intl/middleware'",
    path: 'dist/production/middleware.js',
    limit: '9.725 KB'
  },
  {
    name: "import * from 'next-intl/routing'",
    path: 'dist/production/routing.js',
    limit: '1 KB'
  },
  {
    name: "import * from 'next-intl' (react-client, ESM)",
    path: 'dist/esm/index.react-client.js',
    import: '*',
    limit: '14.365 kB'
  },
  {
    name: "import {NextIntlProvider} from 'next-intl' (react-client, ESM)",
    path: 'dist/esm/index.react-client.js',
    import: '{NextIntlClientProvider}',
    limit: '1.425 kB'
  }
];

module.exports = config;
