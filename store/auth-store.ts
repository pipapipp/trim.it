import { create } from "zustand"
import { supabase } from "@/lib/supabase"

type AuthState = {
    user: any
    setUser: (user: any) => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
}))

// listen auth
supabase.auth.onAuthStateChange((_event, session) => {
    useAuthStore.getState().setUser(session?.user ?? null)
})