import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 用の設定（カスタムドメインを使用する場合は base を削除または '/' に変更）
  site: 'https://rodep-soft.github.io',
  base: '/rodep-web',
  integrations: [tailwind()],
  server: {
    host: true,
    port: 4321,
  },
});
