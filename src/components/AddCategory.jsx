import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onsubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(value);
        setInputValue('');
    }

    return (
        <form onSubmit={onsubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
