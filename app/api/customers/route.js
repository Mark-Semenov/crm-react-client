import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server";

export async function GET(req) {

    const token = await getToken({ req })
    const { accessToken } = token


    const request = await fetch(process.env.API_GET_CUSTOMERS,
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            mode: 'no-cors',
            // cache: 'no-store',
            next: { revalidate: 300 },
        }
    );

    const customers = await request.json()


    return NextResponse.json({ customers })

}