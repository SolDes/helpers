module.exports = (collection, iteratee) => {
  return collection.reduce((rv, x) => {
    const v = iteratee instanceof Function ? iteratee(x) : x[iteratee];
    const el = rv.find(r => r && r.key === v);

    if (el) {
      el.values.push(x);
    } else {
      rv.push({
        key: v,
        values: [x]
      });
    }
    return rv;
  }, []);
};

