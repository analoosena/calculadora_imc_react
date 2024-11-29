import { useState, useEffect } from 'react'
import TabelaIMC from '../Table';

import styles from './Calculadora.module.css'

const Calculadora = () => {

    let [peso, setPeso] = useState(0); 
    let [altura, setAltura] = useState(0);
    const [resultadoImc, setResultadoImc] = useState(null); // Estado para armazenar o resultado do IMC
    const [calculoAtivo, setCalculoAtivo] = useState(false); // Estado para indicar se o cálculo deve ser exibido automaticamente

    const CalculaImc = () => {
        if(altura > 0){
            const potencia = Math.pow(altura, 2);
            return (peso / potencia).toFixed(2); //Retorna o IMC com 2 casas decimais
        } else{
            return 0;
        }
    }

    // Atualiza o resultado automaticamente após a primeira interação
    useEffect(() => {
        if (calculoAtivo) {
            const imc = CalculaImc(); // Calcula o IMC
            setResultadoImc(imc); // Atualiza o estado com o novo resultado
        }
    }, [peso, altura, calculoAtivo]); // Recalcula quando peso ou altura mudam e após o cálculo ser ativado

    const atualizaOCalculaImc = () => {
        setCalculoAtivo(true); // Ativa o cálculo automático
        const imc = CalculaImc(); // Calcula o IMC imediatamente
        setResultadoImc(imc); // Atualiza o estado com o resultado
    };

    const reset = () => {
        setPeso(0);
        setAltura(0);
        setResultadoImc(null);
        setCalculoAtivo(false);
        };

    return(
        <div className={styles.header}>
            <h2 className={styles.title}>Calculadora de IMC</h2>
            <div className={styles.itens}>
                <label>Peso (kg) </label>
                <input className={styles.label} type="number" value={peso || ""} placeholder='Ex: 50kg' onChange={evento => setPeso(parseInt(evento.target.value))}  />
                <label>Altura (m) </label>
                <input className={styles.label} type="number" value={altura || ""} placeholder='Ex: 1,7m' onChange={evento => setAltura(parseFloat(evento.target.value))} />
            </div>

            {!calculoAtivo && (
                <button type="button" onClick={atualizaOCalculaImc}>Calcular IMC</button>
            )}
            {calculoAtivo && (
                <button onClick={reset}>Resetar</button>
            )}
            


            {resultadoImc !== null && (
                <>
                <h3>Resultado do IMC: {resultadoImc}</h3>
                {/* Passa o resultado para a tabela como prop */}
                <TabelaIMC resultadoImc={resultadoImc} />
                </>
            )}
            
        </div>
        
    )
    
}


export default Calculadora;