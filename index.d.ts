/**
 * This took me quite a while to understand the "declarations" since the TS docs are really vague about them.
 * Below is how I understand it, but it may still be wrong.
 * -----------------------------------------------------
 * `declare` can add or augment a type (namespaces, classes, modules, ...) used **in** the scope
 * of the declaration file (e.g. global if index.d.ts, dir/foo.ts for dir/foo.d.ts).
 * Inside, if the declaration describes which types (interfaces, enums and so on) are used
 * in the module/namespace/...
 * If in this declaration, for example, you see `export interface Bar`, it means that
 * the module/namespace/... is exporting this interface whereas, by default, the interface will only
 * be seen by the module/namespace/...
 * `declare global` modifies what types are available globally whereas `interface Bar` will only be
 * available in `index.ts` (if it even exists) if you are in `index.d.ts`.
 * When, in a .d.ts file, you only add/augment types via `declare`, then it is important to always
 * add `export {};` at the end since the .d.ts file describes ALL the types used by the scope
 * of the declaration.
 */

import type { ButtonHexagonProps } from '@/utils/types/props';

interface PropsPreset<T> {
  [s: string]: T;
}

interface PropsPresets {
  buttonHexagon: PropsPreset<ButtonHexagonProps>;
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    propsPresets: PropsPresets;
  }
};

export {};