import React from 'react';
import Image from 'next/image'; // Для оптимизации изображений
import image from '@/app/assets/main.jpg'
import styles from "@/app/page.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
                <Image
                    src={image} // Путь к вашему изображению
                    alt="Онлайн-курс по управлению уровнем энергии"
                    layout="responsive" // Используем responsive вместо fill
                    width={1920} // Ширина изображения
                    height={1080} // Высота изображения (16:9)
                    objectFit="cover" // Масштабируем изображение без искажений
                    quality={100} // Высокое качество изображения
                    sizes="(min-width: 768px) 100vw, 33vw"
                />
            <div className={styles.content}>
                <h1>Онлайн-курс по управлению уровнем энергии</h1>
                <p>18.11.-18.12. в Telegram-канале с чатом</p>
                <a href="#join" className={styles.button}>Присоединиться</a>
            </div>
        </section>

    );
};

export default Hero;
