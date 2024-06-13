
function Content({img,text}){
    return (
        <div>
            <div className='image'>
        <img src={img} alt='gaal-pookie'/>
      </div>
      <div className='text'>
        {text}
      </div>
        </div>
    )
    
}
export default Content;