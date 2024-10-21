'use client';
import React, { useState } from "react";
import styles from "@/app/page.module.css";
import review1 from "@/app/assets/IMG_1465.jpg";
import review2 from "@/app/assets/IMG_1460.jpg";
import review3 from "@/app/assets/IMG_1468.jpg";
import review4 from "@/app/assets/IMG_1470.jpg";
import review5 from "@/app/assets/IMG_1473.jpg";
import review6 from "@/app/assets/IMG_1471.jpg";
import Image from "next/image";

const reviews = [
    review1, review2, review3, review4, review5, review6
];

const Reviews = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h2>Отзывы</h2>
                <p>Моя система основана на успешной работе с более чем 100 клиентами в состоянии выгорания и прокрастинации. Самые рабочие методы собраны в этот курс. Я более 7 лет веду тренинги, была лектором в университете и углубленно изучала педагогику для взрослых. Я даю ключевую информацию простым языком и через юмор, поэтому она попадает прямо в цель и изменения неизбежны.</p>
                <p>Отзывы о моих курсах:</p>
                <div className={styles.grid}>
                    {reviews.map((review, index) => (
                        <div key={index} className={styles.photoWrapper} onClick={() => openModal(review)}>
                            <Image
                                src={review}
                                alt={`Review ${index + 1}`}
                                width={300}
                                objectFit="cover"
                                quality={100}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Модальное окно для увеличенных изображений */}
            {selectedImage && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Enlarged image"
                            width={300}
                            objectFit="contain"
                        />
                        <button className={styles.closeButton} onClick={closeModal}>Закрыть</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Reviews;
