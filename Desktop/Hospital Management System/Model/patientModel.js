import mongoose, {Schema} from "mongoose"

const patientSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        age:{
            type:String,
            required:true,
        },
        gender:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        phoneNo:{
            type:String,
            required:true,
        },
        disease:{
            type:String,
            required:true,
        },
    },
    {
        timestamps:true,
        toJSON:{virtuals:true}
    }
);
const patient = mongoose.model("patient", doctor.Schema);
export default patient;