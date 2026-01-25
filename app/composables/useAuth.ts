import { authClient } from '~/lib/auth-client'

export function useAuth() {
    const session = authClient.useSession()

    const signInWithEmail = async (email: string, password: string) => {
        return await authClient.signIn.email({
            email,
            password,
        })
    }

    const signUpWithEmail = async (name: string, email: string, password: string) => {
        return await authClient.signUp.email({
            name,
            email,
            password,
        })
    }

    const signInWithGoogle = async () => {
        return await authClient.signIn.social({
            provider: 'google',
        })
    }

    const signOut = async () => {
        return await authClient.signOut()
    }

    return {
        session,
        signInWithEmail,
        signUpWithEmail,
        signInWithGoogle,
        signOut,
    }
}
