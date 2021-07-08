function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const defaultText = `
# heading 1
## heading 2
### heading 3
#### h4
**bold text**
*italicized text*
> Block Quotes!

1. ordered list item 1
2. ordered list item 2
3. ordered list item 3
- unordered list item 1
- unordered list item 2
- unordered list item 3
---
three or more dashes creates a horizontal line

\`<p>inline code goes between single backticks</p>\`

\`\`\` 
let a = "multi-line code";
let b = " goes between a set of three backticks";
let c = a + b;
\`\`\`

[Link names go in square backets followed by URL in parentheses](www.freecodecamp.org)

![Imgur](https://i.imgur.com/07If8aZt.jpg)
`;
class Markdown extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",





    event => {
      this.setState({
        text: event.target.value });

    });this.state = { text: defaultText };this.handleChange = this.handleChange.bind(this);}

  render() {
    const { text } = this.state;
    const markdown = marked(text);

    marked.setOptions({
      breaks: true });


    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { className: "text-center p-3", style: { fontFamily: "american typewriter, serif" } }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h4", { className: "text-center", style: { fontFamily: "american typewriter, serif" } }, "edit"), /*#__PURE__*/
      React.createElement("textarea", { className: "form-control border border-dark p-1", id: "editor", value: text, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h4", { className: "text-center", style: { fontFamily: "american typewriter, serif" } }, "result"), /*#__PURE__*/
      React.createElement("div", { id: "preview", className: "preview border border-dark rounded p-1", dangerouslySetInnerHTML: { __html: markdown } })))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Markdown, null), document.getElementById("markdown"));