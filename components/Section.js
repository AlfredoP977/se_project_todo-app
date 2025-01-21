class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item); // call renderer, and pass it the item as argument
    });
  }
  addItem(element) {
    this._container.append(element); //all element to container
  }
}

export default Section;
