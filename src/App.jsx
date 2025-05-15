import { useState } from "react";

function Table({ data }) {
  return (
    <table border="1">
      <thead>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Smoker</th>
        <th>Jenis Rokok</th>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>{item.smoker}</td>
            <td>{item.cigarette.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const App = () => {
  const [data, setData] = useState([]);

  function HandleForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newData = {
      name: formData.get("name") || "",
      age: formData.get("age") || "",
      gender: formData.get("gender") || "",
      smoker: formData.get("smoker") || "",
      cigarette: formData.getAll("cigarette") || [],
    };

    setData((prevData) => [...prevData, newData]);

    e.target.reset();
  }

  return (
    <>
      <form onSubmit={HandleForm}>
        <div>
          <label for="name">Siapa Nama Anda</label> <br />
          <input type="text" id="name" placeholder="Siapa Nama Anda" name="name" />
        </div>
        <br />
        <div>
          <label for="age">Berapa Umur Anda</label> <br />
          <input type="number" id="age" placeholder="Berapa Umur Anda" name="age" />
        </div>
        <br />
        <div>
          <p>Apa Jenis Kelamin Anda</p>
          <input type="radio" id="gender1" name="gender" value="Men" />
          <label for="gender1">Laki-Laki</label>
          <input type="radio" name="gender" id="gender2" value="Woman" />
          <label for="gender2">Perempuan</label>
        </div>
        <br />
        <div>
          <p>Apakah anda seorang perokok</p>
          <div>
            <input type="radio" name="smoker" id="smoker" value="smoker" />
            <label for="smoker">ya</label>
            <input type="radio" name="smoker" id="smoker" value="non smoker" />
            <label for="notSmoker">tidak</label>
          </div>
        </div>
        <br />
        <div>
          <p>Jika anda perokok, rokok apa yang anda pernah coba</p>
          <div>
            <input type="checkbox" id="gudangGaram" name="cigarette" value="Gudang Garam" />
            <label for="gudangGaram">Gudang Garam</label>
            <input type="checkbox" id="sampoerna" name="cigarette" value="Sampoerna" />
            <label for="sampoerna">Sampoerna</label>
            <input type="checkbox" id="Marlboro" name="cigarette" value="Marlboro" />
            <label for="Marlboro">Marlboro</label>
          </div>
        </div>
        <br />
        <button type="reset">reset</button>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
      <br />
      <Table data={data} />
    </>
  );
};

export default App;
