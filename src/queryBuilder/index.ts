export interface IQuery {
    page: number;
    limit: number;
}

export class QueryBuilder {
    public static build(queryObject: IQuery): string {
        return '';
    }
}