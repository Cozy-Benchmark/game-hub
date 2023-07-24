const getCroppedImageUrl = (url: string) => {
    const target = 'media/';
    const addString = 'crop/600/400/'
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + addString + url.slice(index);
}

export default getCroppedImageUrl;