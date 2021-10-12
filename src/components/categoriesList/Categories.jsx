import './CategoriesList.sass'
import React, { useState } from 'react'
import { Subcategories } from './Subcategories'
import { NavLink } from 'react-router-dom'
import icons from './icons.svg'
import { useDispatch } from 'react-redux'

export const Categories = ({
    categories,
    category,
    getCategories,
    getSubcategories,
    setDraggingCategory,
    draggingCategory,
    setCurrentCategory,
    currentCategory,
    currentSubcategory,
    setCurrentSubcategory,
}) => {
    const dispatch = useDispatch()

    const [childVisible, setChildVisibility] = useState(false)
    const [dragOverBottomElement, setDragOverBottomElement] = useState(false)

    const hasChild = !!category?.subcategories

    const dragStartHandler = (e, category) => {
        setDraggingCategory(category)
    }

    const dragOverHandler = e => {
        if (draggingCategory) {
            e.preventDefault()
            if (
                categories.indexOf(draggingCategory) >
                categories.indexOf(category)
            ) {
                e.target.style.borderTop = '1px solid black'
            }
            if (
                categories.indexOf(draggingCategory) <
                categories.indexOf(category)
            ) {
                e.target.style.borderBottom = '1px solid black'
                setDragOverBottomElement(true)
            }
        }
    }

    const dropHandler = (e, category) => {
        e.preventDefault()
        dispatch(getCategories(categories, draggingCategory, category))
        e.target.style.borderBottom = 'none'
        e.target.style.borderTop = 'none'
        setDragOverBottomElement(false)
    }

    const dragLeaveHandler = e => {
        e.target.style.borderBottom = 'none'
        e.target.style.borderTop = 'none'
        setDragOverBottomElement(false)
    }

    const dragEndHandler = () => {
        setDraggingCategory(null)
    }

    return (
        <div>
            <div className={'categories__list-expand'}>
                {hasChild && (
                    <svg
                        height="18px"
                        width="24px"
                        className={'categories__list-expand-svg'}
                        onClick={() => setChildVisibility(v => !v)}
                    >
                        <use
                            xlinkHref={
                                childVisible ? icons + '#less' : icons + '#more'
                            }
                        >
                            {' '}
                        </use>
                    </svg>
                )}
            </div>
            <NavLink
                to={`/categoriesList/${category?.id}`}
                activeClassName={'activeLink'}
            >
                <span
                    className="categories__list-category"
                    onDragStart={e => {
                        dragStartHandler(e, category)
                    }}
                    onDragLeave={e => {
                        dragLeaveHandler(e)
                    }}
                    onDragOver={e => {
                        dragOverHandler(e)
                    }}
                    onDrop={e => {
                        dropHandler(e, category)
                    }}
                    onDragEnd={e => {
                        dragEndHandler(e)
                    }}
                    draggable
                >
                    {category?.name}
                </span>
            </NavLink>

            {childVisible &&
                hasChild &&
                !dragOverBottomElement &&
                category?.subcategories?.map((subcategory, index) => (
                    <li className="categories__list-subcategories" key={index}>
                        <Subcategories
                            category={category}
                            getSubcategories={getSubcategories}
                            categories={categories}
                            setCurrentCategory={setCurrentCategory}
                            currentCategory={currentCategory}
                            subcategory={subcategory}
                            currentSubcategory={currentSubcategory}
                            setCurrentSubcategory={setCurrentSubcategory}
                        />
                    </li>
                ))}
        </div>
    )
}
