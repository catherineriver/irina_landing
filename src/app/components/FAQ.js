'use client';
import React, { useState } from "react";
import styles from "@/app/page.module.css";

const faqs = [
    {
        question: "Сколько времени требуется на курс?",
        answer:
            "Уроки курса около 30 минут. Выполнение домашнего задания занимает 10-20 минут в зависимости от глубины погружения. Уроки выходят раз в 3 дня, смотреть можно в удобное вам время.",
    },
    {
        question: "Удаляют ли с курса за невыполнение заданий?",
        answer:
            "Нет. Домашние задания - ваша ответственность. От выполнения заданий зависит результат.",
    },
    {
        question: "Как долго доступ к курсу?",
        answer:
            "Курс идёт 1 месяц. Доступ к урокам после окончания курса сохраняется еще на 2 месяца. Презентации доступны для скачивания и остаются в вечное пользование.",
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
            <h2>Частые вопросы</h2>
            {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                    <div className={styles.question} onClick={() => toggleFAQ(index)}>
                        <p>{faq.question}</p>
                        <span>{activeIndex === index ? "-" : "+"}</span>
                    </div>
                    {activeIndex === index && <p className={styles.answer}>{faq.answer}</p>}
                </div>
            ))}
        </div>
        </section>
    );
};

export default FAQ;
