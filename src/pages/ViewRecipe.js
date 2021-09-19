import { Col, Row } from "antd";
import React from "react";
import ReturnPage from "../components/_common/ReturnPage";
import "../css/recipe.css";

export default function AddRecipe() {
    const id = window.location.href.split("/")[4];

    return (
        <Row>
            <Col span={20} offset={2} style={styles.row}>
                <div></div>
                <ReturnPage />
                <h1 style={styles.title}>{id ? "Modifier" : "Ajouter"} une recette</h1>
            </Col>
            <Col span={16} offset={4}></Col>
        </Row>
    );
}

const styles = {
    row: {
        display: "flex",
        alignItems: "center",
        marginTop: 50,
    },
    title: {
        margin: 0,
        padding: 0,
        flex: 1,
        textAlign: "center",
        fontSize: 42,
        color: "var(--primary-bg-color)",
        fontWeight: "bold",
    },
};
