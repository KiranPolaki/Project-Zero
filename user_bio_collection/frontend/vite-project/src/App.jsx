import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, seyName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [oc, setOc] = useState("");
  const [rc, setRc] = useState("");
  const [co, setCo] = useState("");
  const [gender, setGender] = useState("porn-a");
  const [pr, setPr] = useState("he");
  const [int, seInt] = useState();

  return (
    <>
      <p>name</p>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        required
        onChange={(e) => {
          seyName(e.target.value);
        }}
      />
      <p>email</p>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <p>dob</p>
      <input
        type="date"
        id="date_of_birth"
        name="date_of_birth"
        required
        value={dob}
        onChange={(e) => {
          setDob(e.target.value);
        }}
      />
      <p>occupation</p>
      <input
        type="text"
        id="occupation"
        name="occupation"
        value={oc}
        onChange={(e) => {
          setOc(e.target.value);
        }}
      />
      <p>race</p>
      <input
        type="text"
        id="race"
        name="race"
        value={rc}
        onChange={(e) => {
          setRc(e.target.value);
        }}
      />
      <p>country</p>
      <input
        type="text"
        id="country"
        name="country"
        value={co}
        onChange={(e) => {
          setCo(e.target.value);
        }}
      />
      <p>gender</p>
      <select
        name="gender"
        id="gender"
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      >
        <option value="porna">porn-a</option>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>
      <p>pronounce</p>
      <select
        name="pronouns"
        id="pronouns"
        value={pr}
        onChange={(e) => {
          setPr(e.target.value);
        }}
      >
        <option value="he">he</option>
        <option value="him">him</option>
        <option value="she">she</option>
        <option value="male">her</option>
      </select>
      <p>interests</p>
      <input
        type="text"
        id="interests"
        name="interests"
        value={int}
        onChange={(e) => {
          seInt(e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={async () => {
          try {
            await axios.post("http://127.0.0.1:5000/submit", {
              name,
              email,
              dob,
              oc,
              rc,
              co,
              gender,
              pr,
              int,
            });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {" "}
        Submit
      </button>
    </>
  );
}

export default App;
