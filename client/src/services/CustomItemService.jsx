// CustomItemService.jsx
export const getCustomItems = async () => {
    const response = await fetch('/items');
    return await response.json();
};

export const createCustomItem = async (item) => {
    const response = await fetch('/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    });
    return response;
};

export const updateCustomItem = async (id, item) => {
    const response = await fetch(`/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    });
    return response;
};

export const deleteCustomItem = async (id) => {
    const response = await fetch(`/items/${id}`, {
        method: 'DELETE'
    });
    return response;
};
