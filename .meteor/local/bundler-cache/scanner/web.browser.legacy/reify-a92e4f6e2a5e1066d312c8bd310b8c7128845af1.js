module.export({InnerPopper:function(){return InnerPopper},placements:function(){return placements},default:function(){return Popper}});var _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/objectWithoutPropertiesLoose",{default:function(v){_objectWithoutPropertiesLoose=v}},0);var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},1);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},2);var _inheritsLoose;module.link("@babel/runtime/helpers/inheritsLoose",{default:function(v){_inheritsLoose=v}},3);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},4);var React;module.link('react',{"*":function(v){React=v}},5);var PopperJS;module.link('popper.js',{default:function(v){PopperJS=v}},6);var ManagerContext;module.link('./Manager',{ManagerContext:function(v){ManagerContext=v}},7);var safeInvoke,unwrapArray;module.link('./utils',{safeInvoke:function(v){safeInvoke=v},unwrapArray:function(v){unwrapArray=v}},8);








var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: undefined,
      placement: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "popperInstance", void 0);

    _defineProperty(_assertThisInitialized(_this), "popperNode", null);

    _defineProperty(_assertThisInitialized(_this), "arrowNode", null);

    _defineProperty(_assertThisInitialized(_this), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      safeInvoke(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    _defineProperty(_assertThisInitialized(_this), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    _defineProperty(_assertThisInitialized(_this), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _extends({}, _this.props.modifiers, {
          arrow: _extends({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _extends({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    _defineProperty(_assertThisInitialized(_this), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    _defineProperty(_assertThisInitialized(_this), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    _defineProperty(_assertThisInitialized(_this), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    _defineProperty(_assertThisInitialized(_this), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = _assertThisInitialized(_this),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new PopperJS(referenceElement, popperNode, _this.getOptions());
    });

    _defineProperty(_assertThisInitialized(_this), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });

    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed) {
      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    safeInvoke(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return unwrapArray(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(React.Component);

_defineProperty(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});

var placements = PopperJS.placements;

function Popper(_ref) {
  var referenceElement = _ref.referenceElement,
      props = _objectWithoutPropertiesLoose(_ref, ["referenceElement"]);

  return React.createElement(ManagerContext.Consumer, null, function (_ref2) {
    var referenceNode = _ref2.referenceNode;
    return React.createElement(InnerPopper, _extends({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}