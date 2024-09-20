import { useMediaQuery } from 'react-responsive';
import { Column } from './Column';
import style from './ProjectDescription.module.css';

interface ProjectDescriptionProps {
    title: string;
    description: string;
    url: string;
    isEnglish: boolean;
}

export const ProjectDescription = ({ title, description, url, isEnglish }: ProjectDescriptionProps) => {
    const isMobile = useMediaQuery({ query: '(max-aspect-ratio: 3/2.7)' });

    return <Column style={{ gap: isMobile ? '4vw' : '2vw' }}>
        <div className={style.projectDescription}>
            <p><strong>{title}</strong></p>
            <span>{description}</span>
        </div>
        <a href={url} target='_blank'><button>{isEnglish ? 'see more' : 'se mere'}</button></a>
    </Column>;
}