import './CategoriesList.sass'
import {NavLink} from "react-router-dom";


export const Subcategories = ({
                                  category,
                                  getSubcategories,
                                  categories,
                                  setCurrentCategory,
                                  currentCategory,
                                  subcategory,
                                  currentSubcategory,
                                  setCurrentSubcategory
                              }) => {


    const dragStartHandler = (e, category, subcategory) => {
        setCurrentCategory(category)
        setCurrentSubcategory(subcategory)
    };

    const dragOverHandler = (e, category, subcategory) => {
        if (category === currentCategory) {
            e.preventDefault()
            if (category.subcategories?.indexOf(currentSubcategory)
                > category.subcategories?.indexOf(subcategory)) {
                e.target.style.borderTop = '1px solid black'
            }
            if (category.subcategories?.indexOf(currentSubcategory)
                < category.subcategories?.indexOf(subcategory)) {
                e.target.style.borderBottom = '1px solid black'
            }
        }
    };

    const dropHandler = (e, category, subcategory) => {
        e.preventDefault()
        if (category === currentCategory) {
            getSubcategories(categories, currentCategory, currentSubcategory, subcategory)
        }
        e.target.style.borderBottom = 'none'
        e.target.style.borderTop = 'none'
    };

    const dragLeaveHandler = e => {
        e.target.style.borderBottom = 'none'
        e.target.style.borderTop = 'none'
    };

    return (
        <ul className="categories__list-subcategories">
            <li>
                <div>
                    <NavLink
                        to={`/categoriesList/${subcategory?.id}`}
                        activeClassName={'activeLink'}
                    >
                            <span
                                className="categories__list-subcategory"
                                onDragStart={(e) => {
                                    dragStartHandler(e, category, subcategory)
                                }}
                                onDragLeave={(e) => {
                                    dragLeaveHandler(e)
                                }}
                                onDragOver={(e) => {
                                    dragOverHandler(e, category, subcategory)
                                }}
                                onDrop={(e) => {
                                    dropHandler(e, category, subcategory)
                                }}
                                onClick={() => setCurrentCategory(category)}
                                draggable>
                                -{subcategory?.name}
                            </span>
                    </NavLink>
                </div>
            </li>
        </ul>
    )
}