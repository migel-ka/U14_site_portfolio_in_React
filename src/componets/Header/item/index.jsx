import React, { useState } from 'react';
import "./style.css";

const Item = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    // Изменение цвета фона в зависимости от состояния чекбокса
    React.useEffect(() => {
        document.body.style.backgroundColor = isChecked ? 'BurlyWood  ' : '';
    }, [isChecked]);

    return (
        <div>
            <label class="checkbox-green">
                <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={handleCheckboxChange} 
                /> 
                <span class="checkbox-green-switch" data-label-on="On" data-label-off="Off"></span>
            </label>
        </div>
    );
};

export default Item;

