import {ResponseModel} from "@models/responseModel";

export interface ListResponseModel<T> extends ResponseModel {
    articles: T[]
}
