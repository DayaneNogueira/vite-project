import viteLogo from '../../../public/vite.svg'
import reactLogo from '../../assets/react.svg'
import './styles.css'

export default function Header(){
    return (
        <header>
            <h1>Minha Página React</h1>
            <nav>
                <link>
                    <li>Home</li>
                </link>
                <link>
                    <li>Sobre</li>
                </link>
            </nav>
            <img src={reactLogo} alt='Logo do React' />
            <img src={viteLogo} alt='Logo do Vite' />
        </header>
    )
}