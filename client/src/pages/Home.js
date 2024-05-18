const Home = () => {
  return (
    <div className="home">
      <div className="txt1">Taking care <br />for your Beloved Pet !
      <p>Human-canine bounding is the relationship <br />between dogs and human.</p>

      <a href="/" style={{ 
          color: 'white', 
          height:'49px',
          width:'146px',
          backgroundColor: '#ffaa00',
          left: '0',
          borderRadius: '5px' 
        }}>Explain More..</a>
      </div>
      
    <img src={require('../images/icon.jpg')} alt='home' className='img'/>
    </div>
  );
}
 
export default Home;