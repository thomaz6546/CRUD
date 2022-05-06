import {cpfMask, dateMask, phoneMask} from "../Functions/Masks";
import {useState, useEffect} from "react";
import {ToastContainer, toast} from 'react-toastify';
import image1 from "../../Images/troca.png"
import image2 from "../../Images/deletar.png"
import 'react-toastify/dist/ReactToastify.css';
import _ from 'lodash'

function App() {

    const notify = () => toast("Cadastro concluído com sucesso!");
    const errorNotify = () => toast("Preencha todos os campos!");
    const dadosApagadosNotify = () => toast("Os dados foram apagados!");
    const [pessoas, setPessoas] = useState([])
    const [funcionario, setFuncionario] = useState({})

    const getData = () => {
        const aux = JSON.parse(localStorage.getItem("pessoa"))
        if (aux) {
            setPessoas(aux)
        }
    }

    function salvarLocalStorage() {
        let aux
        aux = Object.assign([], pessoas)
        aux.push(funcionario)

        if (_.isEmpty(funcionario?.name) ||
            _.isEmpty(funcionario?.cpf) ||
            _.isEmpty(funcionario?.phone) ||
            _.isEmpty(funcionario?.email) ||
            _.isEmpty(funcionario?.dataDeNascimento) ||
            _.isEmpty(funcionario?.cargo) ||
            _.isEmpty(funcionario?.salario)) {
            errorNotify()
        } else {
            localStorage.setItem("pessoa", JSON.stringify(aux))
            setPessoas(aux)
            notify()
            setFuncionario({
                name: '',
                email: '',
                cpf: '',
                dataDeNascimento: '',
                phone: '',
                salario: '',
                cargo: ''
            })
        }
    }

    function removeItem(positon) {
        let arrPessoa = pessoas
        arrPessoa.splice(positon, 1)
        localStorage.setItem("pessoa", JSON.stringify(arrPessoa))
        window.location.reload()
    }


    function limpaLocalStorage() {
        localStorage.clear()
        dadosApagadosNotify()
        setPessoas([])
    }

    function alterarDados(item) {
        console.log(item);
        setFuncionario({
            name: item.name,
            email: item.email,
            cpf: item.cpf,
            dataDeNascimento: item.dataDeNascimento,
            phone: item.phone,
            salario: item.salario,
            cargo: item.cargo
        })
        let arrPessoa = pessoas
        arrPessoa.splice(item, 1)
        localStorage.setItem("pessoa", JSON.stringify(arrPessoa))
    }
    console.log(funcionario);
    console.log(pessoas)

    useEffect(() => {
        getData()
    }, []);

    return (

        <div>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover/>


            <div className="cabecalho">
                <h1>BlueRegister</h1>
            </div>


            <div className="paiDivRgstr">
                <div className="registro">

                    <div className="tituloRgstr">
                        <span className="tituloDivRgstr">Registro</span>
                    </div>

                    <div className="paiDiv">
                        <div className="inputs">
                            <div>
                                <input value={funcionario?.name}
                                       onChange={(e) => setFuncionario({...funcionario, name: e.target.value})}
                                       className="inputText" placeholder="Nome" type="text"/>
                            </div>

                            <div>
                                <input value={funcionario?.email}
                                       onChange={(e) => setFuncionario({...funcionario, email: e.target.value})}
                                       className="inputText" placeholder="E-mail" type="email"/>
                            </div>

                            <div>
                                <input value={funcionario?.cpf}
                                       onChange={(e) => setFuncionario({
                                           ...funcionario,
                                           cpf: cpfMask(e.target.value)
                                       })}
                                       className="inputText" placeholder="CPF" type="text"/>
                            </div>

                            <div>
                                <input value={funcionario?.dataDeNascimento}
                                       onChange={(e) => setFuncionario({
                                           ...funcionario,
                                           dataDeNascimento: dateMask(e.target.value)
                                       })}
                                       className="inputText" placeholder="00/00/0000" type="text"/>
                            </div>

                            <div>
                                <input className="inputText" placeholder="67 99999-9999" value={funcionario?.phone}
                                       onChange={(e) => setFuncionario({
                                           ...funcionario,
                                           phone: phoneMask(e.target.value)
                                       })}
                                />
                            </div>

                            <div>
                                <input value={funcionario?.salario}
                                       onChange={(e) => setFuncionario({...funcionario, salario: e.target.value})}
                                       className="inputText" type="number" placeholder="Salário"/>
                            </div>


                            <select className="inputText"
                                    value={funcionario?.cargo}
                                    onChange={(e) => setFuncionario({...funcionario, cargo: e.target.value})}>
                                <option value="Cargos">Cargos</option>
                                <option value="Desenvolvedor">Desenvolvedor</option>
                                <option value="Designer">Designer</option>
                                <option value="Gerente">Gerente</option>
                                <option value="Secretário">Secretário</option>
                            </select>


                            <div className="fButtons">
                                <div>
                                    <input type="button" className="send" value="Salvar"
                                           onClick={salvarLocalStorage}/>
                                </div>

                                <div>
                                    <input id='botaoApagar' type="button" className="delete" value="Apagar Tudo"
                                           onClick={limpaLocalStorage}/>

                                </div>
                            </div>
                        </div>
                        <div className='tabela'>
                            <div>

                                {pessoas?.map((item, index) =>
                                    <div key={index} className="rowList">


                                        <div style={{width: "12.5%"}} className='classificaoces'>
                                            <div>
                                                <span>Nome</span>
                                            </div>
                                            <div>{item.name}</div>
                                        </div>

                                        <div style={{width: "12.5%"}} className='classificaoces'>
                                            <div>
                                                <span>Cpf</span>
                                            </div>
                                            <div>{item.cpf}</div>
                                        </div>

                                        <div style={{width: "12.5%"}} className='classificaoces'>
                                            <div>
                                                <span>Email</span>
                                            </div>
                                            <div>{item.email}</div>
                                        </div>

                                        <div style={{width: "12.5%"}} className='classificaoces'>
                                            <div>
                                                <span>Data de Nascimento</span>
                                            </div>
                                            <div>{item.dataDeNascimento}</div>

                                        </div>

                                        <div style={{width: "12.5%"}} className='classificaoces'>
                                            <div>
                                                <span>Telefone</span>
                                            </div>
                                            <div>{item.phone}</div>
                                        </div>

                                        <div style={{width: "12.5%"}} className='classificaoces'>
                                            <div>
                                                <span>Cargo</span>
                                            </div>
                                            <div>{item.cargo}</div>
                                        </div>
                                        <div style={{width: "12.5%"}} className='classificaoces'>
                                            <div>
                                                <span>Salário</span>
                                            </div>
                                            <div>{item.salario}</div>
                                        </div>

                                        <div style={{width: "5%"}} className="imagem">
                                            <div>
                                                <img className='imagens' src={image1} alt={"imagem"}
                                                onClick={() => alterarDados(item)}/>
                                            </div>
                                            <div>
                                                <img className='imagens' src={image2} alt={"imagem"}
                                                     onClick={() => removeItem(index)}/>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
