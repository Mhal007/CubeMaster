var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default:function(v){_objectSpread=v}},1);var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},2);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},3);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},4);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},5);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},6);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},7);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},8);var _pick;module.link("lodash/pick",{default:function(v){_pick=v}},9);var _includes;module.link("lodash/includes",{default:function(v){_includes=v}},10);var _reduce;module.link("lodash/reduce",{default:function(v){_reduce=v}},11);var _isEmpty;module.link("lodash/isEmpty",{default:function(v){_isEmpty=v}},12);var _invoke;module.link("lodash/invoke",{default:function(v){_invoke=v}},13);var Ref;module.link('@stardust-ui/react-component-ref',{Ref:function(v){Ref=v}},14);var cx;module.link('classnames',{default:function(v){cx=v}},15);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},16);var React,createRef,Fragment,isValidElement;module.link('react',{default:function(v){React=v},createRef:function(v){createRef=v},Fragment:function(v){Fragment=v},isValidElement:function(v){isValidElement=v}},17);var shallowEqual;module.link('shallowequal',{default:function(v){shallowEqual=v}},18);var Component,childrenUtils,customPropTypes,doesNodeContainClick,eventStack,getElementType,getUnhandledProps,isBrowser,useKeyOnly;module.link('../../lib',{AutoControlledComponent:function(v){Component=v},childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},doesNodeContainClick:function(v){doesNodeContainClick=v},eventStack:function(v){eventStack=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},isBrowser:function(v){isBrowser=v},useKeyOnly:function(v){useKeyOnly=v}},19);var Icon;module.link('../../elements/Icon',{default:function(v){Icon=v}},20);var MountNode;module.link('../../addons/MountNode',{default:function(v){MountNode=v}},21);var Portal;module.link('../../addons/Portal',{default:function(v){Portal=v}},22);var ModalHeader;module.link('./ModalHeader',{default:function(v){ModalHeader=v}},23);var ModalContent;module.link('./ModalContent',{default:function(v){ModalContent=v}},24);var ModalActions;module.link('./ModalActions',{default:function(v){ModalActions=v}},25);var ModalDescription;module.link('./ModalDescription',{default:function(v){ModalDescription=v}},26);var canFit,getLegacyStyles,isLegacy;module.link('./utils',{canFit:function(v){canFit=v},getLegacyStyles:function(v){getLegacyStyles=v},isLegacy:function(v){isLegacy=v}},27);




























/**
 * A modal displays content that temporarily blocks interactions with the main view of a site.
 * @see Confirm
 * @see Portal
 */
