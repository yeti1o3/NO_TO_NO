import first from './images/up-movie-carl.gif'
import second from './images/up-movie-love.gif'
import './LastPage.css'
function LastPage()
{

    return (
        <div className='last-page'>
            <div className='first'>
                <img src={first} alt="carl"/>
            </div>
            <div className='last-page-text'>
                text
            </div>
            <div className='second'>
                <img src={second} alt="carl"/>
            </div>
        </div>
    )
}
export default LastPage;