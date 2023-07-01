
import InfoPanel from "@components/InfoPanel";
import Company from "@components/Company";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@app/api/auth/[...nextauth]/route";

export default async function Card({ params: { id } }) {

  const session = await getServerSession(authOptions)

  if (!session) {
    return
  }

  const { accessToken } = session

  const req = await fetch(`${process.env.API_GET_FULL_COMPANY}${id}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })

  const company = await req.json()
  const { title } = company

  return (
    <>

      <InfoPanel name={title}>
        <Company company={company} accessToken={accessToken} />
      </InfoPanel>

    </>
  )
}
