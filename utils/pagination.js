const pagination = {
    find: async (model, currentPage, currentLimit) =>{
        const page = currentPage || 1;
        const limit = currentLimit || 3;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const result = {}
        result.currentPage = page;
        result.message = 'Data Ucapan'
        result.totalPage = Math.ceil(await model.countDocuments() / limit)
        result.totalData = await model.countDocuments()
        result.data = await model.find()
            .skip(startIndex)
            .limit(limit)
            .sort({ _id: -1 })
            .populate({ path: "comments" })
            .exec();
        if(endIndex < await model.countDocuments()){
            result.next = {
                page: page + 1,
                limit
            }
        }
        if(startIndex > 0){
            result.previous = {
                page:page - 1,
                limit
            }
        }
        return result;
    },

}

module.exports = pagination