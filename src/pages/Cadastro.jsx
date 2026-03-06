import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Cadastro.css'

function Cadastro() {

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function cadastrar(e) {
    e.preventDefault()
    await fetch("http://localhost:3020/usuarios",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },

        body: JSON.stringify({
          login,
          senha
        })
      }
    )
    alert("Cadastro realizado com sucesso!!")
    navigate("/login")
  }

  return (
    <div>
      <h2>NOVO CADASTRO</h2>

      <form onSubmit={cadastrar}>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        /> <br />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <Link to={"/Login"}>Login</Link><br />
    </div>
  );
}

export default Cadastro;