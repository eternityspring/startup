<template>
  <div class="min-h-screen flex">
    <!-- Left side - Branding -->
    <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-12 flex-col justify-between">
      <div class="flex items-center gap-2">
        <NuxtLink to="/" class="flex items-center gap-2 text-xl font-bold text-white">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-700">
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
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
      <Card class="w-full max-w-md p-8">
        <div class="text-center mb-10">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">欢迎回来</h1>
          <p class="text-gray-500 dark:text-gray-400">请输入您的登录信息</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div class="space-y-2">
            <Label for="email">邮箱地址</Label>
            <div class="relative">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Icon name="lucide:mail" class="w-4 h-4" />
              </span>
              <Input
                id="email"
                v-model="email"
                type="email"
                required
                class="pl-10"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <Label for="password">密码</Label>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400">忘记密码？</a>
            </div>
            <div class="relative">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Icon name="lucide:lock" class="w-4 h-4" />
              </span>
              <Input
                id="password"
                v-model="password"
                type="password"
                required
                class="pl-10"
                placeholder="输入密码"
              />
            </div>
          </div>

          <div v-if="error" class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg flex items-center gap-3">
            <Icon name="lucide:alert-circle" class="w-5 h-5 text-red-500 flex-shrink-0" />
            <p class="text-sm text-red-600 dark:text-red-400">{{ error }}</p>
          </div>

          <Button
            type="submit"
            :disabled="loading"
            class="w-full"
            size="lg"
          >
            <span v-if="loading" class="flex items-center justify-center gap-2">
              <Icon name="lucide:loader-2" class="w-5 h-5 animate-spin" />
              登录中...
            </span>
            <span v-else>登录</span>
          </Button>
        </form>

        <div class="mt-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-card text-gray-500 dark:text-gray-400">或者</span>
            </div>
          </div>

          <div class="mt-6 grid gap-3">
            <Button @click="signInWithGoogle" variant="outline" class="w-full">
              <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </Button>
          </div>
        </div>

        <p class="mt-8 text-center text-gray-500 dark:text-gray-400">
          还没有账户？
          <NuxtLink to="/register" class="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold">
            立即注册
          </NuxtLink>
        </p>

        <NuxtLink to="/" class="mt-6 flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-sm transition-colors">
          <Icon name="lucide:arrow-left" class="w-4 h-4" />
          返回首页
        </NuxtLink>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { authClient } from '~/lib/auth-client'

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
    const { error: authError } = await authClient.signIn.email({
      email: email.value,
      password: password.value,
    })

    if (authError) {
      error.value = authError.message || '登录失败'
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
  await authClient.signIn.social({
    provider: 'google',
  })
}

</script>