import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const mock_data = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    ingredients: [
      "500g dried spaghetti",
      "4 large eggs",
      "100g pecorino romano cheese, grated",
      "50g parmesan cheese, grated",
      "100g guanciale or pancetta, diced",
      "Black pepper",
      "Olive oil",
    ],
    description:
      "Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, and cured pork. It's a simple yet incredibly flavorful dish that's perfect for a quick and easy weeknight meal.",
    image: "https://images.unsplash.com/photo-1615584240522-7fe7ed4dadee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BhZ2hldHRpfHx8fHx8MTcxNjM4OTIyOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    id: 2,
    name: "Thai Peanut Curry",
    ingredients: [
      "400g coconut milk",
      "2 tbsp peanut butter",
      "1 tbsp soy sauce",
      "1 tbsp brown sugar",
      "1 tbsp fish sauce",
      "1 tbsp lime juice",
      "1 red bell pepper, sliced",
      "1 green bell pepper, sliced",
      "2 carrots, julienned",
      "2 chicken breasts, cooked and shredded",
      "1 cup broccoli florets",
      "1 cup rice noodles",
      "Cilantro, chopped (for garnish)",
      "Peanuts, chopped (for garnish)",
    ],
    description:
      "This Thai Peanut Curry is a flavorful and easy-to-make dish that's perfect for a weeknight meal. The creamy peanut sauce is packed with flavor, and the vegetables and chicken add a satisfying heartiness.",
    image: "https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGFpLHBlbmF1dCxjdXJyeXx8fHx8fDE3MTYzODkyODY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    id: 3,
    name: "Cheesy Chicken Enchiladas",
    ingredients: [
      "10 corn tortillas",
      "500g cooked chicken, shredded",
      "1 (400g) can black beans, rinsed and drained",
      "1 (10 oz) can diced tomatoes with green chilies",
      "1 cup shredded cheddar cheese",
      "1 cup shredded Monterey Jack cheese",
      "1/2 cup enchilada sauce",
      "1/4 cup chopped onion",
      "1 tsp chili powder",
      "1/2 tsp cumin",
      "Salt and pepper to taste",
      "Cilantro, chopped (for garnish)",
      "Sour cream (for garnish)",
    ],
    description:
      "These Cheesy Chicken Enchiladas are a classic Tex-Mex dish that's easy to make and always a crowd-pleaser. The combination of tender chicken, black beans, and melty cheese is irresistible.",
    image: "https://images.unsplash.com/photo-1700540221374-905b30c7dd18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZW5jaGlsYWRhc3x8fHx8fDE3MTYzODkzMjI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    id: 4,
    name: "Greek Salad",
    ingredients: [
      "4 cups romaine lettuce, chopped",
      "1 cucumber, sliced",
      "1 tomato, chopped",
      "1 red onion, sliced",
      "1/2 cup crumbled feta cheese",
      "1/4 cup Kalamata olives, pitted and halved",
      "1/4 cup olive oil",
      "2 tbsp lemon juice",
      "1 tsp dried oregano",
      "Salt and pepper to taste",
    ],
    description:
      "This Greek Salad is a refreshing and healthy dish that's perfect for a light lunch or side dish. The combination of crisp lettuce, juicy vegetables, and salty feta cheese is a classic.",
    image: "https://images.unsplash.com/photo-1605291535065-e1d52d2b264a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c2FsYWR8fHx8fHwxNzE2Mzg5MzQy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  }]

const RecipeList = () => {
  const API_Key = "c9602d561aa44e76949b04c6f0ba2403";
  const SearchParameter = "diet=vegetarian";
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(searchParams);
    const query = queryParams.get('query');
    setSearchQuery(query);

    // Simulate fetching data based on the search query
    fetch( `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_Key}&${SearchParameter}&query=${searchQuery}` )
      .then((res) => res.json())
      .then((res) => {
        setResponse(res.results);
      });
  }, [searchParams]);


  return (
    <div className="grid grid-cols-3 gap-4">
      {/*<div>
        <h1>Search Results</h1>
        <p>Search Term: {searchQuery}</p>
      </div> 
      */}
      {response.map(each =>
      <Link to={`/recipe-detail/${each.id}`}>
        <Card>
          <CardHeader>
            <img className="object-cover h-48 w-full rounded" src={each.image} alt="Alt from image" />
            <br/>
            <CardTitle>{each.title}</CardTitle>
            <CardDescription>{each.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p></p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </Link>)}
    </div>
  );
}

export default RecipeList;