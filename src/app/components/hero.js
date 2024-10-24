'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import image from '@/app/assets/main.jpg'
import imageMobile from '@/app/assets/main-mobile.jpg'
import styles from "@/app/page.module.css";

const Hero = () => {
    const [daysRemaining, setDaysRemaining] = useState(0);

    useEffect(() => {
        const calculateDaysRemaining = () => {
            const today = new Date();
            const targetDate = new Date(today.getFullYear(), 10, 18); // 18 ноября (месяцы начинаются с 0)
            if (today > targetDate) {
                targetDate.setFullYear(today.getFullYear() + 1);
            }
            const difference = targetDate - today;
            const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
            setDaysRemaining(days);
        };

        calculateDaysRemaining();
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.heroDesktop}>
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
            </div>
            <div className={styles.heroMobile}>
                <Image
                    src={imageMobile} // Путь к вашему изображению
                    alt="Онлайн-курс по управлению уровнем энергии"
                    fill
                    style={{
                        objectFit: 'contain',
                    }}
                    quality={100}
                />
            </div>
            <div className={styles.content}>
                <h1>Онлайн-курс по управлению уровнем энергии</h1>
                {daysRemaining !== 0 && <span>Старт через {daysRemaining} дней</span>}
                <span>Telegram-канал с чатом</span>
                <a href="#join" style={{marginTop: "32px"}} className={styles.button}>Присоединиться</a>
            </div>
        </section>

    );
};

export default Hero;
