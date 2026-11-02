import BotaoEntrar from '../componets/BotaoEntrar';
import ImagemPrincipal from '../componets/ImagemPrincipal';
import '/src/style/paleta-produtos-eletrocicos.css';

export function Home() {


    return (
        <div className="home-container">
            <ImagemPrincipal />
            <BotaoEntrar />

        </div>
    );
}