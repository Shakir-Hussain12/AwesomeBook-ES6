export default class {
  constructor(data) {
    this.data = data;
  }

    addItem = (title, author) => {
      if (title && author) {
        const item = {
          id: Date.now(),
          title,
          author,
        };
        this.data.push(item);
        localStorage.setItem('bookData', JSON.stringify(this.data));
      }
    };

    deleteItem = (name, author) => {
      this.data.filter((val, ind, arr) => {
        if (val.title === name && val.author === author) {
          arr.splice(ind, 1);
          return true;
        }
        return false;
      });
      localStorage.setItem('bookData', JSON.stringify(this.data));
    };
}