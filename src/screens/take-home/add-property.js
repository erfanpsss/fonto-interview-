import { Get } from "../../adapters/take-home/requests.js";
import { GET_ALL_PROPERTIES } from "../../adapters/take-home/urls.js";
import { AddPropertyForm } from "../../components/forms.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AddPropertyScreen = () => {
    return (
        <div className="properties-box">
            <AddPropertyForm />
        </div>
    )
}