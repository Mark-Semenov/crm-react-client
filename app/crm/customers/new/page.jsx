
import NewCustomerCard from "@components/NewCustomerCard";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@app/api/auth/[...nextauth]/route";


export const CreateNewCustomer = async () => {

  const session = await getServerSession(authOptions)
  const { accessToken } = session

  const req = await fetch(process.env.API_GET_COMPANIES, {
      headers: {
          'Authorization': `Bearer ${accessToken}`
      }
  })

  const companies = await req.json()

  return (
    <>
      <NewCustomerCard companies={companies} />
    </>
  )
}

export default CreateNewCustomer
