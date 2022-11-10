import type { ButtonHexagonProps as Props } from '@/utils/types/props';

const play: Props = {
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

const secondary: Props = {
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

const exit: Props = {
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

export default {
  play,
  secondary,
  exit
};