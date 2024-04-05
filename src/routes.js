const{
    addBookHandler,
    getAllBooksHandler,
    getBookIdHandler,
    editBookIdHandler,
    deleteBookIdHandler
} = require('./handlers');

const routes = [
    {
        methode : 'POST',
        path : '/books',
        handler : addBookHandler,
    },

    {
        methode : 'GET',
        path : '/books',
        handler : getAllBooksHandler,
    },
    {
        methode : 'GET',
        path : '/books/{id}',
        handler : getBookIdHandler,
    },
    {
        methode : 'PUT',
        path : '/books/{id}',
        handler : editBookIdHandler,
    },
    {
        methode : 'DELETE',
        path : '/books/{id}',
        handler : deleteBookIdHandler,
    },
];

module.exports = routes;