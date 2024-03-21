// components/CategorySelection.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const CategorySelection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("/api/categories");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div>
            <h2>Category Selection</h2>
            {/* Display categories */}
        </div>
    );
};

export default CategorySelection;
