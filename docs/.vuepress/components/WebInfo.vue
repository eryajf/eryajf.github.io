<template>
  <!-- Young Kbt -->
  <div class="web-info card-box">
    <div class="webinfo-title">
      <i
        class="iconfont icon-award"
        style="font-size: 0.875rem; font-weight: 900; width: 1.25em"
      ></i>
      <span>站点信息</span>
    </div>
    <div class="webinfo-item">
      <div class="webinfo-item-title">文章数目：</div>
      <div class="webinfo-content">{{ mdFileCount }} 篇</div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">已运行时间：</div>
      <div class="webinfo-content">
        {{ createToNowDay != 0 ? createToNowDay + ' 天' : "不到一天" }}
      </div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">本站总字数：</div>
      <div class="webinfo-content">{{ totalWords }} 字</div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">最后活动时间：</div>
      <div class="webinfo-content">
        {{ lastActiveDate == "刚刚" ? "刚刚" : lastActiveDate + "前" }}
      </div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">本站被访问了：</div>
      <div class="webinfo-content">
        <span id="busuanzi_container_site_pv">
          <span id="busuanzi_value_site_pv" class="web-site-pv"></span> 次
        </span>
      </div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">您的访问排名：</div>
      <div class="webinfo-content busuanzi">
        <span id="busuanzi_container_site_uv">
          <span id="busuanzi_value_site_uv" class="web-site-uv"></span> 名
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { dayDiff, timeDiff, lastUpdatePosts } from "../webSiteInfo/utils";
export default {
  data() {
    return {
      // Young Kbt
      mdFileCount: 0, // markdown 文档总数
      createToNowDay: 0, // 博客创建时间距今多少天
      lastActiveDate: "", // 最后活动时间
      totalWords: 0, // 本站总字数
    };
  },
  mounted() {
    // Young Kbt
    if (Object.keys(this.$themeConfig.blogInfo).length > 0) {
      const {
        blogCreate,
        mdFileCountType,
        totalWords,
        moutedEvent,
        eachFileWords,
      } = this.$themeConfig.blogInfo;
      this.createToNowDay = dayDiff(blogCreate);
      if (mdFileCountType != "archives") {
        this.mdFileCount = mdFileCountType.length;
      } else {
        this.mdFileCount = this.$filterPosts.length;
      }
      if (totalWords == "archives" && eachFileWords) {
        let archivesWords = 0;
        eachFileWords.forEach((itemFile) => {
          if (itemFile.wordsCount < 1000) {
            archivesWords += itemFile.wordsCount;
          } else {
            let wordsCount = itemFile.wordsCount.slice(
              0,
              itemFile.wordsCount.length - 1
            );
            archivesWords += wordsCount * 1000;
          }
        });
        this.totalWords = Math.round(archivesWords / 100) / 10 + "k";
      } else if(totalWords == "archives"){
        this.totalWords = 0;
        console.log("如果 totalWords 使用 archives，必须传入 eachFileWords");
      }else{
        this.totalWords = totalWords;
      }
      // 最后一次活动时间
      this.lastActiveDate = timeDiff(lastUpdatePosts(this.$site.pages)[0].lastUpdated);
      mountedWebInfo(moutedEvent);
    }
  },
};
/**
 * 挂载站点信息模块
 */
function mountedWebInfo(moutedEvent = ".tags-wrapper") {
  let interval = setInterval(() => {
    const tagsWrapper = document.querySelector(moutedEvent);
    const webInfo = document.querySelector(".web-info");
    if (tagsWrapper && webInfo) {
      if (!isSiblilngNode(tagsWrapper, webInfo)) {
        tagsWrapper.parentNode.insertBefore(webInfo, tagsWrapper.nextSibling);
        clearInterval(interval);
      }
    }
  }, 200);
}
/**
 * 挂载在兄弟元素后面
 */
function isSiblilngNode(element, siblingNode) {
  if (element.parentNode == siblingNode.parentNode) {
    return true;
  } else {
    return false;
  }
}
/**
 * 首页的统计量
 * 该方法移到了 enhanceApp.js 文件
 */
function getIndexViewCouter() {
  // require 会获取一次访问量
  //const busuanzi = require("busuanzi.pure.js");
  var i = 0;
  var defaultCouter = "9999";
  // 如果 require 没有获取成功，则手动获取
  setTimeout(() => {
    let interval = setInterval(() => {
      const indexUv = document.querySelector(".web-site-pv");
      const indexPv = document.querySelector(".web-site-uv");
      if (indexPv || indexUv) {
        i++;
        if (i > 1 * 10) {
          indexPv.innerText = defaultCouter;
          indexUv.innerText = defaultCouter;
          clearInterval(interval); // 10 秒后无法获取，则取消获取
        }
        if (indexPv.innerText == "" && indexUv.innerText == "") {
          // 手动获取访问量
          //busuanzi.fetch();
        } else {
          clearInterval(interval);
        }
      } else {
        clearInterval(interval);
      }
    }, 2000);
  }, 2000);
}
</script>

<style>
.web-info {
  font-size: 0.875rem;
  padding: 0.95rem;
}
.webinfo-title {
  text-align: center;
  color: #888;
  font-weight: bold;
  padding: 0 0 10px 0;
}
.webinfo-item {
  padding: 8px 0 0;
  margin: 0;
}
.webinfo-item-title {
  display: inline-block;
}
.webinfo-content {
  display: inline-block;
  float: right;
}
</style>