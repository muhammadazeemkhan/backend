const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
        title : {type: mongoose.SchemaType.string , required : true},
        description : {type : mongoose.SchemaType.string , required : true},
        user : {type : mongoose.SchemaType.objectId ,ref : 'user' , require : true}
    } ,
    { timestamps: true }
)

const blog = mongoose.model("Blog", blogSchema);

module.exports = blog;a