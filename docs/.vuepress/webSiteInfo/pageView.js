// 此文件没有用到，该文件曾版用于测试
document.addEventListener("DOMContentLoaded", function () {
  var template = document.createElement('div');
  template.title = '浏览量';
  template.className = 'view iconfont icon-view';
  // template.setAttribute('data-v-424c3eec', '');
  template.innerHTML = '<span id="busuanzi_container_page_pv" style="display: none"><a data-v-424c3eec href="javascript:;" id="busuanzi_value_page_pv"></a></span>';

  mountedView();

  function mountedView(moutedParentEvent = ".articleInfo-wrap > .articleInfo > .info") {
    var i = 0;
    let interval = setInterval(() => {
      i++;
      const parentElement = document.querySelector(moutedParentEvent);
      if (view) {
        if (!isMountedView(template, parentElement)) {
          parentElement.appendChild(template);
          clearInterval(interval);
        }
      } else if (i > 2 * 10) {  // 10 秒后清除
        clearInterval(interval);
      }
    }, 500);
  }

  function isMountedView(element, parentElement) {
    if (element.parentNode == parentElement) {
      return true;
    } else {
      return false;
    }
  }

});
