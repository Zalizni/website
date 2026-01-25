import localFont from 'next/font/local'
import { Onest } from 'next/font/google'

 
const helios = localFont({
  src: '../../public/fonts/HeliosExtBlack.woff2',
  weight: '900',
  style: 'normal',
  variable: '--font-helios',
})

 
const onest = Onest({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'cyrillic-ext'],
  variable: '--font-onest',
})

export { helios, onest }