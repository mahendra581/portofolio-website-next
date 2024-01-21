import Image from 'next/image'
import Navbar from '@/components/navbar'
import Homee from '@/components/home'
import About from '@/components/about'
import Skills from '@/components/skiils'
import SectionDivider from '@/components/ui/sectionDivider'
import Experience from '@/components/experience'
import Footer from '@/components/footer'
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 mt-8">
      <Homee/>
      <SectionDivider/>
      <About/>
      <SectionDivider/>
      <Skills/>
      <SectionDivider/>
      <Experience/>
      <Footer/>
    </main>
  )
}
