import mongoose, {Schema} from "mongoose"

const doctorSchema = new mongoose.Schema(
    {
        docName:{
            type:String,
            required:true,
        },
        dept:{
            type:String,
            required:true,
        },
    },
    {
        timestamps:true,
        toJSON:{virtuals:true}
    }
);
const doctor = mongoose.model("doctor", doctor.Schema);
export default doctor;