var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "legacy", isBrowser() && isLegacy());

    _defineProperty(_assertThisInitialized(_this), "ref", createRef());

    _defineProperty(_assertThisInitialized(_this), "dimmerRef", createRef());

    _defineProperty(_assertThisInitialized(_this), "latestDocumentMouseDownEvent", null);

    _defineProperty(_assertThisInitialized(_this), "getMountNode", function () {
      return isBrowser() ? _this.props.mountNode || document.body : null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionsOverrides", function (predefinedProps) {
      return {
        onActionClick: function onActionClick(e, actionProps) {
          _invoke(predefinedProps, 'onActionClick', e, actionProps);

          _invoke(_this.props, 'onActionClick', e, _this.props);

          _this.handleClose(e);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (e) {
      _invoke(_this.props, 'onClose', e, _this.props);

      _this.trySetState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentMouseDown", function (e) {
      _this.latestDocumentMouseDownEvent = e;
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (e) {
      var closeOnDimmerClick = _this.props.closeOnDimmerClick;
      var currentDocumentMouseDownEvent = _this.latestDocumentMouseDownEvent;
      _this.latestDocumentMouseDownEvent = null;
      if (!closeOnDimmerClick || doesNodeContainClick(_this.ref.current, currentDocumentMouseDownEvent) || doesNodeContainClick(_this.ref.current, e)) return;

      _invoke(_this.props, 'onClose', e, _this.props);

      _this.trySetState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleIconOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          _invoke(predefinedProps, 'onClick', e);

          _this.handleClose(e);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function (e) {
      _invoke(_this.props, 'onOpen', e, _this.props);

      _this.trySetState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePortalMount", function (e) {
      var eventPool = _this.props.eventPool;

      _this.setState({
        scrolling: false
      });

      _this.setPositionAndClassNames();

      eventStack.sub('mousedown', _this.handleDocumentMouseDown, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });
      eventStack.sub('click', _this.handleDocumentClick, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });

      _invoke(_this.props, 'onMount', e, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "handlePortalUnmount", function (e) {
      var eventPool = _this.props.eventPool;
      cancelAnimationFrame(_this.animationRequestId);
      eventStack.unsub('mousedown', _this.handleDocumentMouseDown, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });
      eventStack.unsub('click', _this.handleDocumentClick, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });

      _invoke(_this.props, 'onUnmount', e, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "setDimmerNodeStyle", function () {
      var current = _this.dimmerRef.current;

      if (current && current.style && current.style.display !== 'flex') {
        current.style.setProperty('display', 'flex', 'important');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setPositionAndClassNames", function () {
      var _this$props = _this.props,
          centered = _this$props.centered,
          dimmer = _this$props.dimmer;
      var scrolling;
      var newState = {};

      if (_this.ref.current) {
        var rect = _this.ref.current.getBoundingClientRect();

        var isFitted = canFit(rect);
        scrolling = !isFitted; // Styles should be computed for IE11

        var legacyStyles = _this.legacy ? getLegacyStyles(isFitted, centered, rect) : {};

        if (!shallowEqual(_this.state.legacyStyles, legacyStyles)) {
          newState.legacyStyles = legacyStyles;
        }

        if (_this.state.scrolling !== scrolling) {
          newState.scrolling = scrolling;
        }
      }

      var classes = cx(useKeyOnly(dimmer, 'dimmable dimmed'), useKeyOnly(dimmer === 'blurring', ' blurring'), useKeyOnly(scrolling, ' scrolling'));
      if (_this.state.mountClasses !== classes) newState.mountClasses = classes;
      if (!_isEmpty(newState)) _this.setState(newState);
      _this.animationRequestId = requestAnimationFrame(_this.setPositionAndClassNames);

      _this.setDimmerNodeStyle();
    });

    _defineProperty(_assertThisInitialized(_this), "renderContent", function (rest) {
      var _this$props2 = _this.props,
          actions = _this$props2.actions,
          basic = _this$props2.basic,
          children = _this$props2.children,
          className = _this$props2.className,
          closeIcon = _this$props2.closeIcon,
          content = _this$props2.content,
          header = _this$props2.header,
          mountNode = _this$props2.mountNode,
          size = _this$props2.size,
          style = _this$props2.style;
      var _this$state = _this.state,
          legacyStyles = _this$state.legacyStyles,
          mountClasses = _this$state.mountClasses,
          scrolling = _this$state.scrolling;
      var classes = cx('ui', size, useKeyOnly(basic, 'basic'), useKeyOnly(_this.legacy, 'legacy'), useKeyOnly(scrolling, 'scrolling'), 'modal transition visible active', className);
      var ElementType = getElementType(Modal, _this.props);
      var closeIconName = closeIcon === true ? 'close' : closeIcon;
      var closeIconJSX = Icon.create(closeIconName, {
        overrideProps: _this.handleIconOverrides
      });
      return React.createElement(Ref, {
        innerRef: _this.ref
      }, React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        style: _objectSpread({}, legacyStyles, style)
      }), React.createElement(MountNode, {
        className: mountClasses,
        node: mountNode
      }), closeIconJSX, childrenUtils.isNil(children) ? React.createElement(Fragment, null, ModalHeader.create(header, {
        autoGenerateKey: false
      }), ModalContent.create(content, {
        autoGenerateKey: false
      }), ModalActions.create(actions, {
        overrideProps: _this.handleActionsOverrides
      })) : children));
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handlePortalUnmount();
    } // Do not access document when server side rendering

  }, {
    key: "render",
    value: function render() {
      var open = this.state.open;
      var _this$props3 = this.props,
          centered = _this$props3.centered,
          closeOnDocumentClick = _this$props3.closeOnDocumentClick,
          dimmer = _this$props3.dimmer,
          eventPool = _this$props3.eventPool,
          trigger = _this$props3.trigger;
      var mountNode = this.getMountNode(); // Short circuit when server side rendering

      if (!isBrowser()) {
        return isValidElement(trigger) ? trigger : null;
      }

      var unhandled = getUnhandledProps(Modal, this.props);
      var portalPropNames = Portal.handledProps;

      var rest = _reduce(unhandled, function (acc, val, key) {
        if (!_includes(portalPropNames, key)) acc[key] = val;
        return acc;
      }, {});

      var portalProps = _pick(unhandled, portalPropNames); // wrap dimmer modals


      var dimmerClasses = cx('ui', dimmer === 'inverted' && 'inverted', !centered && 'top aligned', 'page modals dimmer transition visible active'); // Heads up!
      //
      // The SUI CSS selector to prevent the modal itself from blurring requires an immediate .dimmer child:
      // .blurring.dimmed.dimmable>:not(.dimmer) { ... }
      //
      // The .blurring.dimmed.dimmable is the body, so that all body content inside is blurred.
      // We need the immediate child to be the dimmer to :not() blur the modal itself!
      // Otherwise, the portal div is also blurred, blurring the modal.
      //
      // We cannot them wrap the modalJSX in an actual <Dimmer /> instead, we apply the dimmer classes to the <Portal />.

      return React.createElement(Portal, _extends({
        closeOnDocumentClick: closeOnDocumentClick
      }, portalProps, {
        trigger: trigger,
        eventPool: eventPool,
        mountNode: mountNode,
        open: open,
        onClose: this.handleClose,
        onMount: this.handlePortalMount,
        onOpen: this.handleOpen,
        onUnmount: this.handlePortalUnmount
      }), React.createElement("div", {
        className: dimmerClasses,
        ref: this.dimmerRef
      }, this.renderContent(rest)));
    }
  }]);

  return Modal;
}(Component);

