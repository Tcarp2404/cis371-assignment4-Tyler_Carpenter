
import { defineStore } from "pinia";

import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import tempretures from "../data/tempretures.json";

type Ingredient = {
  id: string;
  name: string;
  color: string;
};

type SavedBeverage = {
  name: string;
  currentTemp: string;
  currentBase: Ingredient;
  currentCreamer: Ingredient;
  currentSyrup: Ingredient;
};

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    // Available ingredient options
    temps: tempretures,
    bases: bases,
    creamers: creamers,
    syrups: syrups,

    // Current beverage selections
    currentTemp: tempretures[0],
    currentBase: bases[2],
    currentCreamer: creamers[0],
    currentSyrup: syrups[0],

    // Beverage name and saved recipes
    beverageName: "",
    beverages: [] as SavedBeverage[],
  }),

  actions: {
    makeBeverage() {
      if (!this.beverageName.trim()) {
        return;
      }

      this.beverages.push({
        name: this.beverageName.trim(),
        currentTemp: this.currentTemp,
        currentBase: { ...this.currentBase },
        currentCreamer: { ...this.currentCreamer },
        currentSyrup: { ...this.currentSyrup },
      });

      this.beverageName = "";
    },

    showBeverage(beverage: SavedBeverage) {
      this.currentTemp = beverage.currentTemp;
      this.currentBase = { ...beverage.currentBase };
      this.currentCreamer = { ...beverage.currentCreamer };
      this.currentSyrup = { ...beverage.currentSyrup };
    },
  },

  persist: true,
});

