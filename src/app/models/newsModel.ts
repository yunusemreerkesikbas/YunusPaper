import {SourceModel} from "@models/sourceModel";

export interface News {
    source: SourceModel
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}
