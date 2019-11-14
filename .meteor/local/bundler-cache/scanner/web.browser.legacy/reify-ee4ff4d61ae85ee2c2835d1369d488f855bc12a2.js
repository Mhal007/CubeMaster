module.export({default:function(){return RefForward}});var _classCallCheck;module.link("@babel/runtime/helpers/esm/classCallCheck",{default:function(v){_classCallCheck=v}},0);var _createClass;module.link("@babel/runtime/helpers/esm/createClass",{default:function(v){_createClass=v}},1);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/esm/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},2);var _getPrototypeOf;module.link("@babel/runtime/helpers/esm/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},3);var _assertThisInitialized;module.link("@babel/runtime/helpers/esm/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},4);var _inherits;module.link("@babel/runtime/helpers/esm/inherits",{default:function(v){_inherits=v}},5);var _defineProperty;module.link("@babel/runtime/helpers/esm/defineProperty",{default:function(v){_defineProperty=v}},6);var PropTypes;module.link('prop-types',{"*":function(v){PropTypes=v}},7);var React;module.link('react',{"*":function(v){React=v}},8);var handleRef;module.link('./handleRef',{default:function(v){handleRef=v}},9);var refPropType;module.link('./types',{refPropType:function(v){refPropType=v}},10);











var RefForward =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RefForward, _React$Component);

  function RefForward() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RefForward);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RefForward)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleRefOverride", function (node) {
      var _this$props = _this.props,
          children = _this$props.children,
          innerRef = _this$props.innerRef;
      handleRef(children.ref, node);
      handleRef(innerRef, node);
    });

    return _this;
  }

  _createClass(RefForward, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.cloneElement(children, {
        ref: this.handleRefOverride
      });
    }
  }]);

  return RefForward;
}(React.Component);

_defineProperty(RefForward, "displayName", 'RefForward');

_defineProperty(RefForward, "propTypes", process.env.NODE_ENV !== 'production' ? {
  children: PropTypes.element.isRequired,
  innerRef: refPropType.isRequired
} : {});

