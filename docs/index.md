---
home: true
# heroImage: /img/web.png
heroText: 二丫讲梵
tagline: 坐而言不如起而行
# actionText: 立刻进入 →
# actionLink: /ops/
# bannerBg: /img/bg.jpeg # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
bannerBg: https://ae03.alicdn.com/kf/H3c772fc347444001939a064acd623d594.png # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 运维
    details: 运维观止,奇技淫巧,迎刃而解
    link: /ops/ # 可选
    # imgUrl: /img/ops.png # 可选
  - title: 生活
    details: 日常随思,家人物语,生活感悟
    link: /life/
    # imgUrl: /img/life.png
  - title: 编程
    details: 编程世界,运维开发,全沾艺人
    link: /code/
    # imgUrl: /img/other.png

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
# postList: detailed
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
---



<html>
<link rel="stylesheet" type="text/css" href="https://at.alicdn.com/t/c/font_3872971_vwuw7kt2c5.css">
<style type="text/css">
body{
    margin: 0;
    padding: 0px;
}
#carousel{
    margin: auto; /* 居中 */
    width: 100%; /* 设置宽度 */
    position: relative; /* 相对定位 */
    overflow: hidden; /* 超出隐藏 */
}
#carousel img{
    position: absolute; /* 绝对定位 使图片堆叠 */
    width: 100%; /* 设定大小 按比例缩放 */
    transition: all .6s; /* 动画 */
    opacity: 0; /* 隐藏 */
}
.imgActive{
    opacity: 1 !important; /* 显示图片 最高优先级 */
}
/* 控制按钮的样式 */
#leftArrow,
#rightArrow{
    position: absolute;
    left: 5px;
    top: 43%;
    width: 25px;
    height: 30px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
    font-size: 20px;
    cursor: pointer;
    z-index: 1000;
}
#rightArrow{
    left: auto;
    right: 5px;
}
#sliderBtn{
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    z-index: 1000;
}
.unitBtn{
    width: 10px;
    height: 10px;
    background-color: #eee;
    border-radius: 10px;
    margin: 10px;
    cursor: pointer;
}
.btnActive{
    background-color: #4C98F7;
}
</style>
<body>
  <!-- 轮播图容器 -->
  <div id="carousel">
    <!-- 图片组 -->
    <a href="https://wiki.eryajf.net"><img src="https://t.eryajf.net/imgs/2022/05/5b4cb4f9b98669f7.jpg"></a>
    <a href="https://wiki.eryajf.net"><img src="https://t.eryajf.net/imgs/2022/04/2b047abd54f8aa81.jpg"></a>
    <a href="https://wiki.eryajf.net"><img src="https://t.eryajf.net/imgs/2022/05/1cab6963969618be.jpg"></a>
    <a href="https://wiki.eryajf.net"><img src="https://t.eryajf.net/imgs/2022/05/1d1562505d439647.jpg"></a>
    <a href="https://wiki.eryajf.net"><img src="https://t.eryajf.net/imgs/2022/11/4e2c50099ec9e26b.jpg"></a>
    <a href="https://wiki.eryajf.net"><img src="https://t.eryajf.net/imgs/2022/12/72a0c2d9a56656a0.jpg"></a>
    <a href="https://wiki.eryajf.net"><img src="https://t.eryajf.net/imgs/2022/03/5c9f3183898546f5.jpg"></a>
    <a href="https://wiki.eryajf.net"><img src="https://t.eryajf.net/imgs/2022/01/fb6c92925a6f487c.jpeg"></a>
    <a href="https://wiki.eryajf.net"><img src="https://t.eryajf.net/imgs/2022/01/2184c189e2914537.jpg"></a>
    <!-- 按钮组 -->
    <div id="leftArrow" class="iconfont icon-icon_arrow_left"></div> <!-- 左箭头切换按钮 -->
    <div id="rightArrow" class="iconfont icon-icon_arrow_right"></div> <!-- 右箭头切换按钮 -->
    <div id="sliderBtn"></div> <!-- 切换按钮组 -->
  </div>
