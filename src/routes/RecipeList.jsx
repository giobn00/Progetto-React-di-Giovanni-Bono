import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from 'react-router-dom';
import useSWR from "swr";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const API_Key = import.meta.env.VITE_API_KEY ;
const fetcher = (...args) => fetch(...args).then(res => res.json())

const RecipeList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query')
  const {data, isLoading, error } = useSWR( query?`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_Key}&diet=vegetarian&query=${query}`:null, fetcher)
 
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>

  console.log(data.results)

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {data.results.map(each =>
      <Link to={`/recipe-detail/${each.id}`} state={{ img : each.image, title : each.title }}>
        <Card>
          <CardHeader>
            <img className="object-cover h-48 w-full rounded" src={each.image} alt="Alt from image" />
            <br/>
            <CardTitle>{each.title}</CardTitle>
            <CardDescription>{each.description}</CardDescription>
          </CardHeader>
        </Card>
      </Link>)}
    </div>
  );
}

export default RecipeList;