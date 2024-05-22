import React from "react";
import { useParams } from 'react-router';


const RecipeDetail = () => {
    const { recepeid } = useParams();

    return (
        <div>
            <h1>RecepeInfo { recepeid }</h1>
        </div>
    );
}

export default RecipeDetail;