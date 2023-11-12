import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        getCategories();
    },[]);

    const getCategories = () => {
        fetch('http://localhost:8080/categories')
            .then((response) => {
                return response.json();
            }).then((data) => {
                setCategories(data);
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Categories</h1>

            {categories &&
                <ul>
                    {categories.map((category) => (
                        <li>
                            <Link to={`/categories/${category.id}`}>{category.name}</Link>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default Categories;