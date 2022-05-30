<template>
  <p>
    This is our second component {{ idk }}.
  </p>
<ThirdComponent />

</template>

<script>
import ThirdComponent from "@/components/ThirdComponent";
export default {
  name: "CustomerList",
  components: {ThirdComponent},
  props: {
    msg: String,
    name: String,
    idk: String
  }
}
</script>

<style scoped>

</style>