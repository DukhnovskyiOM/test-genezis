<script setup>
import { ownStore } from "../stores/dropdown";
const store = ownStore();
</script>

<template>
  <div v-if="store.dataForm?.length">
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      <tr v-for="(data, index) in store.dataForm" :key="index">
        <td>{{ data.id }}</td>
        <td>{{ data.name }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;

    th:hover {
      cursor: pointer;
      background: rgb(229, 255, 211);
    }

    tr:nth-child(even) {
      background-color: #f3f3f3;
    }
  }
}
</style>
