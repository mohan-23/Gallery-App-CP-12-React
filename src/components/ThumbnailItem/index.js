import './index.css'

const ThumbnailItem = props => {
  const {eachImageObject, updateSelectedImage, isActive} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = eachImageObject

  const onClickImage = () => {
    updateSelectedImage(imageUrl, imageAltText)
  }

  const opacityClassName = isActive ? 'image opacity' : 'image'

  return (
    <li className="list-container">
      <button className="button" type="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={opacityClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
