import { UploadImage } from "./components/UploadImage"

const images = [
  { src: "https://i.pinimg.com/564x/17/2c/bb/172cbb89987190d36134de61325c62e6.jpg", alt: "girl-black-style-1" },
  { src: "https://i.pinimg.com/564x/f7/22/61/f72261d243a11ae1f9f71bcd8e331dfd.jpg", alt: "breakfast-1" },
  { src: "https://i.pinimg.com/564x/89/94/76/8994768c74664105b4add642cda924e3.jpg", alt: "pizza-1" },
  { src: "https://i.pinimg.com/564x/fa/40/7b/fa407b6ca4d0893bb23d123bfec6232c.jpg", alt: "pizza-2" },
  { src: "https://i.pinimg.com/564x/45/0c/c5/450cc5342a1d1cbb55729ed944300576.jpg", alt: "pizza-3" },
]

export default function Home() {
  return (
    <div>
      <UploadImage />
    </div>
  )
}
