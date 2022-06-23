

const film=[
    { name: "film1", theme :"theme1"},
    { name: "film2", theme :"theme2"},
    { name: "film3", theme :"theme3"},
    { name: "film4", theme :"theme4"},
    { name: "film5", theme :"theme5"},
    { name: "film6", theme :"theme6"},

    
]

function getFilms(){
    const promise1=new Promise((resolve,reject)=>{
        film.map(film=>{
        console.log(film.name)
        resolve("Başarılı bir şekilde sıralandı")
        //reject("HATA OLUŞTU")
    })
    })
    return promise1
}

function addFilm(newFilm){

    const promise1=new Promise((resolve,reject)=>{
        film.push(newFilm)
        //resolve("Film ekledndi")
        reject("FİLM EKLENİRKEN HATA OLUŞTU")
    })
    return promise1
}


async function showFilms(){

    try{
        await addFilm({ name: "film8", theme: "theme8" })
     
        await getFilms()
        
    }
    catch(error){
        console.log(error)
    }

  
}
showFilms()