import { Post } from "../adapters/take-home/requests.js";
import { ADD_PROPERTY } from "../adapters/take-home/urls.js";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Styles } from "../styles/properties.css";

export const AddPropertyForm = () => {
    const [address, setAddress] = useState();
    const [valuation, setValuation] = useState();
    const [response, setResponse] = useState();
    const navigate = useNavigate();

    const submitForm = () => {
        Post(ADD_PROPERTY, {"address": address, "valuation": valuation}).then((response) => {
            setResponse("Property added");
            navigate("/");
        }).catch((reason) => {
            setResponse(reason);
            navigate("/");
        })
    }

    return (
        <div className="add-property-form">
            <button onClick={() => {navigate("/")}}>Go back</button>
            <p>{response}</p>
            <input type="text" name="address" placeholder="Address" onChange={event => {setAddress(event.target.value)}}></input>
            <input type="number" name="valuation" placeholder="valuation" onChange={event => {setValuation(event.target.value)}}></input>
            <button onClick={() => {submitForm()}}>Add</button>
        </div>
    )
}