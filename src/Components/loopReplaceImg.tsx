import style from './loopReplaceImg.module.scss';
import { useEffect, useState } from 'react';

export function LoopReplaceImg (props: any) {
    const imgs = props.imgs;
    const [ index, setIndex ] = useState(0);
    let timer: any = null;
    const loopTime = props.loopTime || 3000;  // 切换时间
    useEffect(() => {
        timer = setInterval(() => {
            changeImg(1);
        }, loopTime);
        return () => {
            clearInterval(timer);
            timer = null;
        }
    }, [index])

    // 渲染图片
    function renderImgs () {
        const arr: JSX.Element[] = [];
        imgs.forEach((val: any, i: number) => {
            arr.push(<li key={i} style={{width: 100 / imgs.length + '%'}}>
                <img src={val} alt={val} />
            </li>)
        });
        return arr;
    }

    // 渲染小圆点
    function renderSpots () {
        const arr:  JSX.Element[] = [];
        imgs.forEach((val: any, i: number) => {
            arr.push(<li key={i} className={index === i ? style.active : ''} onClick={() => {
                setIndex(i);
            }}></li>);
        });
        return arr;
        
    }

    // 切换下（上）一张图
    function changeImg (num = 1) {
        if (num === 1) {
            setIndex(index + 1);
            if (index >= imgs.length - 1) setIndex(0);
            if (index < 0) setIndex(imgs.length);
        } else {
            setIndex(index - 1);
            if (index > imgs.length - 1) setIndex(0);
            if (index <= 0) setIndex(imgs.length - 1);
        }
    }
    

    return (<div className={style.loop_replace_img} onMouseMove={() => {
        clearInterval(timer);
        timer = null;
    }} onMouseOut={() => {
        timer = setInterval(() => {
            changeImg(1);
        }, loopTime);
    }}>
        <ul className={style.imgs} 
            style={{
                width: imgs.length * 100 + '%', 
                transform: `translate(${-100 / imgs.length * index}%)`
            }}>
            {renderImgs()}
        </ul>
        <ul className={style.spots}>
            {renderSpots()}
        </ul>
        <div className={style.btn}>
            <div className={[style.btn_l, 'fl'].join(' ')} onClick={() => changeImg(-1)}>&lt;</div>
            <div className={[style.btn_r, 'fr'].join(' ')} onClick={() => changeImg(1)}>&gt;</div>
        </div>
    </div>)
}