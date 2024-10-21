import React from "react";
import styles from "@/app/page.module.css";

const reviews = [
    {
        name: "Анна Петрова",
        review:
            "Этот курс изменил мою жизнь! Благодаря поддержке и обратной связи Ирины я научилась лучше управлять своими эмоциями и справляться с выгоранием.",
        imageUrl: "/path-to-image-1.jpg", // Замените на фактический путь к изображению
        link: "#review1", // Ссылка или модальное окно с более подробной информацией
    },
    {
        name: "Екатерина Иванова",
        review:
            "Программа оказалась очень полезной. Ирина - профессионал своего дела. Все объясняется четко, с примерами, и это помогло мне не только в работе, но и в личной жизни.",
        imageUrl: "/path-to-image-2.jpg",
        link: "#review2",
    },
    {
        name: "Марина Кузнецова",
        review:
            "Курс был насыщенным и полезным, много практических заданий, которые помогли мне выйти из состояния постоянного стресса. Очень рекомендую!",
        imageUrl: "/path-to-image-3.jpg",
        link: "#review3",
    },
];

const Reviews = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h2>Отзывы</h2>
                    <div className={styles.grid}>
                        {reviews.map((review, index) => (
                            <a href={review.link} key={index} className={styles.card}>
                                <img
                                    src={review.imageUrl}
                                    alt={review.name}
                                    className={styles.image}
                                />
                                <div className={styles.textContainer}>
                                    <h3>{review.name}</h3>
                                    <p>{review.review}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
        </section>
    );
};
export default Reviews;
