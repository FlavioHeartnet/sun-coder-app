
import Layout from "./homeLayout";
import Courses from "../components/courses";
import { PriceList } from "@/components/pricelist";
import HomeIntro from "@/components/homeIntro";

export default function HomePage(){
  
    return (
      <Layout>
        <HomeIntro/>
        <Courses/>
        <PriceList/> 
      </Layout>
    );
}

