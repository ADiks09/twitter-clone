import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'
import imageminPngquant from 'imagemin-pngquant'

export const minifyImage = (fileName: string): Promise<imagemin.Result[]> =>
  imagemin([`uploads/original/${fileName}`], {
    destination: 'uploads/minify',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  })
