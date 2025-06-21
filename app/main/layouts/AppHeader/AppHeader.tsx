/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./AppHeader.module.css";

const { Header } = Layout;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  // Responsiveness: detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { key: "story", label: "LA.STORY" },
    { key: "skincare", label: "Skincare" },
    { key: "order", label: "Order" },
    { key: "event", label: "Event" },
    { key: "review", label: "Customer Reviews" },
    { key: "service", label: "Customer Service Center" },
    { key: "news", label: "LA.NEWS" },
  ];

  return (
    <Header className={styles.header}>
      <div className={styles.headerInner}>
        <img src="/logo/logo.svg" alt="logo" className={styles.logo} />
        {isMobile ? (
          <>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={showDrawer}
              className={styles.menuButton}
            />
            <Drawer
              title="Menu"
              placement="right"
              onClose={onClose}
              open={visible}>
              <Menu mode="vertical" items={menuItems} onClick={onClose} />
            </Drawer>
          </>
        ) : (
          <Menu
            mode="horizontal"
            items={menuItems}
            className={styles.desktopMenu}
          />
        )}
      </div>
    </Header>
  );
};

export default AppHeader;
