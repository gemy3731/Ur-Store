import {  Search } from "lucide-react"
import { Input } from "../ui"
import SelectButton from "../ui/SelectButton"
import { brands, categories } from "../../data";


  interface FilterSectionProps {
    setSelectedCategory: (value: string) => void;
    setSelectedBrand: (value: string) => void;
    setSearchValue: (value: string) => void
  }
const FilterSection = ({ setSelectedCategory, setSelectedBrand,setSearchValue }: FilterSectionProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Input Icon={Search} type="text" placeholder="Search products..." id="search" name="search" onChange={(e) => setSearchValue(e.target.value)} />
          <SelectButton defaultValue="All Categories" id="categories" listItems={categories} setCurrentValue={setSelectedCategory} />
          <SelectButton defaultValue="All Brands" id="Brands" listItems={brands} setCurrentValue={setSelectedBrand} />
        </section>
  )
}

export default FilterSection