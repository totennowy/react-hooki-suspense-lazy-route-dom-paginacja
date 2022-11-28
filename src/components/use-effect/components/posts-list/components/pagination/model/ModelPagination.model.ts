interface IModelPagination {
    postsPerPage: number;
    totalPosts: number;
    paginate: any;
}

export type ModelPagination = IModelPagination;