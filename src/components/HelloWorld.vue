<template>
  <div class="page-container">
    <md-toolbar class="md-primary">
      <h3 class="md-title">Katechizm Gasparriego</h3>
    </md-toolbar>
  </div>
</template>

<style scoped>
  .md-app {
    max-height: 100vh;
    border: 1px solid rgba(0,0,0, .12);
  }
  
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      menuVisible: false
    })
  }
</script>
