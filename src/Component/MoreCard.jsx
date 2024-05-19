
function MoreCard(props) {
  return (
    <>



<div className="h-[10rem] w-96 bg-white flex justify-items-center rounded-lg shadow-2xl ml-20  ">
<img className="h-20 mt-[2rem]"  src={props.images}/>
<div className="mt-[2rem]">
    <h1 className="font-bold text-black-700">{props.title}</h1>
    <h5 className="font-medium">{props.pragragh}</h5>
    <p className="ml-15">{props.pra}</p>
    </div>

</div>

    </>
  )
}

export default MoreCard