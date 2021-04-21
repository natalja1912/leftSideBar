import { useState } from "react";
import './Filters.css';

function Filters() {
    /* управление состоянием чекбоксов */
    const [isCheckboxActive, setCheckboxActive] = useState({
        products: false,
        location: false,
        hideAll: false
    });

    /* изменение состояния чекбокса при переключении */
    function changeCheckbox(name) {
        const value = isCheckboxActive[name];

        /* при включении чекбокса HideAll все остальные чекбоксы переходят в состояние false */
        if (name === "hideAll") {
            setCheckboxActive((prev) => {
                return {
                    products: false,
                    location: false,
                    hideAll: true
                };
            });
        } else {
            setCheckboxActive((prev) => {
                return {
                    ...prev,
                    [name]: !value,
                    hideAll: false
                };
            });
        }
    }

    return (
        <div className="filters">
            <div className="filters__section">
                <label htmlFor="products" className="filters__label">
                    Show Products Description:
        <input className="filters__checkbox"
                        name="products"
                        type="checkbox"
                        checked={isCheckboxActive.products}
                        onChange={(e) => changeCheckbox(e.target.name)}
                    />
                </label>
                {isCheckboxActive.products && <div className="filters__text">Our products are the best!</div>}
            </div>
            <div className="filters__section">
                <label htmlFor="location" className="filters__label">
                    Show Location:
        <input className="filters__checkbox"
                        name="location"
                        type="checkbox"
                        checked={isCheckboxActive.location}
                        onChange={(e) => changeCheckbox(e.target.name)}
                    />
                </label>
                {isCheckboxActive.location && <div className="filters__text">Our location</div>}
            </div>
            <div className="filters__section">
                <label htmlFor="hideAll" className="filters__label">
                    Hide all:
        <input className="filters__checkbox"
                        name="hideAll"
                        type="checkbox"
                        checked={isCheckboxActive.hideAll}
                        onChange={(e) => changeCheckbox(e.target.name)}
                    />
                </label>
            </div>
        </div>
    )
}

export default Filters;