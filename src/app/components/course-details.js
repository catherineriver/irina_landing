import styles from "@/app/page.module.css";

const courseData = {
    "description": [
        "<h3>Почему кто-то энергичный и много успевает, а кто-то застревает в прокрастинации и хронической усталости? Почему одни зажигаются и выгорают, а другие умеют работать вдолгую и в конце рабочего дня у них есть силы на семью, друзей и спорт?</h3>",
        "В результате курса у вас будет <b>полноценная инструкция к себе и своим внутренним батарейкам.</b>"
    ],
    "benefits": [
        "Как себя замедлять и разгонять, в зависимости от целей.",
        "Что вас зажигает и как поддерживать мотивацию, чтобы заканчивать начатое?",
        "Как вовремя замечать признаки выгорания и выходить из него, в зависимости от стадии серьёзности ситуации.",
        "Какие способы релаксации и восстановления подходят именно вам и как часто надо отдыхать?",
        "Чем женский цикл активности отличается от мужского, и как строить жизнь в соответствии со своей природой, сведя конфликты с партнёром к минимуму.",
        "Определите скрытых жрунов энергии, из-за которых постоянно утекают жизненные силы и вы не можете реализовать свой потенциал."
    ],
    "forWhom": [
        "Чувствуете постоянную усталость и утром просыпаетесь без сил.",
        "Привычные способы отдыха и восстановления не дают нужный эффект.",
        "Прокрастинируете и для выполнения рабочих задач надо себя «заставлять».",
        "Вы когда-либо выгорали или сейчас находитесь в выгорании.",
        "Руководителям команды и собственникам бизнеса.",
        "Вы - помогающий практик или работаете с людьми.",
        "Многие ваши мечты так и остаются мечтами долгие годы.",
        "Постоянно чувствуете раздражение и срываетесь на близких и на детей.",
        "Часто начинаете дела/проекты, а потом бросаете и не заканчиваете.",
        "Тяжело начать заниматься спортом и часто тянет на сладкое.",
        "Замечаете ухудшение концентрации и памяти.",
        "Хочется изолироваться от людей и чтобы вас оставили в покое.",
        "Бесят коллеги, клиенты и начальство.",
        "Стали чаще, тяжелее и дольше болеть."
    ]
}

const courseData2 = {
    "description": [
        "В результате курса:\n",
    ],
    "benefits": [
        "Наладите режим активности и отдыха в соответствии со своими целями",
        "Уменьшится раздражение и станет проще регулировать эмоции и выдерживать капризы детей",
        "Исключите скрытые сливы энергии, которые сейчас не дают восстановиться даже в отпуске",
        "Будете знать, через какие смыслы и действия мотивировать себя (и своих коллег/сотрудников) на достижение целей",
        "Уменьшится самокритика за прокрастинацию и будет проще из нее выйти",
        "Станете замечать признаки выгорания у себя и коллег, и будете знать, что с этим делать",
        "Почувствуете прилив энергии и ощущение “гора с плеч”"

    ]
}

const courseData3 = {
    "description": [
        "Что входит в курс?",
    ],
    "benefits": [
        "8 уроков в записи (в видео и аудио формате), доступ до 31.01.25.",
        "Презентации по всем урокам (остаются вам в постоянное пользование)\n",
        "Практическое задание по каждому уроку",
        "Чат для поддержки, общения, сдачи домашних заданий и ответов на вопросы (участие по желанию)",
        "Лотерея шикарных подарков для восстановления ресурса \n",
        "Финальный живой прямой эфир с разбором ситуаций участников, рекомендациями на будущее и розыгрышем призов\n"
    ]
}

const courseData4 = {
    "description": [
        "Программа курса:",
    ],
    "benefits": [
        "Урок 1. Главные правила управления энергией и почему вы не там, где хотите быть. Будет больно, и возможно станет поворотным моментом.",
        "Урок 2. Скрытые жруны энергии. Дырявое ведро водой не наполнить.\n",
        "Урок 3. Мужской и женский цикл активности. Как распределять энергию в течение дня и месяца",
        "Урок 4. Большая лекция по выгоранию. То, что должен знать каждый + первая помощь.\n",
        "Урок 5. Прокрастинация и самосаботаж - взгляд с новой стороны.\n",
        "Урок 6. Управление стрессом в повседневной жизни. Из напряжения в расслабление.",
        "Урок 7. Твоё топливо и мотивация. Как себя зажигать и заканчивать начатое.\n ",
        "Урок 8. Нейробиология счастья, смыслы и твое большое ЗАЧЕМ?\n",
        "Финальный эфир с анонимным разбором ситуаций и розыгрышем призов"
    ]
}

const CourseDetails = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.wrapper}>
                    {courseData.description.map((paragraph, index) => (
                        <p key={index} dangerouslySetInnerHTML={{__html: paragraph}}></p>
                    ))}

                    <ul className={styles.benefits}>
                        {courseData.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>

                    <ul className={styles.benefits}>
                        <h2>Кому нужно участвовать:</h2>
                        {courseData.forWhom.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <div className={styles.buttonWrapper}>
                        <a href="#join" className={styles.button}>Присоединиться</a>
                    </div>
                </div>
            </section>
            <section className={styles.container}>
                <div className={styles.wrapper}>
                    <ul className={styles.benefits}>
                        <h2>В результате курса:</h2>
                        {courseData2.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className={styles.container}>
                <div className={styles.highlight}>
                    <ul className={styles.benefits}>
                        <h2>Что входит в курс?</h2>
                        {courseData3.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className={styles.container}>
                <div className={styles.wrapper}>
                    <ul className={styles.benefits}>
                        <h2>Программа курса:</h2>
                        {courseData4.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>

                </div>
            </section>
        </>
    );
};

export default CourseDetails;
