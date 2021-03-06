import { Form, Input } from "antd";
import React from "react";

export default function Title() {
    return (
        <React.Fragment>
            <h1>Ma super recette :</h1>
            <Form.Item
                name="titre"
                rules={[
                    {
                        required: true,
                        message: "Requis",
                    },
                ]}>
                <Input style={styles.input} placeholder="Titre de ma recette" />
            </Form.Item>
        </React.Fragment>
    );
}

const styles = {
    input: {
        borderRadius: 5,
        width: "100%",
        maxWidth: "100%",
        height: 60,
        fontSize: 24,
    },
};
