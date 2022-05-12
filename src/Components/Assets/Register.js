import {cpfMask, dateMask, maskBRL, phoneMask} from "../Functions/Masks";
import {useState, useEffect} from "react";
import {ToastContainer, toast} from 'react-toastify';
import image1 from "../../Images/troca.png"
import image2 from "../../Images/deletar.png"
import 'react-toastify/dist/ReactToastify.css';
import _ from 'lodash'

function App() {

    const notify = () => toast("Cadastro concluído com sucesso!");
    const errorNotify = () => toast("Preencha todos os campos!");
    const correctCamp = () => toast('Preencha todos os campos corretamente!')
    const dadosApagadosNotify = () => toast("Os dados foram apagados!");
    const [pessoas, setPessoas] = useState([])
    const [funcionario, setFuncionario] = useState({})
    const [botaoClicado, setBotaoClicado] = useState(false)

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

            if (funcionario.cpf.length < 14 ||
                funcionario.phone.length < 15 ||
                funcionario.dataDeNascimento.length < 10) {
                correctCamp()
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
                <div className={botaoClicado ? 'recordWhenPressed' : 'recordWhenNotpressed'}>

                    <div className="tituloRgstr">
                        <span className="tituloDivRgstr">Registro</span>
                    </div>
                    <div className='paiRegistro'>
                        <div className={botaoClicado ? 'inputsRecordWhenNotpressed' : 'inputsRecordWhenPressed'}>
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
                                       className="inputText" placeholder="Data de nascimento" type="text"/>
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
                                <input className="inputText" type="text" placeholder="Salário"
                                       value={funcionario?.salario}
                                       onChange={(e) => {setFuncionario({...funcionario, salario:`R$ ${maskBRL(e.target.value)}` })}}
                                />
                            </div>

                            <div>
                                <select className="inputText"
                                        value={funcionario?.cargo}
                                        onChange={(e) => setFuncionario({...funcionario, cargo: e.target.value})}>
                                    <option value="Cargos">Cargos</option>
                                    <option value="Desenvolvedor">Desenvolvedor</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Gerente">Gerente</option>
                                    <option value="Secretário">Secretário</option>
                                </select>
                            </div>

                            <div className="fButtons">
                                <div>
                                    <input type="button" className="send" value="Salvar"
                                           onClick={salvarLocalStorage}/>
                                </div>

                                <div>
                                    <input id='botaoApagar' type="button" className="delete" value="Limpar"
                                           onClick={limpaLocalStorage}/>

                                </div>
                            </div>
                        </div>
                        {botaoClicado ?
                            <div className='tabela'>
                                <div>
                                    <div className="rowList">
                                        <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                            <div>
                                                <span>Nome</span>
                                            </div>
                                        </div>
                                        <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                            <div>
                                                <span>Cpf</span>
                                            </div>
                                        </div>
                                        <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                            <div>
                                                <span>Email</span>
                                            </div>
                                        </div>
                                        <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                            <div>
                                                <span>Data</span>
                                            </div>
                                        </div>
                                        <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                            <div>
                                                <span>Telefone</span>
                                            </div>
                                        </div>
                                        <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                            <div>
                                                <span>Cargo</span>
                                            </div>
                                        </div>
                                        <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                            <div>
                                                <span>Salário</span>
                                            </div>
                                        </div>
                                        <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                            <div>
                                                <span>Ações</span>
                                            </div>
                                        </div>
                                    </div>


                                    {pessoas?.map((item, index) =>
                                        <div key={index} className="rowList">


                                            <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                                <div>{item.name}</div>
                                            </div>

                                            <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                                <div>{item.cpf}</div>
                                            </div>

                                            <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                                <div>{item.email}</div>
                                            </div>

                                            <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                                <div>{item.dataDeNascimento}</div>

                                            </div>

                                            <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                                <div>{item.phone}</div>
                                            </div>

                                            <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                                <div>{item.cargo}</div>
                                            </div>
                                            <div style={{width: "12.5%", flex: 1}} className='classificaoces'>
                                                <div>{item.salario}</div>
                                            </div>

                                            <div style={{width: "5%", flex: 1}} className="imagem">
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
                            :
                            <>
                            </>
                        }
                    </div>
                    <div className='botaoMostraTabela'>
                        <input className="mostraTabela" type="button" onClick={() => setBotaoClicado(!botaoClicado)}
                               value={botaoClicado ? 'Cadastrar funcionários' : 'Tabela de funcionários'}/>
                    </div>
                    <div className='pessoasCadastradas'>
                        <div className='funcionariosCadastrados'>
                            {pessoas.length === 0 ? 'Não existem pessoas cadastradas'
                                :
                                pessoas.length === 1 ? 'Existe uma pessoa cadastrada'
                                    :
                                    pessoas.length > 1 ? `Existem ${pessoas.length} pessoas cadastradas`
                                        :
                                        <>
                                        </>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
