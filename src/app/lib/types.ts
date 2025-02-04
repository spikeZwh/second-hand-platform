export interface Item {
    id: number;                      // 主键，物品唯一标识
    item_name: string;                    // 物品名称
    description: string;             // 物品描述
    category: string;                // 物品类别（例如：书籍、电子产品等）
    price: number;                   // 物品价格
    image_urls: string[];                // 物品图片的 URL 地址
    sellerId: number;                // 卖家 ID，外键指向用户表
    status: 'available' | 'sold' | 'removed'; // 物品状态（例如：上架、已售、下架）
    created_at: Date;                 // 物品发布的时间
    updated_at: Date;                 // 物品最后一次更新的时间
    location: string;                // 物品所在地点（城市或地区）
    condition: 'new' | 'used';       // 物品状况（例如：全新、二手）
    shipping_method: string;          // 物品运输方式（例如：快递、自取）
    tags: string[];                  // 物品的标签（例如：便宜、实用等）
    is_subscribed: boolean;           // 是否被用户订阅
    sold_at?: Date;                   // 物品出售的时间（如果已售，填充）
}
export interface Favorites {
    id: number;
    item_id: number;
}