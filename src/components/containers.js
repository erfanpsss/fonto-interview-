import { Styles } from "../styles/properties.css";


export const PropertyContainer = ({address, valuation, created_at}) => {
    return (
        <div className="property-container">
            <p>Address: {address}</p>
            <p>Valuation: AUD {valuation.toLocaleString()}</p>
            <p>Created at: {created_at}</p>
        </div>
    )
}