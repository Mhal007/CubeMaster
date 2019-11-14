var nullRefObject = {
  current: null // A map of created ref objects to provide memoization.

};
var refObjects = new WeakMap();
/** Creates a React ref object from existing DOM node. */

var toRefObject = function toRefObject(node) {
  // A "null" is not valid key for a WeakMap
  if (node === null) {
    return nullRefObject;
  }

  if (refObjects.has(node)) {
    return refObjects.get(node);
  }

  var refObject = {
    current: node
  };
  refObjects.set(node, refObject);
  return refObject;
};

module.exportDefault(toRefObject);