export const ImageTag = ({url,width}) => {
    return (
        <img src={url} alt="images-attr" width={width? width : "auto"}/>
    )
}