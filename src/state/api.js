const _url = '/age-of-empires-units.json';

export const fetchData = async () => {
    try {
        const response = await fetch(_url)
        const data = await response.json();
        return data;
    } catch (e) {
        console.log('hata', e);
    }
}