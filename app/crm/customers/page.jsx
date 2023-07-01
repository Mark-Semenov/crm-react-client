
import SearchPanel from "@components/crm/SearchPanel";
import Customers from "@components/Customers";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@app/api/auth/[...nextauth]/route";


const link = "/crm/customers/new"

export default async function ShowCustomers({ searchParams }) {

  const session = await getServerSession(authOptions)

  if (!session) {
    return
  }

  const { accessToken } = session

  const req = await fetch(process.env.API_GET_CUSTOMERS, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })

  const customers = await req.json()

  return (
    <>
      <SearchPanel link={link} />
      <Customers customers={customers} />
    </>
  )
}


