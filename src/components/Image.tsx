import style from './Image.module.css';

interface ImageProps {
    width?: number | string;
    height?: number | string;
    scale?: `${string}%` | `${string}% ${string}%`;
    src: string;
}

export const Image = ({ width, height, scale, src } : ImageProps) => {
    return <div
        className={style.image}
        style={{
            width: width,
            height: height,
            backgroundImage: `url('${src}')`,
            backgroundSize: scale != null ? scale : undefined
        }}
    ></div>;
}