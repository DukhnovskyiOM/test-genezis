<script setup>
import { ref } from "vue";
import { ownStore } from "../stores/dropdown";

const store = ownStore();
store.changeValue();
const value = ref("Не выбрано");
const visible = ref(false);

function toggle() {
  visible.value = !visible.value;
}

function select(option) {
  value.value = option;
  store.changeValue(option);
}
</script>

<template>
  <div class="wrapper">
    <h1>Dropdown</h1>
    <div class="aselect" :data-value="value" :data-list="store.dataList">
      <div class="selector" @click="toggle">
        <div class="label">
          <span>{{ value }}</span>
        </div>
        <div class="arrow" :class="{ expanded: visible }"></div>
        <div :class="{ hidden: !visible, visible }">
          <ul>
            <li
              :class="{ current: item === value }"
              v-for="item in store.dataList"
              @click="select(item)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.aselect {
  width: 280px;
  .selector {
    border: 1px solid gainsboro;
    background: #f8f8f8;
    position: relative;
    z-index: 1;
    .arrow {
      position: absolute;
      right: 10px;
      top: 40%;
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 10px solid #888;
      transform: rotateZ(0deg) translateY(0px);
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
    }
    .expanded {
      transform: rotateZ(180deg) translateY(2px);
    }
    .label {
      display: block;
      padding: 12px;
      font-size: 16px;
      color: #888;
    }
  }
  ul {
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 16px;
    border: 1px solid gainsboro;
    position: absolute;
    z-index: 1;
    background: #fff;
  }
  li {
    padding: 12px;
    color: #666;
    &:hover {
      color: white;
      background: seagreen;
    }
  }
  .current {
    background: #eaeaea;
  }
  .hidden {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }
}
</style>
