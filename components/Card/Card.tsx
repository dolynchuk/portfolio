import { ReactNode } from 'react';
import './styles.css';

type Props = {
    children: ReactNode;
    title: string;
    subtitle?: string;
}

export function Card({ children, title, subtitle }: Props) {
    return <article className="card">
        {title && <h4 className="cardTitle">{title}</h4>}
        {
            subtitle && <p className="cardSubtitle">{subtitle}</p>
        }
        {children}
    </article>
}