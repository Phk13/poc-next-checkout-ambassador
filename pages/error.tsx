import React from 'react'
import Layout from '../components/Layout'

export default function error() {
    return (
        <Layout>
            <div className="py-5 text-center">
                <h2>Error</h2>
                <p className="lead">Could not process payment.</p>
            </div>
        </Layout>
    )
}
