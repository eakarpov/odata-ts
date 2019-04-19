export interface IQuery {
    page: number;
    skip: number;
    limit: number;
}

export class QueryBuilder {
    public static defaultLimit = 50;

    public static build(queryObject: IQuery): string {
        let res = '';
        const arr = [];
        if (queryObject.page || queryObject.skip) {
            if (queryObject.skip) {
                arr.push(`$skip=${queryObject.skip}`);
            } else {
                arr.push(`$skip=${queryObject.page * (queryObject.limit || QueryBuilder.defaultLimit)}`);
            }
        }
        if (queryObject.limit) {
            arr.push(`$top=${queryObject.limit}`);
        }
        res += arr.join(' and ');
        return res;
    }
}