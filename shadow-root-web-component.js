class ShadowRootWebComponent extends HTMLElement {
  connectedCallback() {
    const children = this.children;
    const shadowRoot = this.attachShadow({ mode: "open" });

    while (children.length > 0) {
      shadowRoot.appendChild(children[0]);
    }
  }
}

window.customElements.define("shadow-root-web-component", ShadowRootWebComponent);
