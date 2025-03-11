import './styles.css';

type Props = {
    children: string;
}

export function Glitch({ children }: Props){
    return  <div className="fullName">
            {children}
            <div className="container">
            <div className="glitch" data-text={children}>
            {children}
            </div>
        </div>
    </div>
}