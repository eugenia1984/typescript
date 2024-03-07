export function Decorator(
  target: Object,
  key: string | symbol,
  descriptor: TypedPropertyDescriptor<Function>
) {
  return {
    value: function (...args: any[]) {
      console.log("arguments: " + args);
      console.log("optional pre-processing");
      const result = descriptor.value.apply(target, args);
      console.log("optional post-processing");
      return result;
    },
  };
}

export function Positives(
  target: Object,
  key: string | symbol,
  descriptor: TypedPropertyDescriptor<Function>
) {
  return {
    value: function (...args: any[]) {
      for (let arg of args)
        if (typeof arg == "number" && arg < 0) throw "Invalid value";
      const result = descriptor.value.apply(target, args);
      return result;
    },
  };
}
