// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: window.location.origin,
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'pl'
  ]
};
