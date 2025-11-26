import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AtividadeContador() {
  const navegar = useNavigate();

  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Atividade 2 - Contador de pessoas</h2>
      <h1>Total</h1>

      <div
        style={{
          border: "1px solid #ccc",
          width: 120,
          margin: "0 auto",
          padding: 10,
          borderRadius: 8,
          fontSize: 24,
          fontWeight: "bold",
          backgroundColor: "#f2f2f2",
        }}
      >
        {total}
      </div>

      <br />

      {/* --- HOMENS --- */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div style={{ marginRight: 50, textAlign: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
            alt="Homem"
            width={80}
          />
          <div style={{ marginTop: 10 }}>
            <button onClick={() => setHomens(homens + 1)}>➕</button>
            <button
              onClick={() => homens > 0 && setHomens(homens - 1)}
              style={{ marginLeft: 10 }}
            >
              ➖
            </button>
          </div>
          <p>Homens</p>
          <div
            style={{
              border: "1px solid #ccc",
              padding: 5,
              width: 60,
              margin: "0 auto",
            }}
          >
            {homens}
          </div>
        </div>

        {/* --- MULHERES --- */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201634.png"
            alt="Mulher"
            width={80}
          />
          <div style={{ marginTop: 10 }}>
            <button onClick={() => setMulheres(mulheres + 1)}>➕</button>
            <button
              onClick={() => mulheres > 0 && setMulheres(mulheres - 1)}
              style={{ marginLeft: 10 }}
            >
              ➖
            </button>
          </div>
          <p>Mulheres</p>
          <div
            style={{
              border: "1px solid #ccc",
              padding: 5,
              width: 60,
              margin: "0 auto",
            }}
          >
            {mulheres}
          </div>
        </div>
      </div>

      <br /><br />
      <button onClick={() => navegar("/")}>Voltar</button>
    </div>
  );
}
