export type ProductType =
    | 'saas'
    | 'chrome_extension'
    | 'mobile_app'
    | 'web_app'
    | 'api'
    | 'content_site'
    | 'template'
    | 'other';

export type RevenueRange =
    | 'unknown'
    | '<$1k'
    | '$1k-$5k'
    | '$5k-$10k'
    | '$10k-$50k'
    | '$50k+';

export type GrowthChannel =
    | 'seo'
    | 'social'
    | 'community'
    | 'ads'
    | 'producthunt'
    | 'marketplace'
    | 'cold_email';

export type TechStack = string;

export type ProductStatus =
    | 'active'
    | 'stagnant'
    | 'sold'
    | 'shutdown';

export interface Product {
    id: string;

    // Basic Info
    name: string;
    description_en: string;
    description_zh: string;

    // Links
    source_url: string;

    // Story
    story_en: string;
    story_zh: string;

    // Images
    logo_url: string;

    // Target User
    target_user_en: string;
    target_user_zh: string;

    // Notes
    notes_zh?: string;
    notes_en?: string;

    // Dates
    launched_at?: string; // ISO Date string or YYYY-MM
    created_at: Date;
    updated_at: Date;

    // Tags
    tags: string[];

    // Related Fields
    product_type: ProductType[]; // Changed to array
    revenue_range: RevenueRange;
    revenue_confidence: 1 | 2 | 3 | 4 | 5;
    growth_channels: GrowthChannel[];
    primary_channel?: GrowthChannel | 'other';
    tech_stack?: TechStack[];
    status: ProductStatus;
}
