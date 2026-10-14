import Image from 'next/image'
import ti from "@/public/images/test-image.jpg";

export default async function Home() {
  return (
    <main>
      <Image src={ti} alt="test image" />
    </main>
  )
}
