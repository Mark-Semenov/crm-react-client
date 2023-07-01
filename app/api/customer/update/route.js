import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";


export const PATCH = async (req) => {

    const token = await getToken({ req })
    const { accessToken } = token

    const data = await req.json()
    console.log(data)

    const response = await fetch(process.env.API_UPDATE_CUSTOMER, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(data)
    })


    return NextResponse.json({ data });

}