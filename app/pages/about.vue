<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
    <!-- Header -->
    <header class="container mx-auto px-6 py-16 text-center">
      <h1 class="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">关于我们</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        我们致力于为客户提供卓越的产品和服务
      </p>
    </header>

    <!-- Story Section -->
    <section class="container mx-auto px-6 py-12">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">我们的故事</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          我们的团队由一群充满激情的专业人士组成，拥有丰富的行业经验和创新精神。我们相信技术的力量可以改变世界，让生活变得更加美好。
        </p>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          从创立之初，我们就坚持以客户为中心，不断追求卓越，为用户创造真正的价值。
        </p>
      </div>
    </section>

    <!-- Values Section -->
    <section class="container mx-auto px-6 py-12">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">核心价值观</h2>
        <div class="space-y-6">
          <Card class="p-6">
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:lightbulb" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">创新驱动</h3>
                <p class="text-gray-600 dark:text-gray-400">不断探索新技术，推动行业进步</p>
              </div>
            </div>
          </Card>
          <Card class="p-6">
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:users" class="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">用户至上</h3>
                <p class="text-gray-600 dark:text-gray-400">始终把用户需求放在首位</p>
              </div>
            </div>
          </Card>
          <Card class="p-6">
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:badge-check" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">品质为本</h3>
                <p class="text-gray-600 dark:text-gray-400">追求卓越品质，不断超越自我</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="container mx-auto px-6 py-16 text-center">
      <Button as-child>
        <NuxtLink to="/">返回首页</NuxtLink>
      </Button>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-6 py-8 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; 2026 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>