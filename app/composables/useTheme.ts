export type Theme = 'light' | 'dark' | 'system'

export const useTheme = () => {
    const theme = useState<Theme>('theme', () => 'system')

    const updateTheme = () => {
        const isDark =
            theme.value === 'dark' ||
            (theme.value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    const setTheme = (newTheme: Theme) => {
        theme.value = newTheme
    }

    onMounted(() => {
        // Check local storage or default
        const savedTheme = localStorage.getItem('theme') as Theme
        if (savedTheme) {
            theme.value = savedTheme
        }

        updateTheme()

        // Listen for system changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addEventListener('change', () => {
            if (theme.value === 'system') {
                updateTheme()
            }
        })
    })

    watch(theme, (newTheme) => {
        localStorage.setItem('theme', newTheme)
        updateTheme()
    })

    return {
        theme,
        setTheme
    }
}
