<template>
  <div>
      <button v-show="loggedIn">Logout</button>  <!-- output -->
     
  </div>
</template>

<script>
export default {
    data() {
        return {
            loggedIn: false  // input
        }
    }
}
</script>

<style>

</style>