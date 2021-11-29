<template>
  <div id="app" class="flex flex-col h-screen justify-between">
    <TopNav class="h-50"/>
    <router-view class="mb-auto h-auto"/>
    <Footer class="h-16"/>
  </div>
</template>

<script>
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    TopNav,
    Footer
  }
}
</script>

