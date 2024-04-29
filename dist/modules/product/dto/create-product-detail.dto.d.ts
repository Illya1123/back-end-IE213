export declare class CreateProductDetailDto {
    SKU: string;
    assets: {
        src: string;
        type: string;
    }[];
    variations: {
        label: string;
        name: string;
        options: {
            name: string;
        }[];
    }[];
    productId: number;
    attributes: {
        items: {
            label: string;
            value: string;
            article: string;
        }[];
        groupName: string;
    }[];
    article: {
        title: string;
        description: string;
        content: string;
    };
}
