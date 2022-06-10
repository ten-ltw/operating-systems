<template>
  <div class="ten-layout-column">
    <div class="ten-layout-static ten-layout-top">
      <ten-nav />
    </div>
    <div class="ten-layout-dynamic ten-layout-row ten-layout-main">
      <div class="ten-layout-static ten-layout-advertisement"></div>
      <div class="ten-layout-static ten-layout-column ten-layout-article">
        <div class="ten-layout-static ten-header-container">
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
        </div>
        <div class="ten-layout-dynamic ten-article-container">
          <ten-show-data></ten-show-data>
          <Content class="ten-article-body" />
        </div>
      </div>
      <div class="ten-layout-dynamic ten-layout-sidebar">
        <ten-sidebar></ten-sidebar>
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