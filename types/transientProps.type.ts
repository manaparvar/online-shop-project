type TransientProps<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};

export default TransientProps;
