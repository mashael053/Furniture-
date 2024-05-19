
function Card() {
  return (
    <>
<div className="flex justify-center gap-10 mt-10 ml-11">

<div className="h-[30vh] w-[40vw] bg-gray flex items-center gap-12 shadow-xl ">

<div className="ml-10" >
<h3 className="text-black text-lg font-bold mt-2">WOODEN MINIMALISTIC</h3>
<p className="font-bold text-lime-600 mt-2 ">40% OFF</p>
<button className="bg-amber-400 font-bold rounded-lg mt-5 p-1">SHOP NOW</button>
</div>
<div></div>
<img className="h-[30vh] " src="https://img.freepik.com/free-psd/chair-pillow_176382-876.jpg?w=740&t=st=1700991649~exp=1700992249~hmac=c86df5b1f23a85b9099be7e3f2a11f04a46de5e7168441fc69c517c769d29721"/>
</div>
        <div className="h-[30vh] w-[20vw] bg-gray-100 shadow-xl flex flex-col gap-4">
            <div className="text-center">
            <h2 className="font-bold">Gionlano</h2>
            <h6 >PACE 5 T-SHIRTTS FOR SUMMER</h6>
            <p>Starting at <span className="text-rose-800">$99.99</span></p>
            </div>
            <img className="h-[17vh]" src="https://img.freepik.com/free-photo/woolen-cardigans-folded-rustic-wooden-table-generated-by-ai_188544-25253.jpg?t=st=1700964888~exp=1700968488~hmac=d47237423bc9cc7ada18676a45f7acd4e5aa597f9031169195a0324fab7ba354&w=1060"></img>
        </div>
</div>

    </>
  )
}

export default Card

