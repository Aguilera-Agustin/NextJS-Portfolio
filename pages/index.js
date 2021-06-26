import { AppLayout } from "../components/AppLayout/AppLayout"
import { MainCard } from "../components/MainCard/MainCard"
import { Description } from "../components/Description/Description"
export default function Home() {
  return (
   <AppLayout>
     <MainCard/>
     <Description/>
   </AppLayout>
  )
}
