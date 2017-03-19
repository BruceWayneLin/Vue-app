<template>
  <div class="customers container">
      <h1 class="page-header">customer</h1>
  </div>
</template>

<script>
export default {
  name: 'customers',
  data () {
    return {
      customers: []
    }
  },
  methods: {
    fetchCustomers () {
      this.$http.get('https://newsapi.org/v1/sources?language=en')
      .then(function (response) {
        console.log(response.body)
      })
    }
  },
  created: function () {
    this.fetchCustomers()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
