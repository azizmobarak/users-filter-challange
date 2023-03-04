export const generateKeyString = (value: string, index: number): string => {
    const length: number = value.length;
    const num: number = Math.random() * length;
    const key: string = value.slice(0, length - num) + index;
    const randomString: string = key.replaceAll(' ', '-');
    return randomString;
}