<script lang="ts" setup>
// TODO: move game state etc. into a dedicated composable

interface Line {
  loop: boolean
  // individual reading bar position
}

interface PlayerState {
  lines: Array<Line>
}

const exitBtnProps = {
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
  hexagonScaling: 1.3
};

const playerState: PlayerState = reactive({
  lines: []
});
</script>

<template>
  <!-- Should fit in one screen -->
  <div>
    <div id="player">
      <div id="lines">
        <div v-for="line in playerState.lines">
          <!-- + Individual reading bar -->
          <hr />
        </div>
      </div>
    </div>
    <div id="controls"></div>
    <div id="edit-tools"></div>
    <div id="presets">
      <!-- Normal 4/4 (default?), Waltz 3/4, 5/4, Duplets (3, 5 & more), polyrhythms -->
    </div>
    <ButtonHexagon v-bind="exitBtnProps">
      <span class="select-none text-3xl font-bold font-format1452">Exit</span>
    </ButtonHexagon>
  </div>
</template>

<style scoped></style>
