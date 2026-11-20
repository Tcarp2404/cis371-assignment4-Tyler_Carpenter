
<template>
  <div>
    <!-- Beverage Display -->
    <Beverage
      :isIced="beverageStore.currentTemp === 'Cold'"
      :base="beverageStore.currentBase"
      :creamer="beverageStore.currentCreamer"
      :syrup="beverageStore.currentSyrup"
    />

    <ul>
      <!-- Temperature Selection -->
      <li>
        <label v-for="temp in beverageStore.temps" :key="temp">
          <input
            type="radio"
            name="temperature"
            :value="temp"
            v-model="beverageStore.currentTemp"
          />
          {{ temp }}
        </label>
      </li>

      <!-- Base Beverage Selection -->
      <li>
        <label v-for="base in beverageStore.bases" :key="base.id">
          <input
            type="radio"
            name="base"
            :value="base"
            v-model="beverageStore.currentBase"
          />
          {{ base.name }}
        </label>
      </li>

      <!-- Syrup Selection -->
      <li>
        <label v-for="syrup in beverageStore.syrups" :key="syrup.id">
          <input
            type="radio"
            name="syrup"
            :value="syrup"
            v-model="beverageStore.currentSyrup"
          />
          {{ syrup.name }}
        </label>
      </li>

      <!-- Creamer Selection -->
      <li>
        <label v-for="creamer in beverageStore.creamers" :key="creamer.id">
          <input
            type="radio"
            name="creamer"
            :value="creamer"
            v-model="beverageStore.currentCreamer"
          />
          {{ creamer.name }}
        </label>
      </li>
    </ul>

    <!-- Beverage Name and Save Button -->
    <input
      type="text"
      placeholder="Beverage Name"
      v-model="beverageStore.beverageName"
    />

    <button @click="beverageStore.makeBeverage()">
      🍺 Make Beverage
    </button>
  </div>

  <!-- Saved Beverage Recipes -->
  <div id="beverage-container" style="margin-top: 20px">
    <ul>
      <li
        v-for="(beverage, index) in beverageStore.beverages"
        :key="index"
      >
        <label>
          <input
            type="radio"
            name="savedBeverage"
            :value="index"
            @change="beverageStore.showBeverage(beverage)"
          />
          {{ beverage.name }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 15px 0;
}

label {
  margin-right: 12px;
}
</style>
