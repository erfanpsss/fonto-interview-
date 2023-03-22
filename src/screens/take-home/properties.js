import { Get } from "../../adapters/take-home/requests.js";
import { GET_ALL_PROPERTIES } from "../../adapters/take-home/urls.js";
import { PropertyContainer } from "../../components/containers.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Styles } from "../../styles/properties.css";

export const PropertiesScreen = () => {
    const [propertiesData, setPropertiesData] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        Get(GET_ALL_PROPERTIES).then((response) => {
            let data = [];
            console.log(response.data.properties)
            for(let property of response.data.properties) {
                if (!property.hidden) {
                    property.created_at = new Date(property.created_at).toLocaleString(undefined, { timeZone: navigator.timeZone });;
                    data.push(property);
                }
            }
            console.log(data);
            setPropertiesData(data);
        }).catch((error) => {
            window.alert(error);
        })
    }, []);

    const calculateValuationSum = () => {
        let sum = 0;
        for (let property of propertiesData) {
            console.log(property)
            sum += property.valuation;
        }
        return sum;
    }

    return (
        <div className="properties-box">
            {propertiesData.map(property => (
                <PropertyContainer key={property.id} address={property.address} valuation={property.valuation} created_at={property.created_at}/>
            ))}
            <p>Total valuation: {calculateValuationSum()}</p>
            <button onClick={() => {navigate("/add-properties")}}>Add</button>
        </div>
    )
}