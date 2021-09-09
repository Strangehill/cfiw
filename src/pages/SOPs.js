import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

// import styled from "styled-components"

import "./contact.css"

const SOPsPage = () => (
    <Layout>
        <Seo title="SOPs" />
        <h1> SOPs </h1>
        <h2> logged in with your github account </h2>
        <p>
            Make an edit on the right file on github.
            You can save your changes at the bottom of the page, either for immediate publication or for review by someone else on the team.
            If you're sure of what you're doing select 'Commit directly to the main branch'.
            If you'd like to request a review of your changes before they're approved and automatically published, select 'Create a new branch for this commit and start a pull request.'
            Either way, select 'Commit changes' when you're done.
        </p>
        <dl>
            <dt> Update NewCases </dt>
            <dd>
                <a href="https://github.com/Covid-Taichung/cfiw/edit/main/index.html">Edit the Index page</a>
            </dd>
            <dt> Update Stats </dt>
            <dd>
                <a href="https://github.com/Covid-Taichung/cfiw/edit/main/stats.html">
                    Edit Stats page
                </a>
            </dd>
            <dt> Update FAQs </dt>
            <dd>
                <a href="https://github.com/Covid-Taichung/cfiw/edit/main/faq/faqDataJSON.json">
                    Edit array of questions and answers
                </a>
            </dd>
        </dl>
        <p></p>
    </Layout>

)

export default SOPsPage