import './CategoriesList.sass'
import {Categories} from "./Categories";
import React from "react";
import {Link} from "react-router-dom";


export const CategoriesList = ({
                                   categories,
                                   getCategories,
                                   getSubcategories,
                                   setDraggingCategory,
                                   draggingCategory,
                                   setIsActiveButton,
                                   match,
                                   currentCategory,
                                   setCurrentCategory,
                                   deleteCategory,
                                   currentSubcategory,
                                   setCurrentSubcategory
                               }) => {
    return (
        <div className="categories">
            <div className="categories__header">
                <div className="categories__header-title">
                    Категории
                </div>
                <div className="categories__header-btns">
                    <div className="categories__header-btn">
                        <Link to='/addCategory'>
                            <button>
                                Добавить категорию
                            </button>
                        </Link>
                    </div>

                    <div className="categories__header-btn">
                        <Link to='/addCategory'>
                        <button
                            disabled={!match.params.id}>
                            Добавить подкатегорию
                        </button>
                        </Link>
                    </div>
                    <div className="categories__header-btn">
                        <Link to='/categoriesList'>
                            <button
                                onClick={() => {
                                    deleteCategory(currentCategory?.id || match.params.id)
                                }}
                                disabled={!match.params.id}>
                                Удалить категорию
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="categories__body">
                <div className="categories__body-list">
                    {categories.map(category =>
                        <Categories getCategories={getCategories}
                                    categories={categories}
                                    getSubcategories={getSubcategories}
                                    category={category}
                                    setDraggingCategory={setDraggingCategory}
                                    draggingCategory={draggingCategory}
                                    setIsActiveButton={setIsActiveButton}
                                    setCurrentCategory={setCurrentCategory}
                                    currentCategory={currentCategory}
                                    match={match}
                                    currentSubcategory={currentSubcategory}
                                    setCurrentSubcategory={setCurrentSubcategory}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
