import './globals.css'
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata = {
  title: 'Jenin A. Bostan',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='md:flex justify-center items-center'>{children}</body>
    </html>
  )
}
