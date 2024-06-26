import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["ReactJS"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    //console.log("onAddCategory");
    setCategories([newCategory, ...categories]);
  };

  const onDeleteCategory = () => {
    setCategories([]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory
        //setCategories={ setCategories }
        onNewCategory={(event) => onAddCategory(event)}
      />
      <div className="btn-content">
        <button
          className="btn-delete"
          onClick={onDeleteCategory}
          title="Borrar"
        >
          X
        </button>
      </div>
      {/* listado */}
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
