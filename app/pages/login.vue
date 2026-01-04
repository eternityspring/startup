<template>
  <div class="min-h-screen flex">
    <!-- Left side - Branding -->
    <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-12 flex-col justify-between">
      <div class="flex items-center gap-2">
        <NuxtLink to="/" class="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-gray-100">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
            <span class="text-sm font-bold">S</span>
          </div>
          <span>Startup</span>
        </NuxtLink>
      </div>
      <div>
        <h2 class="text-white text-4xl font-bold mb-6">开启您的旅程</h2>
        <p class="text-blue-100 text-lg leading-relaxed">
          加入我们，体验最先进的解决方案，让您的业务更上一层楼。
        </p>
      </div>
      <div class="flex gap-4">
        <div class="w-2 h-2 rounded-full bg-white/30"></div>
        <div class="w-2 h-2 rounded-full bg-white"></div>
        <div class="w-2 h-2 rounded-full bg-white/30"></div>
      </div>
    </div>

    <!-- Right side - Login Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
      <div class="w-full max-w-md">
        <div class="text-center mb-10">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">欢迎回来</h1>
          <p class="text-gray-500">请输入您的登录信息</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1.5">
              邮箱地址
            </label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                  id="email"
                  v-model="email"
                  type="email"
                  required
                  class="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                  placeholder="name@example.com"
              />
            </div>
          </div>

          <div>
            <div class="flex justify-between items-center mb-1.5">
              <label for="password" class="block text-sm font-medium text-gray-700">
                密码
              </label>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-700">忘记密码？</a>
            </div>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                  id="password"
                  v-model="password"
                  type="password"
                  required
                  class="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                  placeholder="输入密码"
              />
            </div>
          </div>

          <div v-if="error" class="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3">
            <svg class="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-sm text-red-600">{{ error }}</p>
          </div>

          <button
              type="submit"
              :disabled="loading"
              class="w-full py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/25"
          >
            <span v-if="loading" class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              登录中...
            </span>
            <span v-else>登录</span>
          </button>
        </form>

        <div class="mt-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-gray-50 text-gray-500">或者</span>
            </div>
          </div>

          <div class="mt-6 grid gap-3">
            <button @click="signInWithGoogle" class="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span class="text-sm font-medium text-gray-700">Google</span>
            </button>
          </div>
        </div>

        <p class="mt-8 text-center text-gray-500">
          还没有账户？
          <NuxtLink to="/register" class="text-blue-600 hover:text-blue-700 font-semibold">
            立即注册
          </NuxtLink>
        </p>

        <NuxtLink to="/" class="mt-6 flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600 text-sm transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回首页
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

definePageMeta({
  layout: 'blank'
})

async function handleLogin() {
  loading.value = true
  error.value = ''

  try {
    const { error: authError } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (authError) {
      error.value = authError.message
    } else {
      router.push('/')
    }
  } catch (e) {
    error.value = '登录失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

const signInWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}

</script>