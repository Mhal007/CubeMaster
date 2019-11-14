let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _map;module.link("lodash/map",{default(v){_map=v}},1);let cx;module.link('classnames',{default(v){cx=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let React;module.link('react',{default(v){React=v}},4);let childrenUtils,createHTMLImage,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createHTMLImage(v){createHTMLImage=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},5);





/**
 * A feed can contain an extra content.
 */

function FeedExtra(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      images = props.images,
      text = props.text;
  var classes = cx(useKeyOnly(images, 'images'), useKeyOnly(content || text, 'text'), 'extra', className);
  var rest = getUnhandledProps(FeedExtra, props);
  var ElementType = getElementType(FeedExtra, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  } // TODO need a "collection factory" to handle creating multiple image elements and their keys


  var imageElements = _map(images, function (image, index) {
    var key = [index, image].join('-');
    return createHTMLImage(image, {
      key: key
    });
  });

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), content, imageElements);
}

FeedExtra.handledProps = ["as", "children", "className", "content", "images", "text"];
FeedExtra.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** An event can contain additional information like a set of images. */
  images: customPropTypes.every([customPropTypes.disallow(['text']), PropTypes.oneOfType([PropTypes.bool, customPropTypes.collectionShorthand])]),

  /** An event can contain additional text information. */
  text: PropTypes.bool
} : {};
module.exportDefault(FeedExtra);