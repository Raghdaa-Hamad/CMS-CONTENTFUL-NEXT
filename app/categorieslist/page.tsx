import { getAllCategories } from '@/lib/api';
import CategoriesList from "../components/categorieslist"

const CategoriesPage = async () => {
  const categories = await getAllCategories();
  return (
    <div>
  
      <CategoriesList categories={categories} />
    </div>
  );
};

export default CategoriesPage;