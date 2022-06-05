<template>
  <div class="ten-sidebar">
    <ul v-if="pages().length > 0">
      <li v-for="page in pages()">
        <a :href="page.path">{{ page.title }}</a>
      </li>
    </ul>
    <ul v-if="pages().length === 0">
      <li class="level-1"><a>{{ $page.title }}</a></li>
      <li v-for="header in $page.headers" :class="'level-' + header.level">
        <a :href="'#' + header.slug" v-bind:class="{ active: $route.hash === '#' + header.slug }">{{ header.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // pages: ()=> this.$site.pages,
    }
  },
  methods: {
    pages() {
      return this.$site.pages.filter(page => {
        const indexOfRoutePath = page.regularPath.indexOf(this.$route.path);
        const isArticlePage = this.$route.path.length < page.regularPath.length;
        return indexOfRoutePath === 0 && isArticlePage;
      });
    }
  }
}
</script>