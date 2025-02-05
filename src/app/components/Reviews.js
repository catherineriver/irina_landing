'use client';
import React, {useRef, useState} from "react";
import styles from "@/app/page.module.css";
import review1 from "@/app/assets/review-1.jpg";
import review2 from "@/app/assets/review-2.jpg";
import review3 from "@/app/assets/review-31.jpg";
import review4 from "@/app/assets/review-4.jpg";
import review5 from "@/app/assets/review-5.jpg";
import review6 from "@/app/assets/review-6.jpg";
import review7 from "@/app/assets/review-3.jpg";
import review8 from "@/app/assets/review-7.jpg";
import review9 from "@/app/assets/review-9.jpg";
import review10 from "@/app/assets/review-10.jpg";
import Image from "next/image";

const reviews = [
    review1, review2, review3, review4, review5, review6, review7, review8, review9, review10
];

const Reviews = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const carouselRef = useRef(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -260, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 260, behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h2>Отзывы</h2>
                <p>Я более 7 лет веду тренинги, была лектором
                    в университете и углубленно изучала педагогику для взрослых. Я даю ключевую информацию простым
                    языком и через юмор, поэтому она попадает прямо в цель и изменения неизбежны.</p>
                <div className={styles.carouselContainer}>
                <button className={styles.scrollButton} onClick={scrollLeft}>←</button>
                <div className={styles.carouselWrapper} ref={carouselRef}>
                    <div className={styles.carousel}>
                        {reviews.map((review, index) => (
                            <div key={index} className={styles.photoWrapper} onClick={() => openModal(review)}>
                                <Image
                                    src={review}
                                    alt={`Review ${index + 1}`}
                                    fill
                                    style={{
                                        objectFit: 'contain',
                                    }}
                                    quality={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button className={styles.scrollButton} onClick={scrollRight}>→</button>
            </div>
            </div>

            {selectedImage && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Enlarged image"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill
                            style={{
                                objectFit: 'contain',
                            }}
                        />
                        <button className={styles.closeButton} onClick={closeModal}>x</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Reviews;
