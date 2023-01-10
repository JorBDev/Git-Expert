import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    const onAddCategory = (newCategory) => {
        const index = categories.findIndex(x => x.toLowerCase() == newCategory.toLowerCase())

        if (index !== -1) return;
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...cat, 'Valorant']);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}// Mandamos el evento
            />

            {
                categories.map(category => (
                    <GifGrid
                        key={Math.random()}
                        category={category}
                    />
                ))
            }

        </>
    )

}
