import '../styles/icon.css'

const peticon = () => {
    return ( 
             <div className="label">
        <img src={require('../images/stethoscope.png')} alt='pupIcon' className='pupIcon'/>  
          <p className="puphub">
                    
            <b>
            <span className="text-wrapper">Pup</span>
            <span className="span">hub</span></b>
          </p>
        </div>
     
     );
}
 
export default peticon;