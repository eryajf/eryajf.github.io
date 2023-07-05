
# 确保脚本抛出遇到的错误
set -e
# 编译
# yarn install
yarn build

# 必应认证
cp utils/BingSiteAuth.xml docs/.vuepress/dist
cp utils/436d5778d83e4fdb99facd48b571b90d.txt docs/.vuepress/dist

# 同步
rsync -az -e 'ssh -p 2023' --delete docs/.vuepress/dist/  \
    root@8.136.215.57:/data/www/eryajf.github.io/

sleep 5

# 刷新
doge flush path -p "https://wiki.eryajf.net/"
doge flush path -p "https://comment.eryajf.net/"

# 更新检索的索引数据
ssh -p 2023 root@8.136.215.57 'bash /data/docker/meilisearch/scraper/do.sh'