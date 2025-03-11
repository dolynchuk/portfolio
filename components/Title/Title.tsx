import './styles.css';

type Props = {
    children: React.ReactNode;
}

export function Title({ children }: Props){
    return <h1 className="title-h1">{children}</h1>
}
