let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},4);




/**
 * Used in some Button types, such as `animated`.
 */

function ButtonContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      hidden = props.hidden,
      visible = props.visible;
  var classes = cx(useKeyOnly(visible, 'visible'), useKeyOnly(hidden, 'hidden'), 'content', className);
  var rest = getUnhandledProps(ButtonContent, props);
  var ElementType = getElementType(ButtonContent, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

ButtonContent.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
ButtonContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Initially hidden, visible on hover. */
  hidden: PropTypes.bool,

  /** Initially visible, hidden on hover. */
  visible: PropTypes.bool
} : {};
module.exportDefault(ButtonContent);