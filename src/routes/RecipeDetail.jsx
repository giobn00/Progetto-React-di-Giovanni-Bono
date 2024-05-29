import React from "react";
import { useParams, useLocation } from 'react-router';
import useSWR from "swr";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const API_Key = import.meta.env.VITE_API_KEY ;
const fetcher = (...args) => fetch(...args).then(res => res.json())

const RecipeDetail = () => {
    const { recepeid } = useParams();
    const {data, isLoading, error } = useSWR( recepeid?`https://api.spoonacular.com/recipes/${recepeid}/ingredientWidget.json?apiKey=${API_Key}`:null, fetcher)
    const { state } = useLocation();


    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Failed to load</div>
    return (
        <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto p-3" aria-label={recepeid}>
            <Card>
                <CardHeader>
                    <a href="#">
                        <img src={state.img} className="w-full" ></img>
                    </a>
                    <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
                        <CardTitle>
                            <p className="text-4xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl text-center text-gray-800 dark:text-white font-black leading-10">
                                {state.title}
                            </p>
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <h2 className="mb-2 text-xl font-medium leading-tight">
                        Ingredients :
                    </h2>
                    <div  className="block w-full max-w-[30rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                        <ul className="w-full">
                            {data.ingredients.map(
                                each => 
                                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10" ala>
                                    <p>{each.name}</p>
                                    <p>Amount = {each.amount.metric.value + each.amount.metric.unit}</p>
                                </li>         
                            )}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default RecipeDetail;