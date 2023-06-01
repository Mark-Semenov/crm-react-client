
export async function getCustomers() {
    const res = await fetch(
        'http://localhost:80/customer-service/api/v1/customers',
        { next: { revalidate: 300 } }
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}