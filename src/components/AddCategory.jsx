import { useState } from "react";

import PropTypes from "prop-types";

export const AddCategory = ({onAddCategory}) => {
    const [category, setCategory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const categoryToEmmit = category.trim();
        if(category.trim().length <= 1) return;
        onAddCategory(categoryToEmmit);
        setCategory('');
    };

    const handleCategoryChange = (event)=>{
        setCategory(event.target.value);
    }

    return (
        <form
            aria-label="form"
            onSubmit={handleSubmit}
        >
            <input
                onChange={handleCategoryChange}
                placeholder="Enter category" 
                type="text"
                value={category}
            />

        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}
