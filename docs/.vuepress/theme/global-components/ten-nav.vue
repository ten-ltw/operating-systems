<template>
  <div class="ten-layout-row ten-nav">
    <div class="ten-layout-dynamic"></div>
    <li class="ten-layout-static" v-for="nav in $site.themeConfig.nav">
      <a v-bind:class="{ active: isActive(nav.link) }" :href="nav.link">{{ nav.text }}</a>
    </li>
  </div>
</template>
<script>
export default {
  methods: {
    isActive(link) {
      return this.$route.path.indexOf(link) === 0;
    }
  }
}
</script>