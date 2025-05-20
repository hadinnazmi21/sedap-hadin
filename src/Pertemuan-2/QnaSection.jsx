export default function QnaSection(){
    return (
        
        <div>
            
            <h1>Apa Kata Mereka?</h1>
            <h2>Keramahan dan Profesionaliatas adalah kunci Kesuksesan</h2>
            <img src="img/1.jpg" alt="logo" />
            <Profile
            nama = "Fikri"
            usia = "20"
            />
            <Pertanyaan
            pertanyaan = "Siapa dia?"
            />
            <Ekspresi/>
            <Jawaban/>
        </div>
    )
}

function Profile(props){
    return(
        <div>
            <hr />
            <h3>Nama: {props.nama}</h3>
            <p>Usia: {props.usia}</p>
            
        </div>
    )
}

function Pertanyaan(props){
    return(
        <div>
            <hr />
            <h3>Pertanyaan: {props.pertanyaan}</h3>
            
            
        </div>
    )
}

function Ekspresi(){
    return(
        <div>
            <p>Senang</p>
            
        </div>
    )
}

function Jawaban(){
    return(
        <p>Terimakasih atas masukannya</p>
    )
}


