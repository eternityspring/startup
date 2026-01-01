<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-50">
    <!-- Hero Section -->
    <header class="container mx-auto px-6 py-16 text-center">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">
        欢迎来到我们的网站
      </h1>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        简洁、高效、现代化的解决方案，助力您的业务发展
      </p>
      <div class="flex justify-center gap-4">
        <button class="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          立即开始
        </button>
        <NuxtLink to="/about" class="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
          了解更多
        </NuxtLink>
      </div>
    </header>

    <!-- Features Section -->
    <section class="container mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">核心特性</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">快速高效</h3>
          <p class="text-gray-600">采用最新技术栈，确保极致的性能表现</p>
        </div>
        <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">安全可靠</h3>
          <p class="text-gray-600">企业级安全保障，让您的数据安全无忧</p>
        </div>
        <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">灵活扩展</h3>
          <p class="text-gray-600">模块化设计，轻松应对业务增长需求</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-200 mt-16">
      <div class="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>&copy; 2026 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>