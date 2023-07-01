import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const POST = async (req) => {

    const token = await getToken({ req })
    const { accessToken } = token

    const data = await req.json()

    const response = await fetch(process.env.API_CREATE_CUSTOMER, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(data)
    })


    return NextResponse.json({ data });

}



