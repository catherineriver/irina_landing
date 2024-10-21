'use client';
import React, { useState } from "react";
import styles from "@/app/page.module.css";

const faqs = [
    {
        question: "Сколько времени требуется на курс?",
        answer:
            "Уроки курса по 20-30 минут. Один урок (про выгорание) будет на 1 час. Выполнение домашнего задания занимает 10-20 минут в зависимости от вашей степени погружения. Уроки выходят раз в 3-4 дня.",
    },
    {
        question: "Удаляют ли с курса за невыполнение заданий?",
        answer:
            "Нет. Домашние задания - ваша ответственность. В лотерее участвуют только те, кто сдаст задания до финального эфира.",
    },
    {
        question: "Как долго доступ к курсу?",
        answer:
            "Курс идёт 1 месяц. Доступ к урокам сохраняется до 31 января. Презентации доступны для скачивания и остаются в вечное пользование.",
    },
    {
        question: "Все ли участвуют в лотерее?",
        answer:
            "В лотерее участвуют только те, кто до финального эфира сдаст в чат все домашние задания.",
    },
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
                        <h3>{faq.question}</h3>
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
