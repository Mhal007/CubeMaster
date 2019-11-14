module.export({createInnerPrefix:function(){return createInnerPrefix},createInnerSuffix:function(){return createInnerSuffix}});var createEllipsisItem;module.link('./itemFactories',{createEllipsisItem:function(v){createEllipsisItem=v}},0);
var createInnerPrefix = function createInnerPrefix(firstGroupEnd, innerGroupStart, pageFactory) {
  var prefixPage = innerGroupStart - 1;
  var showEllipsis = prefixPage !== firstGroupEnd + 1;
  var prefixFactory = showEllipsis ? createEllipsisItem : pageFactory;
  return prefixFactory(prefixPage);
};
var createInnerSuffix = function createInnerSuffix(innerGroupEnd, lastGroupStart, pageFactory) {
  var suffixPage = innerGroupEnd + 1;
  var showEllipsis = suffixPage !== lastGroupStart - 1;
  var suffixFactory = showEllipsis ? createEllipsisItem : pageFactory;
  return suffixFactory(suffixPage);
};