import { Category } from "./categoryModel";
import { CategoryResponseModel } from "./categoryResponseModel";

export interface CategoryListResponseModel extends CategoryResponseModel {
    sources: Category[]
}