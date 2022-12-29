import { defineConfig } from 'umi';


export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  define: {
    NODE_CONFIG_ENV: process.env.NODE_CONFIG_ENV,
  }
});
