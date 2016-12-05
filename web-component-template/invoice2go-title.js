class Invoice2goTitle extends HTMLElement {

  get title() {
    return this.getAttribute("title");
  }

  set title(val) {
    if (val) {
      this.setAttribute("title", val);
    } else {
      this.removeAttribute("title");
    }
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this.title || "{invoice title}";
  }
}

window.customElements.define('invoice2go-title', Invoice2goTitle);
