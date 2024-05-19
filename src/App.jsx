
import './App.css'
import Navbar from './Component/Navbar'
import Card from './Component/Card'
import MoreCard from './Component/MoreCard'
import Lastcard from './Component/Lastcard'

function App() {


  return (
    <>

<Navbar/>
<Card/>

<h1 className="font-bold text-center mt-10">Top Categrories Of The Month</h1>

<div className='grid grid-rows-2 grid-flow-col gap-4'>
<MoreCard title="Electronic" pragragh="TV Televistions" pra="Air Conditioners Waashing Machines Audio & Theaters Office Electronic"images="https://nouthemes.net/html/martfury/img/categories/shop/5.jpg"/>
<MoreCard title="Clothings" pragragh="Womens Mens Bags & Backpacks Accessories"images="https://nouthemes.net/html/martfury/img/categories/shop/1.jpg"/>
<MoreCard title="Computers" pragragh="Desktop PC Laptop PC Gaming Storage & Memory PC Components"images="https://nouthemes.net/html/martfury/img/categories/shop/9.jpg"/>
<MoreCard title="Home & Kitchen" pragragh="Funitures
Decor
Cookwares
Utensil & Gadgets
Garden Tools"images="https://nouthemes.net/html/martfury/img/categories/shop/2.jpg"/>
<MoreCard title="Healthy & Beauty" pragragh="Makeup
Skin Care
Hair Care
Tools & Equipments
Perfurmes"images="https://nouthemes.net/html/martfury/img/categories/shop/10.jpg"/>
<MoreCard title="Jewelry & Watch" pragragh="Jewelry & Watch
Pendant
Necklace
Watch
Bracelets
Accessories
"images="https://nouthemes.net/html/martfury/img/categories/shop/6.jpg"/>

</div>

<Lastcard />

    </>
  )
}

export default App
