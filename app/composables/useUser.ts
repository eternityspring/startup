import { authClient } from '~/lib/auth-client'

export const useUser = () => {
    const sessionState = authClient.useSession()

    const user = computed(() => {
        const sessionData = sessionState.value?.data
        if (sessionData?.user) {
            return {
                name: sessionData.user.name || 'User',
                email: sessionData.user.email,
                avatar: sessionData.user.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${sessionData.user.email}`
            }
        }
        return null
    })

    const isLoggedIn = computed(() => !!sessionState.value?.data?.user)
    const isLoading = computed(() => sessionState.value?.isPending ?? false)

    const login = () => {
        // 跳转到登录页面
        navigateTo('/login')
    }

    const logout = async () => {
        await authClient.signOut()
    }

    return {
        user,
        login,
        logout,
        isLoggedIn,
        isLoading,
        session: sessionState
    }
}
