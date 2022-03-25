<template>
  <div class="page-container">
    <md-list class="md-double-line">
      
      <md-list-item v-for="{name, description, id} in toc" :key="name" @click="goTo(id)">
        <div class="md-list-item-text">
          <span>{{name}}</span>
          <span>{{description}}</span>
        </div>
      </md-list-item>
    
    </md-list>
  </div>
</template>

<script>
import toc from '@/content/toc'

export default {
  name: 'Home',
  data: () => ({
    menuVisible: false,
    toc: toc
  }),
  methods: {
    goTo(id){
      this.$router.push({path: `/chapter/${id}`})
    }
  }
}
</script>
