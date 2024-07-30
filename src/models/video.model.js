 import mongoose ,{Schema} from "mongoose";
import mongooseAgregatePaginate from "mongoose-aggregate-paginate-v2";
 const videoSchema= new Schema(
    {
        videoFIle:{
            type:String,
            required:true
        },
        thumbnail:
        {
            type:String,
            required:true
        },
        title:
        {
            type:String,
            rewuired:true,
        },
        discription:
        {
            type:String,
            required:true,
        },
        duration:
        {
            type:Number,
            default:0
        },
        views:
        {
            type:Number,
            default:true,
        },
        isPublished:
        {
            type:String,
            default:true
        },
        owner:
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps:true
    }
 )

 videoSchema.plugin(mongooseAgregatePaginate)
 export const Video = mongoose.model("Video",videoSchema)