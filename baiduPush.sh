#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 百度链接推送
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://wiki.eryajf.net&token=E1DGYsPYcM8svN1I"

# 必应链接推送
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "https://ssl.bing.com/webmaster/api.svc/json/GetUrlSubmissionQuota?siteUrl=https://wiki.eryajf.net&apikey=5442880bca524d11b94911d5e9b89a11"

rm -rf urls.txt # 删除文件