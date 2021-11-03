const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required: true,
        max: 50,
        unique: true
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    profilePicture:{
        type:String,
        defualt:""
    },
    converPicture:{
        type:String,
        defualt:""
    },
    followers:{
        type:Array,
        defualt:[]
    },
    followins:{
        type:Array,
        defualt:[]
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
    desc:{
        type:String,
        max:50,
        default:""
    },
    city:{
        type:String,
        max:50
    },
    from:{
        type:String,
        max:50
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    }
},
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);