_defineProperty(Modal, "defaultProps", {
  centered: true,
  dimmer: true,
  closeOnDimmerClick: true,
  closeOnDocumentClick: false,
  eventPool: 'Modal'
});

_defineProperty(Modal, "autoControlledProps", ['open']);

_defineProperty(Modal, "Header", ModalHeader);

_defineProperty(Modal, "Content", ModalContent);

_defineProperty(Modal, "Description", ModalDescription);

_defineProperty(Modal, "Actions", ModalActions);

_defineProperty(Modal, "handledProps", ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"]);

Modal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: customPropTypes.itemShorthand,

  /** A modal can reduce its complexity */
  basic: PropTypes.bool,

  /** A modal can be vertically centered in the viewport */
  centered: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for the close icon. Closes the modal on click. */
  closeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.bool]),

  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick: PropTypes.bool,

  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick: PropTypes.bool,

  /** Simple text content for the Modal. */
  content: customPropTypes.itemShorthand,

  /** Initial value of open. */
  defaultOpen: PropTypes.bool,

  /** A Modal can appear in a dimmer. */
  dimmer: PropTypes.oneOf([true, 'inverted', 'blurring']),

  /** Event pool namespace that is used to handle component events */
  eventPool: PropTypes.string,

  /** Modal displayed above the content in bold. */
  header: customPropTypes.itemShorthand,

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: PropTypes.any,

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onActionClick: PropTypes.func,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: PropTypes.func,

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: PropTypes.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: PropTypes.func,

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: PropTypes.func,

  /** Controls whether or not the Modal is displayed. */
  open: PropTypes.bool,

  /** A modal can vary in size */
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'fullscreen']),

  /** Custom styles. */
  style: PropTypes.object,

  /** Element to be rendered in-place where the portal is defined. */
  trigger: PropTypes.node
  /**
   * NOTE: Any unhandled props that are defined in Portal are passed-through
   * to the wrapping Portal.
   */

} : {};
module.exportDefault(Modal);