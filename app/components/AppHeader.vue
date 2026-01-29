<script setup lang="ts">
const { theme, setTheme } = useTheme()
const { user, logout, isLoggedIn } = useUser()

const activeDropdown = ref<string | null>(null)

const toggleDropdown = (name: string) => {
  if (activeDropdown.value === name) {
    activeDropdown.value = null
  } else {
    activeDropdown.value = name
  }
}

// Close dropdowns when clicking outside (simple implementation)
// For robust apps, use @vueuse/core onClickOutside
const closeDropdowns = () => {
    activeDropdown.value = null
}

// Icons map
const themeIcons = {
  light: 'lucide:sun',
  dark: 'lucide:moon',
  system: 'lucide:monitor'
}

const languages = [
  { code: 'zh', name: '简体中文' },
  { code: 'en', name: 'English' }
]

const currentLanguage = ref(languages[0])

const setLanguage = (lang: typeof languages[0]) => {
  currentLanguage.value = lang
  activeDropdown.value = null
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
    <div class="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <NuxtLink to="/" class="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-gray-100">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
            <span class="text-sm font-bold">S</span>
          </div>
          <span>Startup</span>
        </NuxtLink>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
        <NuxtLink to="/" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">首页</NuxtLink>
        <NuxtLink to="/products" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">线索</NuxtLink>
        <NuxtLink to="/pricing" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">价格</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">博客</NuxtLink>
        <NuxtLink to="/blog/note" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">笔记</NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-2 sm:gap-4">
        
        <!-- Language Selector -->
        <div class="relative">
          <Button 
            @click="toggleDropdown('language')"
            variant="ghost"
            size="icon"
            title="Switch Language"
          >
            <Icon name="lucide:languages" class="h-5 w-5" />
          </Button>
          
          <div v-if="activeDropdown === 'language'" class="absolute right-0 top-full mt-2 w-40 rounded-md border border-gray-200 bg-white p-1 shadow-lg dark:border-gray-800 dark:bg-gray-950">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="setLanguage(lang)"
              class="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              :class="{ 'font-bold bg-gray-50 dark:bg-gray-900': currentLanguage.code === lang.code }"
            >
              {{ lang.name }}
            </button>
          </div>
        </div>

        <!-- Theme Toggle -->
        <div class="relative">
          <Button 
            @click="toggleDropdown('theme')"
            variant="ghost"
            size="icon"
            title="Toggle Theme"
          >
            <Icon :name="themeIcons[theme]" class="h-5 w-5" />
          </Button>
          
          <div v-if="activeDropdown === 'theme'" class="absolute right-0 top-full mt-2 w-32 rounded-md border border-gray-200 bg-white p-1 shadow-lg dark:border-gray-800 dark:bg-gray-950">
            <button
              v-for="t in (['light', 'dark', 'system'] as const)"
              :key="t"
              @click="setTheme(t); activeDropdown = null"
              class="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              :class="{ 'font-bold bg-gray-50 dark:bg-gray-900': theme === t }"
            >
              <Icon :name="themeIcons[t]" class="h-4 w-4" />
              <span class="capitalize">{{ t === 'system' ? '跟随系统' : (t === 'dark' ? '深色' : '浅色') }}</span>
            </button>
          </div>
        </div>

        <!-- User / Auth -->
        <div v-if="!isLoggedIn" class="flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-gray-800">
           <Button 
             as-child
             variant="ghost"
             class="hidden sm:inline-flex"
           >
             <NuxtLink to="/login">登录</NuxtLink>
           </Button>
           <Button as-child>
             <NuxtLink to="/register">注册</NuxtLink>
           </Button>
        </div>

        <div v-else class="relative pl-2 border-l border-gray-200 dark:border-gray-800">
          <button 
            @click="toggleDropdown('user')"
            class="flex items-center gap-2 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <img :src="user?.avatar" alt="Avatar" class="h-8 w-8 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100" />
          </button>

          <div v-if="activeDropdown === 'user'" class="absolute right-0 top-full mt-2 w-48 rounded-md border border-gray-200 bg-white p-1 shadow-lg dark:border-gray-800 dark:bg-gray-950">
             <div class="px-3 py-2 border-b border-gray-100 dark:border-gray-800">
               <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ user?.name }}</p>
               <p class="text-xs text-gray-500 dark:text-gray-400">{{ user?.email }}</p>
             </div>
             <Button
               @click="async () => { await logout(); activeDropdown = null }"
               variant="ghost"
               class="mt-1 w-full justify-start text-red-600 hover:text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/30"
             >
               <Icon name="lucide:log-out" class="h-4 w-4 mr-2" />
               退出登录
             </Button>
           </div>
        </div>

        <!-- Mobile Menu Button (Placeholder) -->
        <Button variant="ghost" size="icon" class="md:hidden">
          <Icon name="lucide:menu" class="h-5 w-5" />
        </Button>
      </div>
    </div>
    
    <!-- Backdrop for closing dropdowns -->
    <div v-if="activeDropdown" @click="closeDropdowns" class="fixed inset-0 z-[-1] cursor-default bg-transparent"></div>
  </header>
</template>
