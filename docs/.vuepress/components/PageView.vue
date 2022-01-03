<template>
  <!-- Young Kbt -->
  <div class="view iconfont icon-view" title="浏览量">
    <span id="busuanzi_container_page_pv" style="display: none">
      <a href="javascript:;" id="busuanzi_value_page_pv"></a>
    </span>
  </div>
</template>

<script>
export default {
  mounted() {
    mountedView();
  },
  watch: {
    // Young Kbt
    $route(to, from) {
      if (to.path != from.path) {
        require("busuanzi.pure.js");
      }
    },
  },
};

function mountedView(moutedEvent = ".articleInfo-wrap > .articleInfo > .info") {
  var template = document.createElement("div");
  template.title = "浏览量";
  template.className = "view iconfont icon-view";
  template.style.float = "left";
  template.style.marginLeft = "20px";
  template.style.fontSize = "0.8rem";
  template.innerHTML =
    '<span id="busuanzi_container_page_pv" style="display: none"><a data-v-424c3eec href="javascript:;" id="busuanzi_value_page_pv"></a></span>';

  var i = 0;
  let interval = setInterval(() => {
    i++;
    const view = document.querySelector(moutedEvent);
    if (view) {
      if (!isMountedView(view, moutedEvent)) {
        view.appendChild(template);
        clearInterval(interval);
      }
    } else if (i > 5 * 60 * 2) {
      // 两分钟后清除
      clearInterval(interval);
    }
  }, 200);
}

function isMountedView(element, parentElement) {
  if (element.parentNode == parentElement) {
    return true;
  } else {
    return false;
  }
}
</script>

<style>
</style>