import React from "react"

const url = "http://localhost:6007/api/ecommerce/v1/proveedores"

let pag = {page:1, elements:5};

class TablaProv extends React.Component {
   state = { data :[], pagination :{}}

   getProveedores = async (page) =>{

      fetch(`${url}?page=${page}&elements=${pag.elements}`)
        .then(response => response.json())
        .then(json => {
            console.log('json', json)
            this.setState({pagination: { page: json.page, total: json.total, totalPages: new Array(json.totalPages).fill({pagina : 0})}})
            this.setState({data: json.data})

        })
   }

   deleteProveedor = async (id) =>{
  
    fetch(`${url}/${id}`, { method: 'DELETE' })
      .then(response => {this.getProveedores(1)})
      
 }

   componentDidMount(){
       this.getProveedores(1)
   }

    render() {
      return (
          <div>
              <h1>Proveedores</h1>
              <table>
                  <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Razon Social</th>
                    <th>direccion</th>
                </tr>
                </thead>
                <tbody>
                    { 
                        this.state.data.map(proveedor => {
                        return ( <tr>
                            <td>{proveedor.nombre}</td>
                            <td>{proveedor.razonSocial}</td>
                            <td>{proveedor.direccion}</td>
                            <td><button onClick={()=> this.deleteProveedor(proveedor.nombre)}>eliminar</button> </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
                </table>
                <div>
                <table>
                <thead>
                <tr>
                { 
                    this.state.pagination.totalPages?.map( (e,i) => {
                        return ( <th>
                                    <button onClick={()=> this.getProveedores(i+1)}>{i+1}</button> 
                            </th>
                        )
                    })  
                    }
                </tr>
                </thead>
                </table>
                </div>
                
          </div>
      )
    }
  }
export default TablaProv