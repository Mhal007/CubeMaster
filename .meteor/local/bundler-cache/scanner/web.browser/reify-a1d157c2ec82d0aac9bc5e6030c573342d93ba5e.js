module.export({default:()=>BreadcrumbSection});let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},1);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},2);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},3);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},4);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},5);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},6);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},7);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},8);let cx;module.link('classnames',{default(v){cx=v}},9);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},10);let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},11);let childrenUtils,createShorthandFactory,customPropTypes,getUnhandledProps,getElementType,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getUnhandledProps(v){getUnhandledProps=v},getElementType(v){getElementType=v},useKeyOnly(v){useKeyOnly=v}},12);












/**
 * A section sub-component for Breadcrumb component.
 */

var BreadcrumbSection =
/*#__PURE__*/
function (_Component) {
  _inherits(BreadcrumbSection, _Component);

  function BreadcrumbSection() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BreadcrumbSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BreadcrumbSection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "computeElementType", function () {
      var _this$props = _this.props,
          link = _this$props.link,
          onClick = _this$props.onClick;
      if (link || onClick) return 'a';
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      return _invoke(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  _createClass(BreadcrumbSection, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          active = _this$props2.active,
          children = _this$props2.children,
          className = _this$props2.className,
          content = _this$props2.content,
          href = _this$props2.href;
      var classes = cx(useKeyOnly(active, 'active'), 'section', className);
      var rest = getUnhandledProps(BreadcrumbSection, this.props);
      var ElementType = getElementType(BreadcrumbSection, this.props, this.computeElementType);
      return React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        href: href,
        onClick: this.handleClick
      }), childrenUtils.isNil(children) ? content : children);
    }
  }]);

  return BreadcrumbSection;
}(Component);

_defineProperty(BreadcrumbSection, "handledProps", ["active", "as", "children", "className", "content", "href", "link", "onClick"]);


BreadcrumbSection.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Style as the currently active section. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: customPropTypes.every([customPropTypes.disallow(['link']), PropTypes.string]),

  /** Render as an `a` tag instead of a `div`. */
  link: customPropTypes.every([customPropTypes.disallow(['href']), PropTypes.bool]),

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func
} : {};
BreadcrumbSection.create = createShorthandFactory(BreadcrumbSection, function (content) {
  return {
    content: content,
    link: true
  };
});