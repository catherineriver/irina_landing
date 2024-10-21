import React from "react";
import Image from 'next/image';
import styles from "@/app/page.module.css";
import ig from "@/app/assets/ig.PNG";
import linkedIn from "@/app/assets/in.PNG";
import fb from "@/app/assets/fb.PNG";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialLinks}>
                <div className={styles.socialLinks}>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                       className={styles.icon}>
                        <Image src={ig} alt="Instagram" width={20} height={20}/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                       className={styles.icon}>
                        <Image src={linkedIn} alt="LinkedIn" width={20} height={20}/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                       className={styles.icon}>
                        <Image src={fb} alt="Facebook" width={20} height={20}/>
                    </a>
                </div>
            </div>

            <div className={styles.legalLinks}>
                <a href="/privacy-policy" className={styles.link}>Политика конфиденциальности</a>
                <a href="/offer-agreement" className={styles.link}>Договор оферты</a>
            </div>

            <div className={styles.contactInfo}>
                <p>Что-то пошло не так? Напишите нам:</p>
                <a href="mailto:info@slimbyfromane.com" className={styles.link}>info@slimbyfromane.com</a>
            </div>
        </footer>
    );
};

export default Footer;
