/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import constants from '../constants';

export default function success() {
    const router = useRouter();
    const { source } = router.query;

    useEffect(() => {
        if (source !== undefined) {
            (
                async () => {
                    await axios.post(`${constants.endpoint}/orders/confirm`, {
                        source
                    })
                }
            )();
        }
    }, [source])

    return (
        <Layout>
            <div className="py-5 text-center">
                <h2>Success</h2>
                <p className="lead"> You purchase has been completed!</p>
            </div>
        </Layout>
    )
}
