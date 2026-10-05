#!/bin/zsh
# 构建网站并发布到 gh-pages 分支（GitHub Pages 从这个分支读取）。
# 用法：npm run deploy
set -e
cd "$(dirname "$0")/.."
npx astro build
cd dist
touch .nojekyll
git init -q -b gh-pages
git add -A
git -c user.name="Jay" -c user.email="zhouj668899-jie@users.noreply.github.com" commit -q -m "deploy $(date '+%Y-%m-%d %H:%M')"
git push -q -f https://github.com/zhouj668899-jie/zhouj668899-jie.github.io.git gh-pages
rm -rf .git
echo "已发布：https://zhouj668899-jie.github.io （约 1 分钟后生效）"
