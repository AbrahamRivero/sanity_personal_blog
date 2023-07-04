import createImageUrlBuilder from '@sanity/image-url'
import {dataset, projectId} from './config'

const imageBuilder = createImageUrlBuilder({projectId, dataset})

export const urlForImage = (source: any) => {
  if (!source || !source.asset) return
  const dimensions = source?.asset?._ref.split('-')[2]

  const [width, height] = dimensions.split('x').map((num: any) => parseInt(num, 10))

  const url = imageBuilder.image(source).auto('format').width(Math.min(width, 2000)).url()

  return {
    src: url,
    width: width,
    height: height,
  }
}
