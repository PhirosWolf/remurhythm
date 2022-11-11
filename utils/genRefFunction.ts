/**
 * These functions are used to create template ref functions more easily
 * Example of a ref function: `:ref="(el) => {...}"`
 * See https://vuejs.org/guide/essentials/template-refs.html#function-refs for more info about ref functions
 */

type ComponentType = abstract new (...args: any) => any;
type CGE<T> = (el: T, ...args: Array<any>) => any; // CGE = Callback Generic Element
type CCI<T extends ComponentType> = (i: InstanceType<T>, ...args: Array<any>) => any; // CCI = Callback Component Instance
type RFG<T> = (...args: Array<any>) => ((el: T) => any); // RFG = Ref Function Generator

export function genRefFunction<T> (callback: CGE<T>): RFG<T> {
  return (...args) => ((el: T) => {
    callback(el, ...args);
  });
}

export function genRefFunctionForComponentInstance<T extends ComponentType> (callback: CCI<T>): RFG<InstanceType<T>> {
  return (...args) => ((el: InstanceType<T>) => {
    callback(el, ...args)
  });
}

// When putting a ref on a component, it will return its instance and not its html node.
// This one is for creating ref functions with the component's node and not its instance.
// Check https://vuejs.org/guide/typescript/composition-api.html#typing-component-template-refs for more info
export function genRefFunctionForComponentNode<T extends ComponentType, U> (callback: CGE<U>): RFG<InstanceType<T>> {
  return (...args) => ((el: InstanceType<T>) => {
    callback(el.$el, ...args);
  });
}