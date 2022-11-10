<script lang="ts" setup>
import gsap from 'gsap';

const btnHexagonPropsPresets = useAppConfig().propsPresets.buttonHexagon;

// Defines if the game is launched (& displayed) or not
const launched = ref(false);

function launch () {
  launched.value = true;
  // TODO: transition from homepage to player (+history push)
}
</script>

<template>
  <!-- Idea: semi-transparent rhythm player animated (or not) in the bg rotated in different way near the border where it gets more opaque the closer it is to the border -->
  <!-- TODO: (3d) animation when play button is clicked? -->
  <div class="h-screen flex flex-col items-center justify-center gap-y-6">
    <header>
      <h1 class="text-center text-9xl font-format1452">RemuRhythm</h1>
      <h2 class="text-center text-7xl font-format1452">Practice rhythm in a fun way!</h2>
    </header>
    <nav class="flex flex-row justify-center items-center gap-x-12 w-2/3">
      <div class="flex-1 flex flex-row justify-end gap-x-5">
        <ButtonHexagon v-bind="btnHexagonPropsPresets.secondary" class="h-32 w-32 drop-shadow-tower">
          <span class="select-none text-3xl font-bold font-format1452">???</span>
        </ButtonHexagon>
        <ButtonHexagon v-bind="btnHexagonPropsPresets.secondary" class="h-32 w-32 drop-shadow-tower">
          <span class="select-none text-3xl font-bold font-format1452">Guide</span>
        </ButtonHexagon>
      </div>
      <div>
        <ButtonHexagon
          class="h-60 w-60 drop-shadow-tower"
          v-bind="btnHexagonPropsPresets.play"
          @click="launch"
        >
        <span class="select-none text-5xl font-bold font-format1452">Launch!</span>
      </ButtonHexagon>
      </div>
      <div class="flex-1 flex flex-row justify-start gap-x-5">
        <ButtonHexagon v-bind="btnHexagonPropsPresets.secondary" class="h-32 w-32 drop-shadow-tower">
          <span class="select-none text-3xl font-bold font-format1452">Credits</span>
        </ButtonHexagon>
        <ButtonHexagon v-bind="btnHexagonPropsPresets.secondary" class="h-32 w-32 drop-shadow-tower">
          <span class="select-none text-3xl font-bold font-format1452">Details</span>
        </ButtonHexagon>
      </div>
    </nav>
    <div v-if="launched">
      <RemuRhythmPlayer />
    </div>
  </div>
</template>

<style scoped>
</style>