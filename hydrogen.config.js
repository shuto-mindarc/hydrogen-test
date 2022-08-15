import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'shuto-hydrogen.myshopify.com',
    storefrontToken: Oxygen.env.STOR_FRONT_TOKEN,
    storefrontApiVersion: '2022-07',
  },
});
