import React from "react";

export default function Header() {
    return (
        <header style={styles.header}>
            <img src={"https://logo-marque.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"} alt="garlic icon" style={styles.icon} />
            <h1 style={styles.title}>Cantina</h1>
        </header>
    );
}

const styles = {
    header: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottom: "1px solid silver",
    },
    icon: {
        width: 100,
        height: 70,
        objectFit: "contain",
        margin: "0 20px",
    },
    title: {
        fontSize: 32,
        color: "var(--primary-bg-color)",
        margin: 0,
        padding: 0,
    },
};
