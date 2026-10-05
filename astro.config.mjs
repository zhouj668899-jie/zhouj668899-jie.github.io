// @ts-check
import { defineConfig } from 'astro/config';

// 用户站点：仓库名 zhouj668899-jie.github.io，部署在根路径。
// 以后绑定自有域名时，把 site 改成新域名，并在 public/ 放一个 CNAME 文件。
export default defineConfig({
  site: 'https://zhouj668899-jie.github.io',
});
