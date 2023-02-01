import { News } from "./newsModel";
import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel {
    articles: T[]
}