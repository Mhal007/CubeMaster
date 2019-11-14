let _isNil;module.link("lodash/isNil",{default(v){_isNil=v}},0);

var fitsMaxWidth = function fitsMaxWidth(width, maxWidth) {
  return _isNil(maxWidth) ? true : width <= maxWidth;
};

var fitsMinWidth = function fitsMinWidth(width, minWidth) {
  return _isNil(minWidth) ? true : width >= minWidth;
};

var isVisible = function isVisible(width, _ref) {
  var maxWidth = _ref.maxWidth,
      minWidth = _ref.minWidth;
  return fitsMinWidth(width, minWidth) && fitsMaxWidth(width, maxWidth);
};

module.exportDefault(isVisible);