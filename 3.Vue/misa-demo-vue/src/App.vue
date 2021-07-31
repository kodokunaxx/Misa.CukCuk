<template>
  <div>
    <Menu></Menu>
    <Header></Header>
    <Content></Content>
    <Modal></Modal>
  </div>
</template>

<script>
import Menu from "./components/layout/TheMenu.vue";
import Header from "./components/layout/TheHeader.vue";
import Content from "./components/layout/TheContent.vue";
import Modal from "./components/layout/TheModalEmployee.vue";
export default {
  name: "App",
  components: {
    Menu,
    Header,
    Content,
    Modal,
  },
};
</script>

<style>
@import "./css/main.css";
</style>
