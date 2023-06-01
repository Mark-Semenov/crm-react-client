export async function getCompanyById(id) {
    const res = await fetch(`http://localhost:80/compose-service/api/v1/get/company/${id}`,
        { next: { revalidate: 300 } }
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}