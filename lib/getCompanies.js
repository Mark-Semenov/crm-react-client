export async function getCompanies() {
    const res = await fetch(
        'http://localhost:80/company-service/api/v1/companies',
        { next: { revalidate: 300 } }
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}