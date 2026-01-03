
### **Product 基础信息**

```ts
Product {
  id: string

  // 名称与描述
  name: string
  description_en: string
  description_zh: string

  // 链接
  source_url: string
  
  // 故事
  story_en: string
  story_zh: string

  // 图片
  logo_url: string
  
  // 目标用户
  target_user_en: string
  target_user_zh: string
      
  // 笔记
  notes_zh?: string
  notes_en?: string
  // 产品上线时间
  launched_at?: Date   // YYYY-MM
  // 标签
  tags: string[]  // 标签示例:['solo', 'seo', 'b2b', 'ai', 'low_maintenance']
  
  
  // 收录时间
  created_at: Date
  // 更新时间
  updated_at: Date
}
```

---

### **其他关联字段**

```ts
Product {
  product_type:  //  多选，应该有中英文双语
    | 'saas'
    | 'chrome_extension'
    | 'mobile_app'
    | 'web_app'
    | 'api'
    | 'content_site'
    | 'template'
    | 'other'

  revenue_range: // 营收 统一换算成 arr
      | 'unknown'
  | '<$1k'
  | '$1k-$5k'
  | '$5k-$10k'
  | '$10k-$50k'
  | '$50k+'

  revenue_confidence: 1 | 2 | 3 | 4 | 5    // 收入可信度

  growth_channels: Array<
      | 'seo'
      | 'social'
      | 'community'
      | 'ads'
      | 'producthunt'
      | 'marketplace'
      | 'cold_email'
  >

  primary_channel?: 'seo' | 'social' | 'ads' | 'other'

  tech_stack?: string[]   // e.g. ['Vue', 'Node.js', 'Supabase']

  status:
      | 'active'
  | 'stagnant'
  | 'sold'
  | 'shutdown'

}
```


