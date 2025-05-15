import React, { useState } from "react";

function Table(props) {
  return (
    <table>
      <thead>
        <th>FullName</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Smoker</th>
        <th>Jenis Rokok</th>
      </thead>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.age}</td>
          <td>{props.gender}</td>
          <td>{props.smoker}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

const App = () => {
  const [data, setData] = useState([
    {
      name: "",
      age: "",
      gender: "",
      smoker: "",
    },
  ]);

  function HandleForm(e) {
    e.preventDefault();

    console.log(data);
  }

  function HandleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <>
      <form action="">
        <div>
          <label for="name">Siapa Nama Anda</label> <br />
          <input type="text" id="name" placeholder="Siapa Nama Anda" name="name" value={data.name} onChange={HandleChange} />
        </div>
        <br />
        <div>
          <label for="age">Berapa Umur Anda</label> <br />
          <input type="number" id="age" placeholder="Berapa Umur Anda" name="age" value={data.age} onChange={HandleChange} />
        </div>
        <br />
        <div>
          <p>Apa Jenis Kelamin Anda</p>
          <input type="radio" id="gender1" name="gender" value={data.gender} onChange={HandleChange} />
          <label for="gender1">Laki-Laki</label>
          <input type="radio" name="gender" id="gender2" value={data.gender} onChange={HandleChange} />
          <label for="gender2">Perempuan</label>
        </div>
        <br />
        <div>
          <p>Apakah anda seorang perokok</p>
          <div>
            <input type="radio" name="smoker" id="smoker" value={data.smoker} onChange={HandleChange} />
            <label for="smoker">ya</label>
            <input type="radio" name="smoker" id="smoker" value={data.smoker} onChange={HandleChange} />
            <label for="notSmoker">tidak</label>  
          </div>
        </div>
        <br />
        <div>
          <p>Jika anda perokok, rokok apa yang anda pernah coba</p>
          <div>
            <input type="checkbox" id="gudangGaram" name="cigarette" checked />
            <label for="gudangGaram">Gudang Garam</label>
            <input type="checkbox" id="sampoerna" name="cigarette" />
            <label for="sampoerna">Sampoerna</label>
            <input type="checkbox" id="Marlboro" name="cigarette" />
            <label for="Marlboro">Marlboro</label>
            <input type="checkbox" id="other" name="cigarette" />
            <label for="other">yang lain</label>
            <input type="checkbox" id="dontKnow" name="cigarette" />
            <label for="dontKnow">tidak tahu</label>
          </div>
        </div>
        <br />
        <button type="reset">reset</button>
        <button type="submit" value="submit" onClick={(e) => HandleForm(e)}>
          Submit
        </button>
      </form>
      <Table {...data} />
    </>
  );
};

export default App;
