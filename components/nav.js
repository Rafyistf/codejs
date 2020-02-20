import React from 'react'
import Head from 'next/head'
import Navigation from './navigation'
const Nav = ({childern, title}) => (
  <div className="body">
    <Head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta http-equiv="x-ua-compatible" content="ie=edge"/>
      <title>{title}</title>

      <link rel="icon" href="/iconjs.png"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
      <link rel="stylesheet" href="../css/bootstrap.min.css"/>
      <link href="../css/addons/datatables.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="../css/mdb.min.css"/>
      <link rel="stylesheet" href="../css/style.css"/>

      {/* <script type="text/javascript" async src="../js/jquery.min.js"></script>
      <script type="text/javascript" async src="../js/popper.min.js"></script>
      <script type="text/javascript" async src="../js/bootstrap.min.js"></script>
      <script type="text/javascript" async src="../js/mdb.min.js"></script> */}
    </Head>
      <Navigation/>
      {childern}
  </div>
)
export default Nav