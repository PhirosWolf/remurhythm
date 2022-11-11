<script lang="ts" setup>
import ButtonHexagon from '@/components/ButtonHexagon.vue';
import { genRefFunction, genRefFunctionForComponentNode } from '@/utils/genRefFunction';
import gsap from 'gsap';

const btnHexagonPropsPresets = useAppConfig().propsPresets.buttonHexagon;

// Defines if the game is launched (& displayed) or not
const launched = ref(false);
const launchBtnClicked = ref(false);

// The index defines the order of the elements which will gradually disappear
const elements = ref<Array<Array<Element>>>([]);

// Adds a number-Element pair to the elements ref above by returning
function addOrderedElem (elem: Element, order: number) {
  if (elements.value[order] === undefined) {
    elements.value[order] = [];
  }
  elements.value[order].push(elem);
}

// Ref function for ButtonHexagon (abbr. refFnBtnHex)
const refFnBtnHex = genRefFunctionForComponentNode<typeof ButtonHexagon, Element>((el, order: number) => {
  addOrderedElem(el, order);
});

// Ref function for Elements
const refFnElem = genRefFunction<Element>((el, order: number) => {
  addOrderedElem(el, order);
})

function launch () {
  // Guard condition to prevent double activation of this function
  if (launchBtnClicked.value) {
    return;
  }
  launchBtnClicked.value = true;

  const tl = gsap.timeline({
    paused: true,
    onComplete() {
      launched.value = true;
      // TODO: transition from homepage to player (+history push)
    },
    defaults: {
      opacity: 0,
      duration: 0.5
    }
  });
  
  for (let elemCollection of elements.value.filter((arr) => arr !== undefined && arr.length !== 0)) {
    tl.to(elemCollection, {}, '<50%');
  }

  tl.play();
}
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center gap-y-6">
    <!-- Idea: semi-transparent rhythm player animated (or not) in the bg rotated in different way near the border where it gets more opaque the closer it is to the border -->
    <!-- TODO: (3d) animation when play button is clicked? -->
    <header>
      <h1
        :ref="refFnElem(4)"
        class="text-center text-9xl font-format1452"
      >RemuRhythm</h1>
      <h2
        :ref="refFnElem(3)"
        class="text-center text-7xl font-format1452"
      >Practice rhythm in a fun way!</h2>
    </header>
    <nav class="flex flex-row justify-center items-center gap-x-12 w-2/3">
      <div class="flex-1 flex flex-row justify-end gap-x-5">
        <ButtonHexagon
          v-bind="btnHexagonPropsPresets.secondary"
          :ref="refFnBtnHex(0)"
          class="h-32 w-32 drop-shadow-tower"
        >
          <span class="select-none text-3xl font-bold font-format1452">???</span>
        </ButtonHexagon>
        <ButtonHexagon
          :ref="refFnBtnHex(1)"
          v-bind="btnHexagonPropsPresets.secondary"
          class="h-32 w-32 drop-shadow-tower"
        >
          <span class="select-none text-3xl font-bold font-format1452">Guide</span>
        </ButtonHexagon>
      </div>
      <div>
        <ButtonHexagon
          :ref="refFnBtnHex(2)"
          v-bind="btnHexagonPropsPresets.play"
          @click="launch"
          class="h-60 w-60 drop-shadow-tower"
        >
          <span class="select-none text-5xl font-bold font-format1452">Launch!</span>
        </ButtonHexagon>
      </div>
      <div class="flex-1 flex flex-row justify-start gap-x-5">
        <ButtonHexagon
          :ref="refFnBtnHex(1)"
          v-bind="btnHexagonPropsPresets.secondary"
          class="h-32 w-32 drop-shadow-tower"
        >
          <span class="select-none text-3xl font-bold font-format1452">Credits</span>
        </ButtonHexagon>
        <ButtonHexagon
          :ref="refFnBtnHex(0)"
          v-bind="btnHexagonPropsPresets.secondary"
          class="h-32 w-32 drop-shadow-tower"
        >
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