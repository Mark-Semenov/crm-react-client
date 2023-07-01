import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const PATCH = async (req) => {

    const token = await getToken({ req })
    const { accessToken } = token

    const dto = await req.json()

    const response = await fetch(process.env.API_UPDATE_COMPANY, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(dto)
    })


    return NextResponse.json({ dto });

}


export const GET = async (req) => {

    const token = await getToken({ req })
    const { accessToken } = token

    const dto = await req.json()

    const response = await fetch(process.env.API_GET_COMPANIES, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(dto)
    })


    return NextResponse.json({ dto });

}