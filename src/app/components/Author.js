import React from "react";
import styles from "@/app/page.module.css";
import image from "@/app/assets/irina.jpg";
import fb from "@/app/assets/fb.PNG";
import ig from "@/app/assets/ig.PNG";
import linkedIn from "@/app/assets/in.PNG";
import Image from "next/image";

const author = {
    name: "Ирина Мазурика",
    title: "Коуч, супервизор, лектор, ведущая трансформационных игр",
    affiliations: ["Член Ассоциации супервизоров Латвии"],
    experience:
        "Более 10 лет опыта в консультировании по темам мотивации, выхода из кризисных ситуаций и восстановления ментального здоровья.",
    activities: [
        "Ведет тренинги по профилактике выгорания для экспертов Латвии, Европы и Средней Азии.",
    ],
    moreInfo: "Подробнее об авторе курса читайте здесь",
    photoUrl: "", // замените на фактический путь к фото,

};

const Author = () => {
    return (
        <div className={styles.author}>
            <div className={styles.highlight}>
                <div className={styles.desc}>
                    <h2>{author.name}</h2>
                    <h3>{author.title}</h3>
                    <p>Член Ассоциации супервизоров Латвии. Более 10 лет опыта в консультировании по темам мотивации,
                        выхода из кризисных ситуаций и восстановления ментального здоровья. Ведет тренинги по
                        профилактике выгорания для экспертов Латвии, Европы и Средней Азии.</p>
                    <div className={styles.socialLinks}>
                        <a href="https://www.instagram.com/irinamazurika/" target="_blank" rel="noopener noreferrer"
                           className={styles.icon}>
                            <Image src={ig} alt="Instagram" width={25} height={25}/>
                        </a>
                        <a href="https://www.linkedin.com/in/irina-mazurika-288a15239" target="_blank"
                           rel="noopener noreferrer"
                           className={styles.icon}>
                            <Image src={linkedIn} alt="LinkedIn" width={25} height={25}/>
                        </a>
                        <a href="https://www.facebook.com/i.mazurika" target="_blank" rel="noopener noreferrer"
                           className={styles.icon}>
                            <Image src={fb} alt="Facebook" width={25} height={25}/>
                        </a>
                    </div>
                    <h3>Подробнее об авторе курса читайте <a
                        href="https://www.instagram.com/p/Cqm6xx7s9Gm/?igsh=MWNpY21pY3ZoNW84YQ=="
                        target="_blank">здесь</a></h3>


                </div>


                <div className={styles.photoContainer}>
                    <Image
                        src={image} // Путь к вашему изображению
                        alt="Онлайн-курс по управлению уровнем энергии"
                        width={320} // Ширина изображения
                        objectFit="cover" // Масштабируем изображение без искажений
                        quality={100} // Высокое качество изображения
                    />
                </div>
            </div>

        </div>


    );
};

export default Author;
