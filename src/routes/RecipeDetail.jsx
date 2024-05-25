import React from "react";
import { useParams } from 'react-router';
import useSWR from "swr";

const API_Key = "c9602d561aa44e76949b04c6f0ba2403";
const fetcher = (...args) => fetch(...args).then(res => res.json())

const RecipeDetail = () => {
    const { recepeid } = useParams();
    const {data, isLoading, error } = useSWR( recepeid?`https://api.spoonacular.com/recipes/${recepeid}/ingredientWidget.json?apiKey=${API_Key}`:null, fetcher)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Failed to load</div>

    return (
        <div>
            <h1>RecepeInfo { recepeid }</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
}

export default RecipeDetail;