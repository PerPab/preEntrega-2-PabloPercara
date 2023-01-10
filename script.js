


let datos = [
    {codigo: '0001', nombre: 'MARTILLO', stock: 20, ubicacion: 'A120302'},
    {codigo: '0002', nombre: 'CLAVOS', stock: 250, ubicacion: 'A211009'},
    {codigo: '0003', nombre: 'SIERRA', stock: 20, ubicacion: 'A233009'},
    {codigo: '0004', nombre: 'PEGAMENTO', stock: 30, ubicacion: 'A010302'},
    {codigo: '0005', nombre: 'CEMENTO', stock: 50, ubicacion: 'A031009'},
    {codigo: '0006', nombre: 'CUERDA', stock: 200, ubicacion: 'A232014'}
]



function inventario(datos){
    let opciones =[1,2,3,4,5]
    let menu = prompt('Ingrese una opcion: \n1-Ingresar un nuevo producto\n2-Eliminar un producto existente\n3-Consultar stock\n4-Consultar ubicacion\n5-Listar base de datos\n\nIngrese cualquier otro valor para SALIR');
    while(menu!=opciones){
        if(menu == 1){//-------------AGREGAR UN PRODUCTO A LA LISTA-----------------------------------
    //----------------------------------VALIDACIONES--------------------------------------------------
            let nuevoCodigo = prompt('Ingrese el codigo del producto: ');
            if(nuevoCodigo == null){
                inventario(datos)
            }
            let validarCodigo = datos.some(dato => dato.codigo == nuevoCodigo);
            while(validarCodigo == true || nuevoCodigo == ''){
                nuevoCodigo = prompt('El codigo ingresado es incorrecto o ya existe, ingrese otro: ')
                validarCodigo = datos.some(dato => dato.codigo == nuevoCodigo);
            }
    
            let nuevoNombre = prompt('Ingrese el nombre del producto: ').toUpperCase();
            let validarNombre = datos.some(dato => dato.nombre == nuevoNombre);
            while(validarNombre == true || nuevoNombre ==''){
                nuevoNombre = prompt('El nombre ingresado es incorrecto o ya existe, ingrese otro: ').toUpperCase();
                validarNombre = datos.some(dato => dato.nombre == nuevoNombre);
            }
   
            let stock = Number(prompt('Ingrese el stock: '))
            if(stock == null){
                inventario(datos)
            }
            while(isNaN(stock) || stock == ''){
                stock=Number(prompt('El valor ingresado no es numerico: '))
            }
         
            let nuevaUbicacion = prompt('Ingrese la ubicacion del producto: ').toUpperCase();
            let validarUbicacion = datos.some(dato => dato.ubicacion == nuevaUbicacion)
            while(validarUbicacion == true || nuevaUbicacion ==''){
                nuevaUbicacion = prompt('La ubicacion ya esta en uso o es incorrecta, ingrese otra: ').toUpperCase();
                validarUbicacion = datos.some(dato => dato.ubicacion == nuevaUbicacion)
            }
    //-----------------------------------CREACION DEL OBJETO---------------------------------------------
            let producto = {
                codigo: nuevoCodigo,
                nombre: nuevoNombre,
                stock: stock,
                ubicacion: nuevaUbicacion
            }
    //------------------------------------PUSH A LA LISTA-------------------------------------------------       
            datos.push(producto);
            console.log(datos)
            let otroProducto = confirm('¿Desea cargar otro producto a la lista?');
            if(!otroProducto){ 
                inventario(datos);
            }
        }else if(menu == 2){//------------ELIMINAR UN PRODUCTO---------------------------------------------
            let codigo = prompt("Ingrese el codigo o nombre del producto a eliminar: ")
            if(codigo == null){
                inventario(datos)
            }
            let producto = datos.find(producto => (producto.codigo === codigo) || (producto.nombre === codigo.toUpperCase()))
            let busqueda = datos.findIndex( producto => (producto.codigo === codigo) || (producto.nombre === codigo.toUpperCase()))
            let respuesta = confirm(`Seguro desea eliminar el producto ${producto.nombre}, en el índice ${busqueda}?`)
                if(respuesta == true){
                    datos.splice(busqueda, 1)
                    alert("Producto eliminado!")
                    inventario(datos)
                }else{inventario(datos)}
        }else if(menu == 3){//-----------CONSULTAR STOCK-----------------------------------------------------------
            let codigo = prompt("Ingrese el codigo o nombre del producto buscado") 
            if(codigo == null){
                inventario(datos)
            }
            let busqueda = datos.find( producto => (producto.codigo === codigo) || (producto.nombre === codigo.toUpperCase()))
            let resultado = confirm(`El stock disponible del producto ${busqueda.nombre} es de ${busqueda.stock} unidades\n Desea realizar otra busqueda?`)
            if(!resultado || resultado){
                inventario(datos);
            }
        }else if(menu == 4){//----------CONSULTAR UBICACION---------------------------------------------------------
            let codigo = prompt("Consultar Ubicación por codigo o nombre") 
            if(codigo==null){
                inventario(datos)
            }
            let busqueda = datos.find( producto => (producto.codigo === codigo) || (producto.nombre === codigo.toUpperCase()))
            alert(`La ubicación del producto ${busqueda.nombre} es ${busqueda.ubicacion}`);
            inventario(datos);

        }else if( menu == 5){//-----------LISTAR BASE DE DATOS--------------------------------------------------------
            let vista = 'Productos disponibles en la base de datos: \n\n';
            datos.forEach(item => {vista += item['codigo'] +' '+ item['nombre'] + '\n'});
            alert(vista);
            inventario(datos);
        }else{
            let consulta = confirm('Desea terminar el programa?')
            if(!consulta){
                inventario(datos)
            }else{
                
            }


            
        }

        
    }
   
    
}


//------------LLAMADA A LA FUNCION-----------------


inventario(datos)       



        
 