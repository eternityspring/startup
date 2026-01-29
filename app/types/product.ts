export type ProductType = 'saas' | 'chromeExtension' | 'mobileApp' | 'webApp' | 'template' | 'other';
export type GrowthChannel = 'seo' | 'social' | 'producthunt' | 'community' | 'ads' | 'content' | 'email' | 'other';
export type TechStack = 'Vue' | 'React' | 'TypeScript' | 'NodeJS' | 'Redis' | 'MongoDB' | 'Nuxt' | 'Next' | 'Tailwind CSS' | 'Supabase' | 'Prisma' | 'PostgreSQL' | 'Firebase' | 'Node' | 'Python' | 'Go' | 'PHP' | 'Laravel' | 'Rails' | 'Stripe' | 'other';
export type ProductStatus = 'active' | 'stagnant' | 'shutdown';

export interface Product {
    id: string;
    name: string;
    description: string;        // 多语言
    sourceUrl: string;
    story: string;         // 多语言
    logoUrl: string;
    targetUser: string;  // 受众群体 
    notes: any;

    // Dates
    launchedAt?: string; // ISO Date string or YYYY-MM
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;  // 创建者 关联其他表的用户id
    // Tags
    tags: string[];

    // Related Fields
    productType: ProductType[];
    revenue: number;
    mrr: number;
    arr: number;
    revenueConfidence: 1 | 2 | 3 | 4 | 5;
    growthChannels: GrowthChannel[];
    primaryChannel?: GrowthChannel | 'other';
    techStack?: TechStack[];
    status: ProductStatus;
}
