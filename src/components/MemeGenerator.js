import React from 'react'

function MemeGenerator() {
    const [meme, setMeme] = React.useState({
        topText :"",
        bottomText : "",
        randomImage : "https://i.imgflip.com/1g8my4.jpg",
    });
    const[allMemes, setAllMemes] = React.useState([]);
    React.useEffect(() =>{
      fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes))
    }, [])
    function getMemeImage(){
      const randomNumber = Math.floor(Math.random()*allMemes.length);
      const url = allMemes[randomNumber].url;
      setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: url,
      }))
    }
    function handleChange(event){
      const{name, value} = event.target;
      setMeme((prevMeme) =>({
        ...prevMeme,
        [name] : value,
      }))
    }
  return (
    <main>
      < div className="form">
        <input 
          type ="text"
          placeholder="Write some text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}         
        />
        <input 
          type ="text"
          placeholder="Write some text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}         
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a new Meme Image
        </button>
      </div>
      <div className="meme">
        <img className="meme-image" src={meme.randomImage} alt=""/>
        <h2 className="meme-topText top"> {meme.topText}</h2>
        <h2 className="meme-topText bottom"> {meme.bottomText}</h2>
      </div>
      
    </main>
  );
}

export default MemeGenerator
