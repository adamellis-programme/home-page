const get = (el) => {
  if (el) {
    const element = document.querySelector(el);
    return element;
  }

  throw new Error('--------> enter element <--------');
};

export { get };
