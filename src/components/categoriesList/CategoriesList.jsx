import './CategoriesList.sass'
import { Categories } from './Categories'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const CategoriesList = ({
    categories,
    getCategories,
    getSubcategories,
    setDraggingCategory,
    draggingCategory,
    match,
    currentCategory,
    setCurrentCategory,
    deleteCategory,
    currentSubcategory,
    setCurrentSubcategory,
}) => {
    const dispatch = useDispatch()

    return (
        <div className="categories">
            <div className="categories__header">
                <div className="categories__header-title">Категории</div>
                <div className="categories__header-btns">
                    <div className="categories__header-btn">
                        <Link to="/addCategory">
                            <button>Добавить категорию</button>
                        </Link>
                    </div>

                    <div className="categories__header-btn">
                        <Link to="/addCategory">
                            <button disabled={!match.params.categoryId}>
                                Добавить подкатегорию
                            </button>
                        </Link>
                    </div>
                    <div className="categories__header-btn">
                        <Link to="/categoriesList">
                            <button
                                onClick={() => {
                                    dispatch(
                                        deleteCategory(
                                            Number(match.params.categoryId)
                                        )
                                    )
                                }}
                                disabled={!match.params.categoryId}
                            >
                                Удалить категорию
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="categories__body">
                <div className="categories__body-list">
                    {categories.map((category, index) => (
                        <Categories
                            key={index}
                            getCategories={getCategories}
                            categories={categories}
                            getSubcategories={getSubcategories}
                            category={category}
                            setDraggingCategory={setDraggingCategory}
                            draggingCategory={draggingCategory}
                            setCurrentCategory={setCurrentCategory}
                            currentCategory={currentCategory}
                            currentSubcategory={currentSubcategory}
                            setCurrentSubcategory={setCurrentSubcategory}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
