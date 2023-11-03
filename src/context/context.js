import { createContext, useEffect, useState } from "react";

export const VehicleContext = createContext();
export const backendUrl = process.env.REACT_APP_BACKEND_LINK;

const VehicleContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [vehicleName, setVehicleName] = useState("");
    const [createdYear, setCreatedYear] = useState("");
    const [color, setColor] = useState("");
    const [mileage, setMileage] = useState(0);
    const [price, setPrice] = useState(0);
    const [bodyStyle, setBodyStyle] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [imageDetailsList, setImageDetailsList] = useState([]);
    //
    // Manage Admin authorization
    const [adminName, setAdminName] = useState("");
    const [adminPassword, setAdminPassword] =  useState("");
    //
    const [previousOwners, setPreviousOwners] = useState(0);
    const [serviceHistory, setServiceHistory] = useState(0);
    const [personalRegister, setPersonalRegister] = useState(true);
    const [importStatus, setImportStatus] = useState(0);
    const [vkey, setVkey] = useState(true);
    const [nonRunner, setNonRunner] = useState(true);
    const [insurance, setInsurance] = useState(0);
    const [privateHire, setPrivateHire] = useState(true);
    const [drivingTuition, setDrivingTuition] = useState(true);
    const [police, setPolice] = useState(true);
    const [seats, setSeats] = useState(true);
    const [damaged, setDamaged] = useState(0);

    const [email, setEmail] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phone, setPhone] = useState("");
    const [appointmentPlace, setAppointmentPlace] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");
    ////////
    //mine:
    const [BodyWork, setBodyWork] = useState(0);
    const [PanelDamageCount, setPanelDamageCount] = useState(1);
    const [DamageTypes, setDamageTypes] = useState([0]); // array damamge of selectbox 
    //
    const [WindScreen, setWindScreen] = useState(0);
    const [CrackedDriverSide, setCrackedDriverSide] = useState(false);
    const [CrackedPassengerSide, setCrackedPassengerSide] = useState(false);
    const [CrackedRearWindow, setCrackedRearWindow] = useState(false);
    const [Large5pCoin, setLarge5pCoin] = useState(true);
    //
    const [DashWarningLight, setDashWarningLight] = useState(0);
    const [DashMaxMiles, setDashMaxMiles] = useState(70000);

    const [ServiceDue, setServiceDue] = useState(false);
    const [OilWarning, setOilWarning] = useState(false);
    const [EngineManagement, setEngineManagement] = useState(false);
    const [AirbagWarning, setAirbagWarning] = useState(false);
    const [ABS, setABS] = useState(false);

    //
    const [Wheels, setWheels] = useState(0);
    const [AlloyScuffed, setAlloyScuffed] = useState(0);
    const [TyreTradeLimit, setTyreTradeLimit] = useState(0);

    //
    const [Mirrors, setMirrors] = useState(0);
    const [MirrorFaulty, setMirrorFaulty] = useState(false);
    const [MirrorGlass, setMirrorGlass] = useState(0);
    const [MirrorCover, setMirrorCover] = useState(0);

    //
    const [Interior, setInterior] = useState(0);
    const [HasStains, setHasStains] = useState(false);
    const [HasTears, setHasTears] = useState(false);
    const [HasBurns, setHasBurns] = useState(false);
    // Wrap up
    const [WrapPrivatePlate, setWrapPrivatePlate] = useState(false);
    const [WrapTwoKeys, setWrapTwoKeys] = useState(false);
    const [WrapOverMOT, setWrapOverMOT] = useState(false);
    const [WrapLogbook, setWrapLogbook] = useState(false);
    const [WrapSC, setWrapSC] = useState(false);
    const [WrapMissingPart, setWrapMissingPart] = useState(false);
    const [WrapFaultyElectrics, setWrapFaultyElectrics] = useState(false);
    const [WrapMechanicalIssues, setWrapMechanicalIssues] = useState(false);
    const [WrapNoModification, setWrapNoModification] = useState(false);
    const [WrapNoMileageAlteration, setWrapNoMileageAlteration] = useState(false);
    const [WrapIsNotImported, setWrapIsNotImported] = useState(false);
    const [WrapRightHandDrive, setWrapRightHandDrive] = useState(false);
    const [WrapExDriveSchool, setWrapExDriveSchool] = useState(false);
    const [WrapTaxi, setWrapTaxi] = useState(false);
    ///////
    const updateAssumptionValues = (
        newMileage,
        newPreviousOwners,
        newServiceHistory,
        newPersonalRegister,
        newImportStatus,
        newVkey,
        newNonRunner,
        newInsurance,
        newPrivateHire,
        newDrivingTuition,
        newPolice,
        newSeats,
        newDamaged
    ) => {
        setMileage(newMileage);
        setPreviousOwners(newPreviousOwners);
        setServiceHistory(newServiceHistory);
        setPersonalRegister(newPersonalRegister);
        setImportStatus(newImportStatus);
        setVkey(newVkey);
        setNonRunner(newNonRunner);
        setInsurance(newInsurance);
        setPrivateHire(newPrivateHire);
        setDrivingTuition(newDrivingTuition);
        setPolice(newPolice);
        setSeats(newSeats);
        setDamaged(newDamaged);
    }

    const updateVehicleDamage = (
        newBodyWork, newPanelDamageCount, newDamageTypes, newWindScreen, newCrackedDriverSide, newCrackedPassengerSide, newCrackedRearWindow, newLarge5pCoin, newDashWarningLight, newDashMaxMiles, newServiceDue, newOilWarning, newEngineManagement, newAirbagWarning, newABS, newWheels, newAlloyScuffed, newTyreTradeLimit, newMirrors, newMirrorFaulty, newMirrorGlass, newMirrorCover, newInterior, newHasStains, newHasTears, newHasBurns, 
        newWrapPrivatePlate,
        newWrapTwoKeys,
        newWrapOverMOT,
        newWrapLogbook,
        newWrapSC,
        newWrapMissingPart,
        newWrapFaultyElectrics,
        newWrapMechanicalIssues,
        newWrapNoModification,
        newWrapNoMileageAlteration,
        newWrapIsNotImported,
        newWrapRightHandDrive,
        newWrapExDriveSchool,
        newWrapTaxi
    ) => {
        setBodyWork(newBodyWork);
        setPanelDamageCount(newPanelDamageCount);
        setDamageTypes(newDamageTypes);
        setWindScreen(newWindScreen);
        setCrackedDriverSide(newCrackedDriverSide);
        setCrackedPassengerSide(newCrackedPassengerSide);
        setCrackedRearWindow(newCrackedRearWindow);
        setLarge5pCoin(newLarge5pCoin);
        setDashWarningLight(newDashWarningLight);
        setDashMaxMiles(newDashMaxMiles);
        setServiceDue(newServiceDue);
        setOilWarning(newOilWarning); 
        setEngineManagement(newEngineManagement);
        setAirbagWarning(newAirbagWarning); 
        setABS(newABS);
        setWheels(newWheels); 
        setAlloyScuffed(newAlloyScuffed); 
        setTyreTradeLimit(newTyreTradeLimit); 
        setMirrors(newMirrors); 
        setMirrorFaulty(newMirrorFaulty); 
        setMirrorGlass(newMirrorGlass); 
        setMirrorCover(newMirrorCover); 
        setInterior(newInterior); 
        setHasStains(newHasStains);
        setHasTears(newHasTears); 
        setHasBurns(newHasBurns);
        setWrapPrivatePlate(newWrapPrivatePlate);
        setWrapTwoKeys(newWrapTwoKeys);
        setWrapOverMOT(newWrapOverMOT);
        setWrapLogbook(newWrapLogbook);
        setWrapSC(newWrapSC);
        setWrapMissingPart(newWrapMissingPart);
        setWrapFaultyElectrics(newWrapFaultyElectrics);
        setWrapMechanicalIssues(newWrapMechanicalIssues);
        setWrapNoModification(newWrapNoModification);
        setWrapNoMileageAlteration(newWrapNoMileageAlteration);
        setWrapIsNotImported(newWrapIsNotImported);
        setWrapRightHandDrive(newWrapRightHandDrive);
        setWrapExDriveSchool(newWrapExDriveSchool);
        setWrapTaxi(newWrapTaxi);
    }

    const updateVehicle = (
        newVehicleNumber,
        newVehicleName,
        newCreatedYear,
        newColor,
        newMileage,
        newPrice,
        newBodyStyle,
        newFuelType,
        newImageDetailsList
    ) => {
        setVehicleNumber(newVehicleNumber);
        setVehicleName(newVehicleName);
        setCreatedYear(newCreatedYear);
        setColor(newColor);
        setMileage(newMileage);
        setPrice(newPrice);
        setBodyStyle(newBodyStyle);
        setFuelType(newFuelType);
        setImageDetailsList(newImageDetailsList);
    }

    const updateUserInfo = (
        newEmail,
        newPostCode,
        newPhone
    ) => {
        setEmail(newEmail);
        setPostCode(newPostCode);   
        setPhone(newPhone);
    }

    const updateBranchDate = (
        newAppointmentPlace,
        newAppointmentDate,
        newAppointmentTime
    ) => {
        setAppointmentPlace(newAppointmentPlace);
        setAppointmentDate(newAppointmentDate);
        setAppointmentTime(newAppointmentTime);
    }
    

    const updateLoading = (newValue) => {
        setIsLoading(newValue);
    }

    const updateAdminInfo = (name, password) => {
        setAdminName(name);
        setAdminPassword(password);
    }
    const getAdminInfo = () => {
        const res = {
            name: adminName,
            password: adminPassword
        };
        return res;
    }

    return (
        <VehicleContext.Provider
            value={{
                isLoading,
                vehicleNumber,
                vehicleName,
                createdYear,
                color,
                mileage,
                price,
                bodyStyle,
                fuelType,
                imageDetailsList,
                //
                previousOwners,
                serviceHistory,
                personalRegister,
                importStatus,
                vkey,
                nonRunner,
                insurance,
                privateHire,
                drivingTuition,
                police,
                seats,
                damaged,
                //
                BodyWork, 
                PanelDamageCount,
                DamageTypes, 
                WindScreen, 
                CrackedDriverSide,
                CrackedPassengerSide, 
                CrackedRearWindow, 
                Large5pCoin, 
                DashWarningLight, 
                DashMaxMiles, 
                ServiceDue, 
                OilWarning, 
                EngineManagement, 
                AirbagWarning, 
                ABS, 
                Wheels, 
                AlloyScuffed, 
                TyreTradeLimit, 
                Mirrors, 
                MirrorFaulty, 
                MirrorGlass, 
                MirrorCover, 
                Interior, 
                HasStains, 
                HasTears, 
                HasBurns, 
                WrapPrivatePlate,
                WrapTwoKeys,
                WrapOverMOT,
                WrapLogbook,
                WrapSC,
                WrapMissingPart,
                WrapFaultyElectrics,
                WrapMechanicalIssues,
                WrapNoModification,
                WrapNoMileageAlteration,
                WrapIsNotImported,
                WrapRightHandDrive,
                WrapExDriveSchool,
                WrapTaxi,
                //
                email,
                postCode,
                phone,
                appointmentPlace,
                appointmentDate,
                appointmentTime,
                updateAssumptionValues,
                updateVehicleDamage,
                updateVehicle,
                updateUserInfo,
                updateBranchDate,
                updateLoading,
                updateAdminInfo,
                getAdminInfo
            }}>
            {children}
        </VehicleContext.Provider>
    );
}

export default VehicleContextProvider;