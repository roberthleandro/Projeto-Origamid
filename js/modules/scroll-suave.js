export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      options = { behavior: "smooth", block: "start" };
    }
    this.options = options;
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(evento) {
    evento.preventDefault();
    const href = evento.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
