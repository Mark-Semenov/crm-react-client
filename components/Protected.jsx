'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";


export const Protected = ({ children }) => {

    const router = useRouter()
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/api/auth/signin')
        }
    })
    return (
        <>
            {children}
        </>
    )
}
