export const useUser = () => {
    const user = useState('user', () => null as { name: string; avatar: string } | null)

    const login = () => {
        user.value = {
            name: 'Wesley',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wesley'
        }
    }

    const logout = () => {
        user.value = null
    }

    const isLoggedIn = computed(() => !!user.value)

    return {
        user,
        login,
        logout,
        isLoggedIn
    }
}
