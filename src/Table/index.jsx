import styles from './Table.module.css'

const TabelaIMC = ({ resultadoImc }) => {
    const faixasImc = [
        { faixa: "Magreza", min: 0, max: 18.5 },
        { faixa: "Normal", min: 18.5, max: 24.9 },
        { faixa: "Sobrepeso", min: 25, max: 29.9 },
        { faixa: "Obesidade Grau I", min: 30, max: 34.9 },
        { faixa: "Obesidade Grau II", min: 35, max: 39.9 },
        { faixa: "Obesidade Grau III", min: 40, max: Infinity },
    ];

    return (
        <table className={styles.tabela}>
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                </tr>
            </thead>
            <tbody>
                {faixasImc.map((faixa, index) => {
                // Verifica se o resultado do IMC está dentro da faixa atual
                const isHighlighted =
                resultadoImc >= faixa.min && resultadoImc < faixa.max;
                return (
                    <tr
                        key={index}
                        style={{
                        fontWeight: isHighlighted?  800 : "none",
                        backgroundColor: isHighlighted ? "#26e9eb" : "transparent",
                        boxShadow: isHighlighted
                            ? "0 0 10px #001"
                            : "none",
                        }}
                    >
                        <td>{faixa.faixa}</td>
                        <td>{faixa.min === 40 ? '' : faixa.min} - {faixa.max === Infinity ? "Acima de 40" : faixa.max}</td>
                        {/* <td>{faixa.min} - {faixa.max === Infinity ? "Acima de 40" : faixa.max} </td> */}
                        
                    </tr>
                );
                })}
            </tbody>
        </table>
    );
};

export default TabelaIMC;