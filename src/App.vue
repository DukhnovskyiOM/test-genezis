<script setup>
import List from "./components/List.vue";
import Button from "./components/Button.vue";
import Data from "./components/Data.vue";
</script>

<template>
  <div class="wrapper">
    <section class="section_one"><List /> <Button /></section>
    <section class="section_two"><Data /></section>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 20px;
  padding-bottom: 50px;
  padding-right: 25px;

  .section_one {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
  }
}
</style>
