export const fetchAvatar = async (userId: number): Promise<string> => {
    try {
        const request = await fetch('/fake-endpoint');

        if (!request.ok) {
            return '';
        }

        const response = await request.json();
        return response.data;
    } catch (err) {
        console.error('failed to get avatar', err);
        return '';
    }

    return '';
};