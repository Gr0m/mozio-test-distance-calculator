function debounce<T extends Function>(
  callback: T,
  delay: number,
  leading?: boolean
): (...args: any[]) => void {
  let timer: ReturnType<typeof setTimeout> | null;
  return function (this: any, ...args: any[]) {
    const context = this;
    if (leading && !timer) {
      callback.apply(context, args);
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      if (!leading) callback.apply(context, args);
      timer = null;
    }, delay);
  };
}

export default debounce;
