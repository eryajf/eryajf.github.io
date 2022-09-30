
# 确保脚本抛出遇到的错误
set -e
# 编译
pnpm install
pnpm build
# 同步
rsync -az --delete docs/.vuepress/dist/  \
    root@8.136.215.57:/data/www/eryajf.github.io/
