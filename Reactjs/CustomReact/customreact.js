/* Creating our own customized React */

function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;

    domElement.setAttribute(prop, reactElement.props[prop]);
    //above line is more like
    //domElement.setAttribute(href, reactElement.props.href)
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  Children: "click here to visit page",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer); //same as original reactjs render but customized as per our preference
