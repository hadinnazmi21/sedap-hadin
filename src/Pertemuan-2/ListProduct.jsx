export default function ListProduct() {
  return (
    <div>
      <div>
        <h1>Hello World</h1>
        <p>Selamat Belajar ReactJs</p>
      </div>
      <Product
      nama = "Peninggi Badan"/>
      <Detail harga = "120.000"/>
      <Contact/>
      <Katakata/>
    </div>
  );
}

function Product(props) {
  return (
    <div>
      <h3>Nama: {props.nama}</h3>
      <img src="img/1.jpg" alt="logo" />
    </div>
  );
}

function Detail(props){
    return(
        <div>
            <h3>Harga: {props.harga}</h3>
            <h3>Jenis: {props.jenis}</h3>
        </div>
    )
}

function Contact(){
    return(
        <div>
            <h3>No Whatsapp : 082242414141</h3>
            <h3>Instagram : JoelPurba</h3>
        </div>
    )
}

function Katakata(){
    return(
        <div>
            <h3>Anda dapat memesan product ini</h3>
        </div>
    )
}
