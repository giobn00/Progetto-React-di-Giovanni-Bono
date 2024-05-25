import React from "react";
import { useParams } from 'react-router';
import useSWR from "swr";

const API_Key = import.meta.env.VITE_API_KEY ;
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