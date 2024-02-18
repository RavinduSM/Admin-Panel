import Driver from "../models/driverModel.js";
import { errorHandler } from "../utils/error.js";

export const addDriver = async(req,res, next) => {
    try{
        const driver = new Driver({
            driverID: req.body.driverID,
            mailID: req.body.mailID,
            firstName: req.body.firstName,
            surname: req.body.surname,
            gender: req.body.gender,
            address: req.body.address,
            nicNO: req.body.nicNO,
            vehicleDetails: req.body.vehicleDetails,
            doStart: req.body.doStart,
            mobileNo: req.body.mobileNo,
            profiePicture: req.body.profiePicture,
            DOB: req.body.DOB,
            postalCode: req.body.postalCode,
            pcoBadgeNumber: req.body.pcoBadgeNumber,
            vrmNo: req.body.vrmNo,
            resignedDate: req.body.resignedDate,
        })
        const createDriver = await driver.save()
        res.send({message: "Driver added, driver: createDriver"});
    } catch (error) {
        next(error);
    }
};

export const getAllDrivers = async(req,res, next) => {
    try{
        const driver = await Driver.find();
        res.status(200).json({ driver, nbHits: driver.length })
    } catch (error) {
        next(error)
    }
}

export const updateDriver = async (req, res, next) => {
    try {
        if (            
            !req.body.mailID||
            !req.body.firstName||
            !req.body.surname||
            !req.body.gender||
            !req.body.address||
            !req.body.nicNO||
            !req.body.vehicleDetails||
            !req.body.doStart||
            !req.body.mobileNo||
            !req.body.profiePicture||
            !req.body.DOB||
            !req.body.postalCode||
            !req.body.pcoBadgeNumber||
            !req.body.vrmNo
        ) {
            return next(errorHandler(400, 'Send all the required fields!'));
        }
        const { id } = req.params;
        const driver = await Driver.findByIdAndUpdate(id, req.body, { new: true });

        if (!driver) {
            return next(errorHandler(404, 'Driver not found!'));
        }
        return res.status(200).send({ message: "Driver updated successfully" })
    } catch (error) {
        next(error);
    }
}

export const deleteDriver = async (req, res, next) => {
    try {
        const driver = await Driver.findByIdAndDelete(req.params.id);
        if (driver) {
            res.status(200).send({ message: "Driver deleted successfully" })
        } else {
            return next(errorHandler(404, 'Driver not found!'));
        }
    } catch (error) {
        return next(error);
    }
}