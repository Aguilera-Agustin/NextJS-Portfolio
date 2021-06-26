import { AppLayout } from "../components/AppLayout/AppLayout"
import { MainCard } from "../components/MainCard/MainCard"
import { Description } from "../components/Description/Description"
import { Portfolio } from "../components/Portfolio/Portfolio"
import { Footer } from "../components/Footer/Footer"


export default function Home() {
  return (
   <AppLayout>
     <MainCard/>
     <Description/>
     <Portfolio/>
     <Footer/>
   </AppLayout>
  )
}
