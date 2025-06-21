/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
// import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import styles from "./Home.module.css";
import "@mantine/carousel/styles.css";
import { motion, useInView } from "framer-motion";

import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group } from "@mantine/core";

function HomeCarousel() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = [
    {
      imageUrl: {
        desktop: "/home/carousel/desktop/1.jpg",
        mobile: "/home/carousel/mobile/1.jpg",
      },
    },
    {
      imageUrl: {
        desktop: "/home/carousel/desktop/2.jpg",
        mobile: "/home/carousel/mobile/2.jpg",
      },
    },
    {
      imageUrl: {
        desktop: "/home/carousel/desktop/3.jpg",
        mobile: "/home/carousel/mobile/3.jpg",
      },
    },
    {
      imageUrl: {
        desktop: "/home/carousel/desktop/4.jpg",
        mobile: "/home/carousel/mobile/4.jpg",
      },
    },
    {
      imageUrl: {
        desktop: "/home/carousel/desktop/5.jpg",
        mobile: "/home/carousel/mobile/5.jpg",
      },
    },
  ];

  return (
    <div style={{ backgroundColor: "white" }}>
      <Carousel autoplay arrows>
        {slides.map((e, i) => (
          // <Carousel.Slide key={i}>
          <img
            key={i}
            src={isMobile ? e.imageUrl.mobile : e.imageUrl.desktop}
            alt={`Slide ${i + 1}`}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ))}
      </Carousel>
    </div>
  );
}

function BestProducts() {
  const bestProducts = [
    {
      name: "Vivid Green Calming Ampoule",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, fuga nostrum! Ipsum reiciendis saepe accusantium?",
      imageUrl: "/home/products/desktop/vivid_green_calming_ampoule.jpg",
      priceBefore: "Rp 89.500",
      price: "Rp 49.900",
      discount: "45%",
    },
    {
      name: "Vivid Purple Aqua Ampoule",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, fuga nostrum! Ipsum reiciendis saepe accusantium?",
      imageUrl: "/home/products/desktop/vivid_purple_aqua_ampoule.jpg",
      priceBefore: "Rp 53.700",
      price: "Rp 43.900",
      discount: "18%",
    },
    {
      name: "Vivid Purple Aqua Cream",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, fuga nostrum! Ipsum reiciendis saepe accusantium?",
      imageUrl: "/home/products/desktop/vivid_purple_aqua_cream.jpg",
      priceBefore: "Rp 53.700",
      price: "Rp 43.900",
      discount: "18%",
    },
    {
      name: "Vivid Purple Aqua Toner",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, fuga nostrum! Ipsum reiciendis saepe accusantium?",
      imageUrl: "/home/products/desktop/vivid_purple_aqua_toner.jpg",
      priceBefore: "Rp 35.800",
      price: "Rp 31.900",
      discount: "11%",
    },
    {
      name: "Vivid Red Forming Ampoule",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, fuga nostrum! Ipsum reiciendis saepe accusantium?",
      imageUrl: "/home/products/desktop/vivid_red_forming_ampoule.jpg",
      priceBefore: "Rp. 53.700",
      price: "Rp 49.900",
      discount: "18%",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className={styles.bestProducts}>
      <div className={styles.bestProductsTitleContainer}>
        <b>Best Products</b>
        <span>Introducting Ravid&apos;s best products</span>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className={styles.bestProductsContent}>
          {bestProducts.map((e, i) => (
            <div key={i} className={styles.bestProductsContentItem}>
              <div className={styles.bestProductsContentItemImageContainer}>
                <div
                  className={styles.bestProductsContentItemImage}
                  style={{ backgroundImage: `url(${e.imageUrl})` }}></div>
              </div>
              <span className={styles.bestProductsContentItemName}>
                {e.name}
              </span>
              <span className={styles.bestProductsContentItemDesc}>
                {e.desc}
              </span>
              <div className={styles.bestProductsContentItemOffer}>
                <span
                  className={styles.bestProductsContentItemOfferPriceBefore}>
                  {e.priceBefore}
                </span>
              </div>
              <div className={styles.bestProductsContentItemOffer}>
                <span className={styles.bestProductsContentItemOfferDiscount}>
                  {e.discount}
                </span>
                <span className={styles.bestProductsContentItemOfferPrice}>
                  {e.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function BrandStory() {
  return (
    <div className={styles.brandStory}>
      <b>Your Lavid: Color your skin with vivid care.</b>
      <span>Setting a new standard for balanced daily skincare.</span>
      <button>Brand Story</button>
    </div>
  );
}

function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.infoContainer}>
        <div className={styles.businessInfo}>
          <b>La.vid Business Information</b>
          <span>
            Company name: The ST Global Co., Ltd. | Representative: Kim Min-jae
          </span>
          <span>
            Address: 2355, 2nd floor, Amojeononhyeon Building, 317 Bongeunsa-ro,
            Gangnam-gu, Seoul
          </span>
          <span>Business Registration number: 449-87-02280</span>
          <span>
            Mail order sales business report: 2024-Seoul gangnam-07113 [Check
            business information]
          </span>
          <span>
            Personal Information Protection Manager: Dayoung Ahn
            (anda0thest.co.kr)
          </span>
          <span>
            For business partnership inquiries: | biz_lavid@thest.co.kr
          </span>
          <span>La.vid official domain: | lalavivid.com / ravid.com</span>
        </div>
        <div className={styles.customerInfo}>
          <b>Customer Service Center</b>
          <b style={{ fontSize: "1.1rem" }}>1:1 Inquiry</b>
          <span>cs_lavid@thest.co.kr</span>
          <span>02-597-6268</span>
          <span>Weekdays 11:00 ~ 17:00</span>
          <span>Closed on weekends and holidays</span>
          <span>We do not provide phone consultations</span>
          <span>For inquiries, please use the 1:1 inquiry menu.</span>
        </div>
        <div className={styles.depositInfo}>
          <b>Deposit acoount information</b>
          <span>Hana Bank 365-910036-28204</span>
          <span>Depositor: The St Global Co., Ltd.</span>
          <div>
            Please indicate the name of the person ordering when making the
            deposit.
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.inner}>
        <img
          src="/logo/logo.svg"
          alt="logo"
          style={{ height: "24px", width: "auto", display: "block" }}
        />
        <Group
          gap={0}
          className={styles.links}
          justify="flex-end"
          wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.home}>
      <HomeCarousel />
      <BestProducts />
      <BrandStory />
      <Info />
      <Footer />
    </div>
  );
}
