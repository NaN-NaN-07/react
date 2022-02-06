import React, {useState} from "react"

const AddForm =() =>{
    const [ nombre, setNombre ] = useState("")
    const [ razonSocial, setRazonSocial ] = useState("")
    const [ direccion, setDireccion ] = useState("")
    const [message, setMessage] = useState("");

   let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:6007/api/ecommerce/v1/proveedores", {
        method: "POST",
        body: JSON.stringify({
          nombre,
          razonSocial,
          direccion,
        }),
      });
      let resJson = await res.json();
      if (resJson.status === 200) {
        setNombre("");
        setRazonSocial("");
        setDireccion("")
        setMessage(`Agregado OK ${resJson.message}`);
      } else {
          console.log('status',resJson.status)
        setMessage(`Resultado: ${resJson.message}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
    return (
        <div className="formApp">
            <h1>Agregar Proveedor</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}/>
                <input type="text" name="razon" 
                value={razonSocial}
                onChange={(e) => setRazonSocial(e.target.value)}/>
                <input type="text" name="direccion" 
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}/>
                 <button type="submit">Agregar</button>
                <input type="reset" name="Limpiar" />
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    )
}

export default AddForm