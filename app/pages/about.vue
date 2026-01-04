<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-50">
    <!-- Header -->
    <header class="container mx-auto px-6 py-16 text-center">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">关于我们</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        我们致力于为客户提供卓越的产品和服务
      </p>
    </header>

    <!-- Story Section -->
    <section class="container mx-auto px-6 py-12">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">我们的故事</h2>
        <p class="text-gray-600 mb-4 leading-relaxed">
          我们的团队由一群充满激情的专业人士组成，拥有丰富的行业经验和创新精神。我们相信技术的力量可以改变世界，让生活变得更加美好。
        </p>
        <p class="text-gray-600 leading-relaxed">
          从创立之初，我们就坚持以客户为中心，不断追求卓越，为用户创造真正的价值。
        </p>
      </div>
    </section>

    <!-- Values Section -->
    <section class="container mx-auto px-6 py-12">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">核心价值观</h2>
        <div class="space-y-6">
          <div class="flex gap-4">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-1">创新驱动</h3>
              <p class="text-gray-600">不断探索新技术，推动行业进步</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-1">用户至上</h3>
              <p class="text-gray-600">始终把用户需求放在首位</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-1">品质为本</h3>
              <p class="text-gray-600">追求卓越品质，不断超越自我</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="container mx-auto px-6 py-16 text-center">
      <NuxtLink to="/public" class="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-block">
        返回首页
      </NuxtLink>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-200">
      <div class="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>&copy; 2026 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>