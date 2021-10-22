let category = []
exports.getAllCategory = ((request,response)=>{
    response.json(category);
})

exports.createCategory = ((request,response)=>{
    category.push(request.body);
    response.json(request.body);
})

exports.getCategoryById = ((request,response)=>{
    let categoryId = category.find(catId => catId.id === parseInt(request.params.id))
    if(!categoryId){
        return response.status(404).json({
            error: `the category with provided id : ${request.params.id} was not found`
        })
    }
    response.json(categoryId);
})

exports.updateCategory = ((request,response)=>{
    let categoryId = category.findIndex(catId => catId.id === parseInt(request.params.id))
    if(categoryId=== -1){
        return response.status(404).json({
            error: `the category with provided id : ${request.params.id} was not found`
        })
    }
    category[categoryId].id = request.body.id;
    category[categoryId].title = request.body.title;
    category[categoryId].createdDate = request.body.createdDate;
    response.json(request.body);
})

exports.deleteCategory = ((request,response)=>{
    let categoryId = category.findIndex(catId => catId.id === parseInt(request.params.id))
    if(categoryId=== -1){
        return response.status(404).json({
            error: `the category with provided id : ${request.params.id} was not found`
        })
    }
    category.splice(categoryId, 1);
    response.json(`the category with the id: ${request.params.id} has been deleted`);
})
