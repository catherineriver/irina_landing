import styles from "@/app/page.module.css";

const tariffs = {
    "tariffs": [
        {
            "name": "ТОЛЬКО ПОСМОТРЕТЬ",
            "price": 110,
            "description": [
                "9 видео-уроков в записи для просмотра в удобное время",
                "Презентации и рабочая тетрадь (в постоянное пользование)",
                "Разбор-сериал про Пабло Пикассо и его женщин. Почему вы НЕ станете эгоисткой, если начнете ценить себя\n",
            ],
            "closed": [
                "Чат поддержки с ответами на вопросы и анализом домашних заданий",
                "Бонусный урок: Как взрослым учиться и проходить курсы для лучшего результата?",
                "Финальный эфир “Как сохранить и преумножить результат” с анонимным разбором ситуаций",
                "Работа в личном чате с коучем",
                "Персональный разбор домашних заданий и рекомендации от Ирины"
            ],
            "link": "https://buy.stripe.com/5kAcPo83Gfhw9wY9AK"
        },
        {
            "name": "ХОЧУ ИЗМЕНЕНИЙ",
            "price": 140,
            "description": [
                "9 видео-уроков в записи для просмотра в удобное время",
                "Презентации и рабочая тетрадь (в постоянное пользование)",
                "Разбор-сериал про Пабло Пикассо и его женщин. Почему вы НЕ станете эгоисткой, если начнете ценить себя\n",
                "Чат поддержки с ответами на вопросы и анализом домашних заданий",
                "Бонусный урок: Как взрослым учиться и проходить курсы для лучшего результата?",
                "Финальный эфир “Как сохранить и преумножить результат” с анонимным разбором ситуаций",
            ],
            "closed": [
                "Работа в личном чате с коучем",
                "Персональный разбор домашних заданий и рекомендации от Ирины"
            ],
            "link": "https://buy.stripe.com/7sIg1AgAc7P410s9AL"
        },
        {
            "name": "ВЫБИРАЮ ЛУЧШЕЕ",
            "price": 240,
            "description": [
                "9 видео-уроков в записи для просмотра в удобное время",
                "Презентации и рабочая тетрадь (в постоянное пользование)",
                "Разбор-сериал про Пабло Пикассо и его женщин. Почему вы НЕ станете эгоисткой, если начнете ценить себя\n",
                "Чат поддержки с ответами на вопросы и анализом домашних заданий",
                "Бонусный урок: Как взрослым учиться и проходить курсы для лучшего результата?",
                "Финальный эфир “Как сохранить и преумножить результат” с анонимным разбором ситуаций",
                "Работа в личном чате с коучем",
                "Персональный разбор домашних заданий и рекомендации от Ирины"
            ],
            "note": "Обратная связь дается подробно в аудио формате или в сообщениях, предполагает дополнительные вопросы для более глубокого узнавания себя. Доходимость до финала на этом тарифе 95%",
            "link": "https://buy.stripe.com/5kA3eO5Vyd9o6kMaEQ"
        }
    ]
}

const PlansList = () => {
    // Получаем текущую дату
    const today = new Date();

// Устанавливаем дату первого повышения цен
    const priceIncreaseDate = new Date(today.getFullYear(), 10, 3); // 10 - это ноябрь (месяцы начинаются с 0)

// Функция для обновления цены
    function updatePrice() {
        const currentPriceElement = document.getElementById("current-price");
        const originalPriceElement = document.getElementById("original-price");

        if (today >= priceIncreaseDate) {
            // Заменяем текущую цену
            currentPriceElement.textContent = "80 €";
            // Оставляем старую цену зачеркнутой
            originalPriceElement.textContent = "110 €";
        }
    }
    return (
        <>
            <section className={styles.container} id="join">
                <h2 className={styles.centered}>Тарифы</h2>
                <div className={styles.plans}>
                    {tariffs.tariffs.map((tariff, index) => (
                        <div key={index} className={styles.plan}>
                            <h2>{tariff.name}</h2>
                            <p style={{fontWeight: "bold", fontSize: "26px", color: "green", textAlign: "center"}}>
                                {tariff.price} € <span
                                style={{textDecoration: "line-through", color: "gray"}}>{tariff.original_price} €</span>
                            </p>
                            <ul style={{ flexGrow: 0 }}>
                                {tariff.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                                {tariff.closed && tariff.closed.map((item, idx) => (
                                    <li className={styles.closed} style={{ color: "gray", textDecorationLine: "line-through"}} key={idx}>{item}</li>
                                ))}
                            </ul>
                            {tariff.recommended_for && (
                                <>

                                    <ul style={{flexGrow: 1}}>
                                        <h3>Рекомендуется:</h3>
                                        {tariff.recommended_for.map((recItem, idx) => (
                                            <li className={styles.recommendation} key={idx}>{recItem}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {tariff.note && <p><strong>Примечание: </strong>{tariff.note}</p>}
                            {tariff.link &&
                                        <div className={styles.buttonWrapper}>
                                            <a href={tariff.link} className={styles.button}>Выбираю </a>
                                        </div>}
                        </div>
                    ))}

                </div>
                <h2 style={{textAlign: "center", margin: "48px auto", maxWidth: "60%"}}>Повышение цены 10 февраля! Успей забрать курс по самой выгодной стоимости!</h2>

            </section>

        </>
    );
};

export default PlansList;
