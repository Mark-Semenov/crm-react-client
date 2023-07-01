
import InfoPanel from "@components/InfoPanel";
import Customer from "@components/Customer";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@app/api/auth/[...nextauth]/route";


export default async function Card({ params: { id } }) {

    const session = await getServerSession(authOptions)
    const { accessToken } = session

    const req = await fetch(`${process.env.API_GET_FULL_CUSTOMER}${id}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    const getCompanies = await fetch(process.env.API_GET_COMPANIES, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    const companies = await getCompanies.json()

    const customer = await req.json()

    const { firstName, lastName } = customer
    const fullName = firstName + ' ' + lastName

    return (
        <>
            <InfoPanel name={fullName} >
                <Customer customer={customer} companies={companies} />
            </InfoPanel>
        </>

    )
}


