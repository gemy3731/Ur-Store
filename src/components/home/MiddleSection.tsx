import { Package, Star, TrendingUp, type LucideIcon } from "lucide-react";
import MiddleSectionItem from "./MiddleSectionItem";

export interface MiddleSectionItemProps {
    Icon: LucideIcon ;
    title: string;
    description: string;
}
const sectionData:MiddleSectionItemProps[] = [
    {Icon:TrendingUp,title:"Trending Products",description:"Discover the latest and most popular items"},
    {Icon:Package,title:"Fast Delivery",description:"Quick and reliable shipping on all orders"},
    {Icon:Star,title:"Quality Guarantee",description:"Verified sellers with top-rated products"},
]
const MiddleSection = () => {
  return (
    <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sectionData.map(({Icon,title,description},index)=>(
                    <MiddleSectionItem key={index} Icon={Icon} title={title} description={description} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default MiddleSection