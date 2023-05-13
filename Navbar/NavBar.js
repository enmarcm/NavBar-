class NavBar{
    constructor(container){
        this.container = container
        this.botones = new Map()
        this.indice = 0


        // Creamos cada uno de los elementos contenedores
        this.nav = document.createElement("nav")
        this.containerNav = document.createElement("div")
        this.containerNav.classList.add("containerNav")


        this.containerLogo = document.createElement("div")
        this.containerLogo.classList.add('containerLogo')

        this.botones = document.createElement("div")
        this.botones.classList.add('botones')


        // Agregamos los contenedores al nav
        this.nav.append(this.containerNav)

        // Agregamos los contenedores al containerNav
        this.containerNav.append(this.containerLogo)
        this.containerNav.append(this.botones)



        // AHORA CREAMOS LOS ELEMENTOS RESPONSIVES
        this.containerResponsive = document.createElement("div")
        this.containerResponsive.classList.add('containerResponsive')

        this.containerNavResponsive = document.createElement("div")
        this.containerNavResponsive.classList.add('containerNavResponsive')



        this.containerAbrir = document.createElement("div")
        this.containerAbrir.classList.add('containerAbrir')

        this.botonesResponsive = document.createElement('div')
        this.botonesResponsive.classList.add('botonesResponsive')

        // Appends
        this.containerResponsive.append(this.containerNavResponsive)
        this.containerResponsive.append(this.botonesResponsive)

        this.nav.append(this.containerResponsive)
        
        this.container.append(this.nav)


        this.Funcionar()

        return this
    }


    AgregarLogo = (logo, urlInicio) =>{
        let divContenedor = document.createElement("div")
        divContenedor.append(logo)

        if(typeof(logo) != 'Object'){
            this.containerLogo.append(logo)
            this.containerNavResponsive.append(divContenedor)
        }else{
            this.containerLogo.append(divContenedor)
            this.containerNavResponsive.append(divContenedor)
        }


        this.containerLogo.addEventListener("click", ()=>{
            window.location.href = urlInicio != null ? urlInicio : "index.html" 
        })

        return this
    }

    AgregarBoton = (contenido, url) =>{
        this.indice++

        let boton = document.createElement('div')
        let aBoton = document.createElement('a')
        
        aBoton.setAttribute('href', url)

        boton.classList.add('btn', `btn${this.indice}`)
        boton.append(aBoton)
        this.botones.append(boton)
        
        
        
        let botonR = document.createElement('div')
        let aBotonR = document.createElement('a')
        botonR.classList.add('btnR', `btnR${this.indice}`)
        
        aBotonR.setAttribute('href', url)
        botonR.append(aBotonR)
        
        this.botonesResponsive.append(botonR)

        if(typeof(contenido) != 'object'){
            aBoton.append(contenido)
            aBotonR.append(contenido)

            console.log(typeof(contenido))
        }else{
            

            for(const elemento in contenido){
                aBoton.innerHTML += contenido[elemento] 
                aBotonR.innerHTML += contenido[elemento]
            }
            
             
        }

        return this
    }
    

    Funcionar = () =>{
        this.containerNavResponsive.addEventListener("click", ()=>{

            if(this.botonesResponsive.classList.contains("responsiveActive")){
                this.botonesResponsive.classList.remove('responsiveActive')
            }else{
                this.botonesResponsive.classList.add("responsiveActive")
            }
            
        })
    }
}


const navBar = new NavBar(document.querySelector('.aquiPon')).AgregarLogo("Papel").AgregarBoton({nombreObjeto: "Home"}, '#').AgregarBoton("Boton1", '#')


