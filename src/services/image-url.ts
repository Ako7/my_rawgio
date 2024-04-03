import noImage from '../assets/rawg-logo.png' //add a placeholder image
const getCroppedImageURL = (url: string) => {
    if (!url) return noImage;
    const target = 'media/'
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)

}
export default getCroppedImageURL;