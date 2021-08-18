import Head from 'next/head';
import Cabecalho from "../src/components/commons/Cabecalho";
import Capa from "../src/components/commons/Capa";
import Footer from "../src/components/commons/Footer";
import WrapperProjetos from "../src/components/commons/WrapperProjetos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Bot</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;600&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Cabecalho/>
      <Capa/>
      <WrapperProjetos/>
      <Footer/>
    </>
  )
}