</body>
  <script type="text/javascript">
    var imgArr = []; // 图片数组
    var curIndex = 0; // 当前显示图片
    var timer = null; // 定时器
    var btnList = []; // 右下角切换按钮组
    function slide(targetIndex = curIndex + 1){
      curIndex = targetIndex % imgArr.length; // 获取当前index
      imgArr.forEach((v) => v.className = "" ); // 设置其他图片隐藏
      imgArr[curIndex] .className = "imgActive"; // 设置当前index图片显示
      btnList.forEach(v => v.className = "unitBtn") // 设置其他按钮为灰色
      btnList[curIndex] .className = "unitBtn btnActive"; // 设置当前按钮为蓝色
    }
    function createBtnGroup(carousel,config){
      document.getElementById("leftArrow").addEventListener('click',(e) => {
        clearInterval(timer); // 清除定时器，避免手动切换时干扰
        slide(curIndex-1); // 允许点击则切换上一张
        timer = setInterval(() => {slide()},config.interval); // 重设定时器
      })
      document.getElementById("rightArrow").addEventListener('click',(e) => {
        clearInterval(timer); // 清除定时器，避免手动切换时干扰
        slide(curIndex+1); // 允许点击则切换下一张
        timer = setInterval(() => {slide()},config.interval); // 重设定时器
      })
      var sliderBtn = document.getElementById("sliderBtn"); // 获取按钮容器的引用
      imgArr.forEach((v,i) => {
        let btn = document.createElement("div"); // 制作按钮
        btn.className = i === 0 ?  "unitBtn btnActive" : "unitBtn"; // 初设蓝色与灰色按钮样式
        btn.addEventListener('click',(e) => {
          clearInterval(timer); // 清除定时器，避免手动切换时干扰
          slide(i); // // 允许点击则切换
          timer = setInterval(() => {slide()},config.interval); // 重设定时器
        })
        btnList.push(btn); // 添加按钮到按钮组
          sliderBtn.appendChild(btn); // 追加按钮到按钮容器
        })
      }
    function eventDispose(carousel,config){
      document.addEventListener('visibilitychange',function(){ // 浏览器切换页面会导致动画出现问题，监听页面切换
        if(document.visibilityState=='hidden') clearInterval(timer); // 页面隐藏清除定时器
        else timer = setInterval(() => {slide()},config.interval); // 重设定时器
      });
      carousel.addEventListener('mouseover',function(){ // 鼠标移动到容器则不切换动画，停止计时器
        clearInterval(timer); // 页面隐藏清除定时器
      });
      carousel.addEventListener('mouseleave',function(){ // 鼠标移出容器则开始动画
        timer = setInterval(() => {slide()},config.interval); // 重设定时器
      });
    }
    (function start() {
      var config = {
        height: "300px", // 配置高度
        interval: 5000 // 配置轮播时间间隔
      }
      var carousel = document.getElementById("carousel"); //获取容器对象的引用
      carousel.style.height = config.height; // 将轮播容器高度设定
      document.querySelectorAll("#carousel img").forEach((v,i) => {
        imgArr.push(v); // 获取所有图片组成数组
        v.className = i === 0 ?  "imgActive" : "";
      });
      eventDispose(carousel,config); // 对一些浏览器事件处理
      createBtnGroup(carousel,config); // 按钮组的处理
      timer = setInterval(() => {slide()},config.interval); // 设置定时器定时切换
    })();
  </script>
</html>

::: center
大千世界，何其茫茫。谨此笔记，记录过往。凭君阅览，小站洛荒。如能收益，莫大奢望
:::

::: center
## 🌎访问地球🌎
:::

<html><body><script type="text/javascript" src="//ra.revolvermaps.com/0/0/6.js?i=04kc3rr6zqv&m=0&c=ff0000&cr1=ffffff&f=times_new_roman&l=0&lx=300&ly=180&he=4" async="async"></script></body></html>

<!-- 小熊猫 -->
<!-- <img src="/img/panda-waving.png" class="panda no-zoom" style="width: 130px;height: 115px;opacity: 0.8;margin-bottom: -4px;padding-bottom:0;position: fixed;bottom: 0;left: 0.5rem;z-index: 1;"> -->
<!--

## 关于

### 📚Blog
这是一个兼具博客文章、知识管理、文档查找的个人网站，主要内容是Web前端技术。如果你喜欢这个博客&主题欢迎到[GitHub](https://github.com/xugaoyi/vuepress-theme-vdoing)点个Star、获取源码，或者交换[友链](/friends/) ( •̀ ω •́ )✧

### 🎨Theme
本站主题是根据[VuePress](https://vuepress.vuejs.org/zh/)的默认主题修改而成。取名`Vdoing`(维度)，旨在轻松打造一个`结构化`与`碎片化`并存的个人在线知识库&博客，让你的知识海洋像一本本书一样清晰易读。配合多维索引，让每一个知识点都可以快速定位！ 更多[详情](https://github.com/xugaoyi/vuepress-theme-vdoing)。

<a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/stars/xugaoyi/vuepress-theme-vdoing' alt='GitHub stars' class="no-zoom"></a>
<a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/forks/xugaoyi/vuepress-theme-vdoing' alt='GitHub forks' class="no-zoom"></a>

</br>


## 特色功能
博客部分特色功能介绍

#### 一站式技术搜索

   博客内容中包含部分技术教程，可以利用搜索框快速搜索到相关文档，即使博客中没有的，你还可以选择最下方的 `在XXX中搜索“xxx”` 快速到达你想要找的内容。

#### 深色模式与阅读模式
关爱程序员，保护视力，点击右下角的主题模式按钮试试吧~

#### Demo演示模块
   为了更直观的展示一些代码的效果，博客添加了demo模块插件，可查看demo、源码，以及跳转到codepen在线编辑。**示例**：

::: demo [vanilla]
```html
<html>
  <div id="vanilla-box"></div>
</html>
<script>
  var box = document.getElementById('vanilla-box')
  box.innerHTML = 'Hello World! Welcome to EB'
</script>
<style>
#vanilla-box {
  color: #11a8cd;
}
</style>
```
:::


## :email: 联系

- **WeChat or QQ**: <a href="tencent://message/?uin=894072666&Site=&Menu=yesUrl" class='qq'>1175463710</a>
- **Email**: <a href="mailto:894072666@qq.com">894072666@qq.com</a>
- **GitHub**: <https://github.com/eryajf>

</br>  -->


<ClientOnly>
  <WebInfo/>
</ClientOnly>