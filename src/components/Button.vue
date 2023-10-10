<script setup>
import { ownStore } from "../stores/dropdown";

const store = ownStore();

function toggle() {
  if (store.dataValue === undefined) {
    return true;
  }
  if (store.dataValue === "Не выбрано") {
    return true;
  }
  return false;
}

function send() {
  store.getToken();
}

function getData() {
  store.dataValue;
}
</script>

<template>
  <div class="wrapper">
    <button
      :disabled="toggle()"
      class="btn"
      :class="{ btn_active: !toggle() }"
      @click="send"
    >
      <span class="btn_text" :class="{ button__loading: store.isLoading }"
        >{{store.isLoading ? '' : 'Создать'}}</span
      >
    </button>
  </div>
</template>

<style scoped>
.btn {
  position: relative;
  padding: 13px 35px;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  border: none;
  min-height: 45px;

  &:disabled {
    background-color: white;
    color: black;
  }
}
.btn_active {
  background-color: #3697f1;
  color: white;
  cursor: pointer;
}

.button__loading {
  &::after {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
  }
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
