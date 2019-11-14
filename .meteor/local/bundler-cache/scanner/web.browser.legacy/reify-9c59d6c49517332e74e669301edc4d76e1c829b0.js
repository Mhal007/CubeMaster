var _toConsumableArray;module.link("@babel/runtime/helpers/toConsumableArray",{default:function(v){_toConsumableArray=v}},0);var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},1);var _values;module.link("lodash/values",{default:function(v){_values=v}},2);var _keys;module.link("lodash/keys",{default:function(v){_keys=v}},3);var _without;module.link("lodash/without",{default:function(v){_without=v}},4);var _map;module.link("lodash/map",{default:function(v){_map=v}},5);var _pickBy;module.link("lodash/pickBy",{default:function(v){_pickBy=v}},6);var cx;module.link('classnames',{default:function(v){cx=v}},7);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},8);var React;module.link('react',{default:function(v){React=v}},9);var childrenUtils,customPropTypes,getElementType,getUnhandledProps,numberToWordMap,SUI,useKeyOnly,useKeyOrValueAndKey,useValueAndKey,useWidthProp;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},numberToWordMap:function(v){numberToWordMap=v},SUI:function(v){SUI=v},useKeyOnly:function(v){useKeyOnly=v},useKeyOrValueAndKey:function(v){useKeyOrValueAndKey=v},useValueAndKey:function(v){useValueAndKey=v},useWidthProp:function(v){useWidthProp=v}},10);var Step;module.link('./Step',{default:function(v){Step=v}},11);











var numberMap = process.env.NODE_ENV !== "production" ? _pickBy(numberToWordMap, function (val, key) {
  return key <= 8;
}) : {};
/**
 * A set of steps.
 */

function StepGroup(props) {
  var attached = props.attached,
      children = props.children,
      className = props.className,
      content = props.content,
      fluid = props.fluid,
      items = props.items,
      ordered = props.ordered,
      size = props.size,
      stackable = props.stackable,
      unstackable = props.unstackable,
      vertical = props.vertical,
      widths = props.widths;
  var classes = cx('ui', size, useKeyOnly(fluid, 'fluid'), useKeyOnly(ordered, 'ordered'), useKeyOnly(unstackable, 'unstackable'), useKeyOnly(vertical, 'vertical'), useKeyOrValueAndKey(attached, 'attached'), useValueAndKey(stackable, 'stackable'), useWidthProp(widths), 'steps', className);
  var rest = getUnhandledProps(StepGroup, props);
  var ElementType = getElementType(StepGroup, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  if (!childrenUtils.isNil(content)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), _map(items, function (item) {
    return Step.create(item);
  }));
}

StepGroup.handledProps = ["as", "attached", "children", "className", "content", "fluid", "items", "ordered", "size", "stackable", "unstackable", "vertical", "widths"];
StepGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Steps can be attached to other elements. */
  attached: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['top', 'bottom'])]),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A fluid step takes up the width of its container. */
  fluid: PropTypes.bool,

  /** Shorthand array of props for Step. */
  items: customPropTypes.collectionShorthand,

  /** A step can show a ordered sequence of steps. */
  ordered: PropTypes.bool,

  /** Steps can have different sizes. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium')),

  /** A step can stack vertically only on smaller screens. */
  stackable: PropTypes.oneOf(['tablet']),

  /** A step can prevent itself from stacking on mobile. */
  unstackable: PropTypes.bool,

  /** A step can be displayed stacked vertically. */
  vertical: PropTypes.bool,

  /** Steps can be divided evenly inside their parent. */
  widths: PropTypes.oneOf([].concat(_toConsumableArray(_keys(numberMap)), _toConsumableArray(_keys(numberMap).map(Number)), _toConsumableArray(_values(numberMap))))
} : {};
module.exportDefault(StepGroup);