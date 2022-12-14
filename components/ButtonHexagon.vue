<script lang="ts" setup>
import gsap from 'gsap';
import { getHexagonSvg, applyColorToHexagon } from '@/utils/genHexagonSvg';
import type { ButtonHexagonProps } from '@/utils/types/props';
import type { Svg } from '@svgdotjs/svg.js';

interface Emits {
  (e: 'mouseenter'): void;
  (e: 'mouseleave'): void;
  (e: 'click'): void;
}

// I'm using vite-plugin-vue-type-imports to make it work.
// See https://github.com/vuejs/core/issues/4294 for why it doesn't work without it
const props = withDefaults(defineProps<ButtonHexagonProps>(), {
  hexagonScaling: 1.5
});
const { backgroundColor, foregroundColor, hexagonScaling } = toRefs(props);

const emit = defineEmits<Emits>();

const container = ref<HTMLElement|null>(null); // div containing the hexagons
const content = ref<HTMLElement|null>(null); // span containing the button's content

onMounted(() => {
  // Generate the hexagonal SVGs
  // The hexagons must be generated on the client side otherwise it won't work
  const backHexagon = getHexagonSvg();
  const frontHexagon = getHexagonSvg();

  // Color the hexagons with the color/gradient given by the props
  applyColorToHexagon(backHexagon, backgroundColor.value);
  applyColorToHexagon(frontHexagon, foregroundColor.value);

  /**
   * Tailwind classes to correctly position and transform the hexagons
   * The front hexagon has pointer-events-none in order to trigger the mouse enter/leave events
   * only on the back hexagon which is larger than the front one.
   **/
  backHexagon.addClass('absolute inset-0 m-auto w-full h-full z-0 origin-center');
  frontHexagon.addClass('absolute inset-0 m-auto w-[85%] h-[85%] z-10 origin-center pointer-events-none');

  // Retrieves the <polygon> elements
  const backHexagonPolygon = backHexagon.findOne('polygon.hexagon');
  const frontHexagonPolygon = frontHexagon.findOne('polygon.hexagon');

  // Tailwind classes for transforming the cursor to a pointer when hovering the hexagons (and not their boxes)
  backHexagonPolygon.addClass('hover:cursor-pointer');
  frontHexagonPolygon.addClass('hover:cursor-pointer');

  // Creates the GSAP timeline for the back and front hexagons
  const tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.3,
      ease: 'power1.inOut',
      scale: hexagonScaling.value,
    }
  })
  .to(backHexagon.node, {
    rotate: -60
  })
  .to(frontHexagon.node, {
    rotate: 60
  }, '<0.1')
  .to(content.value, {}, '<');

  // Make the back hexagon listen to mouse enter/leave events in order to trigger animation and event emits
  backHexagonPolygon.node.addEventListener('mouseenter', () => {
    tl.play();
    emit('mouseenter');
  });
  backHexagonPolygon.node.addEventListener('mouseleave', () => {
    tl.reverse();
    emit('mouseleave');
  });
  backHexagonPolygon.node.addEventListener('click', () => {
    emit('click');
  });

  // Appends the hexagonal SVGs to the container
  backHexagon.addTo(container.value);
  frontHexagon.addTo(container.value);
});
</script>

<template>
  <div ref="container" class="relative">
    <div ref="content" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
      <slot />
    </div>
  </div>
</template>

<style scoped>
</style>
