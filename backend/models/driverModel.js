import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema ({
    driverID: {type:String, required: true},
    mailID: {type:String, required: true},
    firstName: {type:String, required: true},
    surname: {type:String, required: true},
    gender: {type: String, required: true},       
    address: {type:String, required: true},
    nicNO: {type:String, required: true},
    vehicleDetails: {type:String, required: true},
    doStart: {type:Date, required: true},
    mobileNo: {type:Number},
    profiePicture: {type:String, required: true},
    DOB: {type:Date, required: true},
    postalCode: {type:String, required: true},
    pcoBadgeNumber: {type:String, required: true},
    vrmNo: {type:String, required: true},
    resignedDate: {type: String, required: true},
}, 
{
    timestamps:true
});

const Driver = mongoose.model('Driver', driverSchema);
export default Driver;