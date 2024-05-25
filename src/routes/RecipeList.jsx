import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from 'react-router-dom';
import useSWR from "swr";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const API_Key = "c9602d561aa44e76949b04c6f0ba2403";
const fetcher = (...args) => fetch(...args).then(res => res.json())

const RecipeList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query')
  const {data, isLoading, error } = useSWR( query?`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_Key}&diet=vegetarian&query=${query}`:null, fetcher)
 
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>

  return (
    <div className="grid grid-cols-3 gap-4">
      {/*<div>
        <h1>Search Results</h1>
        <p>Search Term: {searchQuery}</p>
      </div> 
      */}
      {data.results.map(each =>
      <Link to={`/recipe-detail/${each.id}`}>
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