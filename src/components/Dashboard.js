import React, { useState, useEffect } from "react";
import { fetchCategories } from "../api"; // Import your API functions
import Pagination from "./Pagination"; // Import Pagination component

const Dashboard = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // Fetch categories from API
        fetchCategories()
            .then((data) => setCategories(data))
            .catch((error) =>
                console.error("Error fetching categories:", error)
            );
    }, []);

    const handleCheckboxChange = (categoryId) => {
        // Toggle selection of category
        const isSelected = selectedCategories.includes(categoryId);
        if (isSelected) {
            setSelectedCategories((prevSelection) =>
                prevSelection.filter((id) => id !== categoryId)
            );
        } else {
            setSelectedCategories((prevSelection) => [
                ...prevSelection,
                categoryId,
            ]);
        }
    };

    const handlePageChange = (pageNumber) => {
        // Handle pagination change
        setCurrentPage(pageNumber);
    };

    // Pagination logic to display only 6 categories per page
    const startIndex = (currentPage - 1) * 6;
    const endIndex = startIndex + 6;
    const visibleCategories = categories.slice(startIndex, endIndex);

    return (
        <div>
            <h1>Please mark your interest</h1>
            <p>We will keep you notified</p>
            <h2>My saved interests!</h2>
            <ul>
                {visibleCategories.map((category) => (
                    <li key={category.id}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category.id)}
                            onChange={() => handleCheckboxChange(category.id)}
                        />
                        <label>{category.name}</label>
                    </li>
                ))}
            </ul>
            {/* Pagination component to handle page navigation */}
            <Pagination
                pageCount={Math.ceil(categories.length / 6)}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Dashboard;
