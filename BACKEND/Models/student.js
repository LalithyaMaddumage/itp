const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const studenSchema = new Schema({
    name :{
        type : String,
        required : true
    },

    age :{
        type: Number,
        required: true
    },

    gender:{
        typr:String,
        required:true
    }
})

const Student = mongoose.model("student")