import ListItem from "./ListItem";

class FullList {
  private items: ListItem[];

  constructor() {
    this.items = [];
  }

  public addItem(item: ListItem): void {
    this.items.push(item);
  }

  public getItems(): ListItem[] {
    return this.items;
  }
}

export default FullList;
