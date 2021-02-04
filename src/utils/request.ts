export const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        const error = new Error('Error while fetching the data');
        error.message = await response.json();
        throw error;
    }
    const result = await response.json();
    return result;
};
