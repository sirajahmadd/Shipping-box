import React,{useState} from 'react'

function ShippingForm(props) {
  const [title,setTitle]= useState("title name");
  const [number,setNumber]=useState("");
  const [color,setColor]=useState("");
  const [place,setPlace]=useState("place-name");
  const [weight,setWeight]=useState("weight");


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('its running');

    const data = {
      item: title,
      itemNum: number,
      itemColor: color,
      itemPlace: place,
      itemWeight:weight
    };
    props.addToListCallback(data)
  };

  return (
    <div className='form-div'>
      <form onSubmit={handleSubmit}>
        <center>
          <h1><u>Shipping box</u></h1>
          <input type="text" value={title} 
          onChange={(e) => setTitle(e.target.value)}></input>

          <input type="number" value={number} 
          onChange={(f) => setNumber(f.target.value)}></input>

          <input type="color" value={color}
          onChange={(g) => setColor(g.target.value)}></input>

          <input type="text" value={place}
          onChange={(h) => setPlace(h.target.value)}></input>

          <input type="text" value={weight}
          onChange={(h) => setWeight(h.target.value)}></input>


          <button type='submit'> submit</button>

        </center>
      </form>
    </div>

  )
}

export default ShippingForm