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
                <a href="https://www.instagram.com/irinamazurika/" target="_blank" rel="noopener noreferrer"
                   className={styles.icon}>
                    <Image src={ig} alt="Instagram" width={20} height={20}/>
                </a>
                <a href="https://www.linkedin.com/in/irina-mazurika-288a15239" target="_blank" rel="noopener noreferrer"
                   className={styles.icon}>
                    <Image src={linkedIn} alt="LinkedIn" width={20} height={20}/>
                </a>
                <a href="https://www.facebook.com/i.mazurika" target="_blank" rel="noopener noreferrer"
                   className={styles.icon}>
                    <Image src={fb} alt="Facebook" width={20} height={20}/>
                </a>
            </div>

            <div className={styles.legalLinks}>
                <a target="_blank" href="https://drive.google.com/file/d/1FMFoMHj8nqT6rP8Lb37PwFkhcf_xYJoU/view?usp=sharing" className={styles.link}>Политика конфиденциальности</a>
                <a target="_blank" href="https://drive.google.com/file/d/1sSOYOrAxk65y1X1CybtA1Bbb5WvQz2lb/view?usp=sharing" className={styles.link}>Договор оферты</a>
            </div>

            <div className={styles.contactInfo}>
                <p>Что-то пошло не так? Напишите нам:</p>
                <a href="mailto:irinamazurika@gmail.com" className={styles.link}>irinamazurika@gmail.com</a>
            </div>
        </footer>
    );
};

export default Footer;
