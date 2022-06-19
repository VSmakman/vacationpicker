<template>
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/add">Add</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>

</template>

<script>
export default {
  name: "MainNavigation"
}
</script>

<style scoped>

</style>