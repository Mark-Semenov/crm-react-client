import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";


export const DELETE = async (req, { params }) => {

    const token = await getToken({ req })
    const { accessToken } = token

    const { id } = params

    const resp = await fetch(`${process.env.API_UNBIND_CUSTOMER}${id}`, {
        method: "GET",
        headers: {
            'Content-type': 'text/html; charset=utf-8',
            'Authorization': `Bearer ${accessToken}`
        }
    })

    const response = await fetch(`${process.env.API_DELETE_CUSTOMER}${id}`, {
        method: "DELETE",
        headers: {
            'Content-type': 'text/html; charset=utf-8',
            'Authorization': `Bearer ${accessToken}`
        }
    })
    return NextResponse.redirect(new URL('/crm/customers', req.url))

}