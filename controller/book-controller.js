let book = []
exports.getAllBooks = ((request,response)=>{
    response.json(book);
})

exports.createBooks = ((request,response)=>{
    book.push(request.body);
    response.json(request.body);
})

exports.getBookById = ((request,response)=>{
    let bookId = book.find(bId => bId.id === parseInt(request.params.id))
    if(!bookId){
        return response.status(404).json({
            error: `the book with provided id : ${request.params.id} was not found`
        })
    }
    response.json(bookId);
})

exports.updateBook = ((request,response)=>{
    let bookId = book.findIndex(bId => bId.id === parseInt(request.params.id))
    if(bookId=== -1){
        return response.status(404).json({
            error: `the book with provided id : ${request.params.id} was not found`
        })
    }
    book[bookId].id = request.body.id;
    book[bookId].title = request.body.title;
    book[bookId].description = request.body.description;
    book[bookId].categoryId = request.body.categoryId;
    book[bookId].author = request.body.author;
    book[bookId].createdDate = request.body.createdDate;
    response.json(request.body);
})

exports.deleteBook = ((request,response)=>{
    let bookId = book.findIndex(bId => bId.id === parseInt(request.params.id))
    if(bookId=== -1){
        return response.status(404).json({
            error: `the book with provided id : ${request.params.id} was not found`
        })
    }
    book.splice(bookId, 1);
    response.json(`the category with the id : ${request.params.id} has been deleted`);
})
