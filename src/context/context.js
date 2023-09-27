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
    const [motMonth, setMotMonth] = useState(0);
    const [insurance, setInsurance] = useState(0);
    const [privateHire, setPrivateHire] = useState(true);
    const [drivingTuition, setDrivingTuition] = useState(true);
    const [police, setPolice] = useState(true);
    const [seats, setSeats] = useState(true);
    const [zone, setZone] = useState(0);
    const [component, setComponent] = useState(0);
    const [fault, setFault] = useState(0);
    const [email, setEmail] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phone, setPhone] = useState("");
    const [appointmentPlace, setAppointmentPlace] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");

    const updateAssumptionValues = (
        newMileage,
        newPreviousOwners,
        newServiceHistory,
        newPersonalRegister,
        newImportStatus,
        newVkey,
        newNonRunner,
        newMotMonth,
        newInsurance,
        newPrivateHire,
        newDrivingTuition,
        newPolice,
        newSeats
    ) => {
        setMileage(newMileage);
        setPreviousOwners(newPreviousOwners);
        setServiceHistory(newServiceHistory);
        setPersonalRegister(newPersonalRegister);
        setImportStatus(newImportStatus);
        setVkey(newVkey);
        setNonRunner(newNonRunner);
        setMotMonth(newMotMonth);
        setInsurance(newInsurance);
        setPrivateHire(newPrivateHire);
        setDrivingTuition(newDrivingTuition);
        setPolice(newPolice);
        setSeats(newSeats);
    }

    const updateVehicleDamage = (
        newZone,
        newComponent,
        newFault
    ) => {
        setZone(newZone);
        setComponent(newComponent);
        setFault(newFault);
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
                motMonth,
                insurance,
                privateHire,
                drivingTuition,
                police,
                seats,
                zone,
                component,
                fault,
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