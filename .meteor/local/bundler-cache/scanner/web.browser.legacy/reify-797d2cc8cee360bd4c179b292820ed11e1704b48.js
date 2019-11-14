var _toConsumableArray;module.link("@babel/runtime/helpers/toConsumableArray",{default:function(v){_toConsumableArray=v}},0);var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},1);var cx;module.link('classnames',{default:function(v){cx=v}},2);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},3);var React;module.link('react',{default:function(v){React=v}},4);var customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useMultipleProp,useTextAlignProp,useVerticalAlignProp,useWidthProp;module.link('../../lib',{customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useKeyOnly:function(v){useKeyOnly=v},useMultipleProp:function(v){useMultipleProp=v},useTextAlignProp:function(v){useTextAlignProp=v},useVerticalAlignProp:function(v){useVerticalAlignProp=v},useWidthProp:function(v){useWidthProp=v}},5);





/**
 * A row sub-component for Grid.
 */

function GridRow(props) {
  var centered = props.centered,
      children = props.children,
      className = props.className,
      color = props.color,
      columns = props.columns,
      divided = props.divided,
      only = props.only,
      reversed = props.reversed,
      stretched = props.stretched,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign;
  var classes = cx(color, useKeyOnly(centered, 'centered'), useKeyOnly(divided, 'divided'), useKeyOnly(stretched, 'stretched'), useMultipleProp(only, 'only'), useMultipleProp(reversed, 'reversed'), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), useWidthProp(columns, 'column', true), 'row', className);
  var rest = getUnhandledProps(GridRow, props);
  var ElementType = getElementType(GridRow, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), children);
}

GridRow.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
GridRow.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A row can have its columns centered. */
  centered: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A grid row can be colored. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Represents column count per line in Row. */
  columns: PropTypes.oneOf([].concat(_toConsumableArray(SUI.WIDTHS), ['equal'])),

  /** A row can have dividers between its columns. */
  divided: PropTypes.bool,

  /** A row can appear only for a specific device, or screen sizes. */
  only: customPropTypes.multipleProp(SUI.VISIBILITY),

  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: customPropTypes.multipleProp(['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically']),

  /** A row can stretch its contents to take up the entire column height. */
  stretched: PropTypes.bool,

  /** A row can specify its text alignment. */
  textAlign: PropTypes.oneOf(SUI.TEXT_ALIGNMENTS),

  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS)
} : {};
module.exportDefault(GridRow);