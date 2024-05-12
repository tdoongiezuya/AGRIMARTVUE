<template>
  <div>
    <Nav/>
    <div>
        <slot/>
    </div>
  </div>
</template>

<script>
import Nav from '../components/navbars/Nav1.vue';

export default {
  name: 'Default',
  components: { Nav },

}
</script>

<style>

</style>