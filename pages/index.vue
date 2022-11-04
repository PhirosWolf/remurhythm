<script lang="ts" setup>
// Hexagonal button options (props)
const playBtnProps = {
  foregroundColor: {
    type: 'linear',
    rotate: 200,
    stops: [
      {
        color: 'hsl(120 90% 70%)',
        offset: 0
      },
      {
        color: 'hsl(80 90% 60%)',
        offset: 1
      }
    ]
  },
  backgroundColor: {
    type: 'linear',
    rotate: 75,
    stops: [
      {
        color: 'hsl(120 90% 5%)',
        offset: 0
      },
      {
        color: 'hsl(80 90% 5%)',
        offset: 1
      }
    ]
  },
  hexagonScaling: 1.4
};

const secondaryBtnProps = {
  foregroundColor: {
    type: 'linear',
    rotate: 200,
    stops: [
      {
        color: 'hsl(240 90% 70%)',
        offset: 0
      },
      {
        color: 'hsl(270 90% 70%)',
        offset: 1
      }
    ]
  },
  backgroundColor: {
    type: 'linear',
    rotate: 75,
    stops: [
      {
        color: 'hsl(240 90% 5%)',
        offset: 0
      },
      {
        color: 'hsl(270 90% 5%)',
        offset: 1
      }
    ]
  },
  hexagonScaling: 1.3
};
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
        <ButtonHexagon v-bind="secondaryBtnProps" class="h-32 w-32 drop-shadow-tower">
          <span class="select-none text-3xl font-bold font-format1452">???</span>
        </ButtonHexagon>
        <ButtonHexagon v-bind="secondaryBtnProps" class="h-32 w-32 drop-shadow-tower">
          <span class="select-none text-3xl font-bold font-format1452">Guide</span>
        </ButtonHexagon>
      </div>
      <div>
        <ButtonHexagon v-bind="playBtnProps" class="h-60 w-60 drop-shadow-tower-5">
        <span class="select-none text-5xl font-bold font-format1452">Launch!</span>
      </ButtonHexagon>
      </div>
      <div class="flex-1 flex flex-row justify-start gap-x-5">
        <ButtonHexagon v-bind="secondaryBtnProps" class="h-32 w-32 drop-shadow-tower">
          <span class="select-none text-3xl font-bold font-format1452">Credits</span>
        </ButtonHexagon>
        <ButtonHexagon v-bind="secondaryBtnProps" class="h-32 w-32 drop-shadow-tower">
          <span class="select-none text-3xl font-bold font-format1452">Details</span>
        </ButtonHexagon>
      </div>
    </nav>
  </div>
</template>

<style scoped>
</style>