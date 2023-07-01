
import { getServerSession } from "next-auth/next"
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import SearchPanel from "@components/crm/SearchPanel"
import Companies from "@components/Companies"

const link = "/crm/companies/new"

export default async function ShowCompanies({ searchParams }) {

  const session = await getServerSession(authOptions)

  if (!session) {
    return
  }

  const { accessToken } = session

  const req = await fetch(process.env.API_GET_COMPANIES, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })

  const companies = await req.json()

  return (
    <>
      <SearchPanel link={link} />
      <Companies companies={companies} />

    </>

  )
}

