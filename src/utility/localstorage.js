const getReadItems = () => {
    const storedReadItem = localStorage.getItem('read-items');
    if (storedReadItem) {
        return JSON.parse(storedReadItem);
    }
    return [];
}

const saveReadItems = id => {
    const storedReadItems = getReadItems();
    const exists = storedReadItems.find(bookId => bookId === id);
    if (!exists) {
        storedReadItems.push(id);
        localStorage.setItem('read-items', JSON.stringify(storedReadItems))
    }
}

export { saveReadItems, getReadItems }