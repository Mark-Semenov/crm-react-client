export async function getCustomerById(id) {
    const res = await fetch(`http://localhost:80/compose-service/api/v1/get/customer/${id}`,
        { next: { revalidate: 300 } }
    );
    console.log("i'm gonna use compose srvice to get customer by id")
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}