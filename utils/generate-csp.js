const generateCSP = ({ nonce }) => {
  const policy = {};

  // adder function for our policy object
  const add = (directive, value) => {
    const curr = policy[directive];
    policy[directive] = curr ? [...curr, value] : [value];
  };

  add("default-src", `'none'`);
  add("script-src", `'nonce-${nonce}' http://localhost:*`);
  add("style-src", `'nonce-${nonce}'`);
  add("img-src", `'self' http://localhost:*`);

  return Object.entries(policy)
    .map(([key, value]) => `${key} ${value.join(" ")}`)
    .join("; ");
};

export default generateCSP;
