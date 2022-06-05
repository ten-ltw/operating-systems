<template>
  <div class="ten-layout-column">
    <div class="ten-layout-static ten-layout-top"><ten-nav/></div>
    <div class="ten-layout-dynamic ten-layout-row ten-layout-main">
      <div class="ten-layout-static ten-layout-advertisement"></div>
      <div class="ten-layout-static ten-layout-column ten-layout-article">
        <div class="ten-article-header">
          <h3>{{ $site.title }}</h3>
          <h1>{{ $page.title }}</h1>
          <div class="ten-last-updated-time">
            last update time
            <time class="article-date" datetime="$page.lastUpdatedTimestamp">
              {{ $page.lastUpdated }}
            </time>
          </div>
        </div>
        <Content class="ten-article-body" />
      </div>
      <div class="ten-layout-dynamic ten-layout-sidebar">
        <pre><ten-sidebar></ten-sidebar></pre>
      </div>
    </div>
    <div class="ten-layout-static ten-layout-bottom"></div>
  </div>
</template>

<script>
import TenNav from '../global-components/ten-nav.vue';
export default {
    computed: {},
    components: { TenNav }
}
</script>