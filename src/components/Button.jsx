import { useEffect } from "react";

import Destination from "./Destination";
import OriginDestination from "./OriginDestination";




function Button(props)
{

    
    
    return (
        <div className="button">

            <div className="container">

                <div className="trick">
    
                <button onClick={() => props.fetchDestination()}> Submit Your F Flight</button >
            </div>
         </div>
        </div>    
    )
}


export default Button;