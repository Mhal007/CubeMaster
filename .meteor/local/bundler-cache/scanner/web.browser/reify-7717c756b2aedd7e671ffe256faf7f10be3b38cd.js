let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},4);




/**
 * A statistic can contain a numeric, icon, image, or text value.
 */

function StatisticValue(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      text = props.text;
  var classes = cx(useKeyOnly(text, 'text'), 'value', className);
  var rest = getUnhandledProps(StatisticValue, props);
  var ElementType = getElementType(StatisticValue, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

StatisticValue.handledProps = ["as", "children", "className", "content", "text"];
StatisticValue.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Format the value with smaller font size to fit nicely beside number values. */
  text: PropTypes.bool
} : {};
StatisticValue.create = createShorthandFactory(StatisticValue, function (content) {
  return {
    content: content
  };
});
module.exportDefault(StatisticValue);