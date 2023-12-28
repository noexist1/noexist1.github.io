import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./api.css";


function API() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className="container">
            Hello API
        </div>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
            <div style={{height: "100vh", width: "100vw"}}>
                <SwaggerUI url="http://localhost:8000/openapi.json"/>

            </div>
        </Layout>
    )
}