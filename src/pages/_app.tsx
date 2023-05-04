import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter,Montserrat } from "next/font/google";

import localFont from "next/font/local";
import Button from "@/components/button";

const inter = Inter({ subsets: ["latin"] });

const gt = localFont({
  src: "../../public/font/GT-Walsheim-Pro/GTWalsheimPro-Bold.woff",
  display: "swap",
  variable: "--font-gt",
  style:'normal',
  weight:'700'

});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: '300',
  variable: "--font-montserrat",
});


export default function App({ Component, pageProps }: AppProps) {
  return <div className={``} >
    <Component {...pageProps} />
    </div>
}
