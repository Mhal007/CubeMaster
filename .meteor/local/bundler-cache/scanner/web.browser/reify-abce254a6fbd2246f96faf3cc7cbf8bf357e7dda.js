module.export({default:()=>PopupHeader});let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},4);




/**
 * A PopupHeader displays a header in a Popover.
 */

function PopupHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = cx('header', className);
  var rest = getUnhandledProps(PopupHeader, props);
  var ElementType = getElementType(PopupHeader, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}
PopupHeader.handledProps = ["as", "children", "className", "content"];
PopupHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : {};
PopupHeader.create = createShorthandFactory(PopupHeader, function (children) {
  return {
    children: children
  };
});