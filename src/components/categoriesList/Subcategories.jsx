import React from 'react'
import './CategoriesList.sass'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const Subcategories = ({
    category,
    getSubcategories,
    categories,
    setCurrentCategory,
    currentCategory,
    subcategory,
    currentSubcategory,
    setCurrentSubcategory,
}) => {
    const dispatch = useDispatch()

    const dragStartHandler = (e, category, subcategory) => {
        setCurrentCategory(category)
        setCurrentSubcategory(subcategory)
    }

    const dragOverHandler = (e, category, subcategory) => {
        if (category === currentCategory) {
            e.preventDefault()
            if (
                category.subcategories?.indexOf(currentSubcategory) >
                category.subcategories?.indexOf(subcategory)
            ) {
                e.target.style.borderTop = '1px solid black'
            }
            if (
                category.subcategories?.indexOf(currentSubcategory) <
                category.subcategories?.indexOf(subcategory)
            ) {
                e.target.style.borderBottom = '1px solid black'
            }
        }
    }

    const dropHandler = (e, category, subcategory) => {
        if (category === currentCategory) {
            e.preventDefault()
            dispatch(
                getSubcategories(
                    categories,
                    currentCategory,
                    currentSubcategory,
                    subcategory
                )
            )
            e.target.style.borderBottom = 'none'
            e.target.style.borderTop = 'none'
        }
    }

    const dragLeaveHandler = e => {
        e.target.style.borderBottom = 'none'
        e.target.style.borderTop = 'none'
    }

    const dragEndHandler = () => {
        setCurrentCategory(null)
        setCurrentSubcategory(null)
    }

    return (
        <ul className="categories__list-subcategories">
            <li>
                <div>
                    <NavLink
                        to={`/categoriesList/${category?.id}/${subcategory?.id}`}
                        activeClassName={'activeLink'}
                    >
                        <span
                            className="categories__list-subcategory"
                            onDragStart={e => {
                                dragStartHandler(e, category, subcategory)
                            }}
                            onDragLeave={e => {
                                dragLeaveHandler(e)
                            }}
                            onDragOver={e => {
                                dragOverHandler(e, category, subcategory)
                            }}
                            onDrop={e => {
                                dropHandler(e, category, subcategory)
                            }}
                            onDragEnd={e => {
                                dragEndHandler(e, category, subcategory)
                            }}
                            draggable
                        >
                            -{subcategory?.name}
                        </span>
                    </NavLink>
                </div>
            </li>
        </ul>
    )
}
