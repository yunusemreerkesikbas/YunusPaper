import { Category } from "./categoryModel";
import {CategoryResponseModel} from "@models/categoryResponseModel";

export interface CategoryListResponseModel extends CategoryResponseModel {
    sources: Category[]
}
