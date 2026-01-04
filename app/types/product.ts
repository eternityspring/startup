export type ProductType = 'saas' | 'chrome_extension' | 'mobile_app' | 'web_app' | 'template' | 'other';
export type RevenueRange = 'pre_revenue' | '<$1k' | '$1k-$5k' | '$5k-$10k' | '$10k-$50k' | '$50k+';
export type GrowthChannel = 'seo' | 'social' | 'producthunt' | 'community' | 'ads' | 'content' | 'email' | 'other';
export type TechStack = 'Vue' | 'React' | 'TypeScript' | 'NodeJS' | 'Redis' | 'MongoDB' | 'Nuxt' | 'Next' | 'Tailwind CSS' | 'Supabase' | 'Prisma' | 'PostgreSQL' | 'Firebase' | 'Node' | 'Python' | 'Go' | 'PHP' | 'Laravel' | 'Rails' | 'Stripe' | 'other';
export type ProductStatus = 'active' | 'stagnant' | 'sold' | 'shutdown';

export interface Product {
    id: string;
    name: string;
    description_en: string;
    description_zh: string;
    source_url: string;
    story_en: string;
    story_zh: string;
    logo_url: string;
    target_user_en: string;
    target_user_zh: string;
    notes_zh?: string;
    notes_en?: string;

    // Dates
    launched_at?: string; // ISO Date string or YYYY-MM
    created_at: Date;
    updated_at: Date;

    // Tags
    tags: string[];

    // Related Fields
    product_type: ProductType[];
    revenue_range: RevenueRange;
    revenue_confidence: 1 | 2 | 3 | 4 | 5;
    growth_channels: GrowthChannel[];
    primary_channel?: GrowthChannel | 'other';
    tech_stack?: TechStack[];
    status: ProductStatus;
}
