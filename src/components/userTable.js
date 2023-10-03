import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { VehicleContext, backendUrl } from "../context/context";
import { toast } from "react-toastify";

export const UserTable = (props) => {

    const { getAdminInfo } = useContext(VehicleContext);
    const [data, setData] = useState(null);
    const adminInfo = getAdminInfo();
    const queryParams = {
        name: adminInfo.name,
        password: adminInfo.password
    }
    useEffect(() => {
        axios.post(`${backendUrl}/api/admin/table`, queryParams)
        .then(response => {
            // Handle the successful response here
            if (response.data.status == true) {
                toast.success(response.data.message);
                setData(response.data.data);
            }
            //
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            // toast.error("Unauthorized User");
            // console.error('Error:', error);
        });
    }, []); 


    return (
        <div className="table-responsive">
            <table className="table riped  table-hover table-bordered container">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>vehicle_number</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Postal Code</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(value => <tr key={value.id} style={{cursor: "pointer"}}>
                            <td>{value.id}</td>
                            <td>{value["car_id"]}</td>
                            <td>{value["name"]}</td>
                            <td>{value["email"]}</td>
                            <td>{value["postcode"]}</td>
                            <td>{value["phone"]}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>


    )
}
