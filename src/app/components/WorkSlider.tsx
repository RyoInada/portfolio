"use client";

import { useEffect } from "react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import ap from "../images/ap.webp";
import az from "../images/az.webp";
// import ci from "../images/ci.webp";
import lt from "../images/lt.webp";
import mb from "../images/mb.webp";
import fy from "../images/fy.webp";
// import pg from "../images/pg.webp";
// import pv from "../images/pv.webp";
import tc from "../images/tc.webp";
import ye from "../images/ye.webp";
import zk from "../images/zk.webp";
import zs from "../images/zs.webp";
import WorkDetail from "./WorkDetail";
import dynamic from "next/dynamic";

const Work = dynamic(() => import("./Work"), {
  ssr: false,
});

export default function BasicSlider() {
  useEffect(() => {
    document.querySelector(".main")?.classList.remove("is-loading");
  });

  const slideSettings = {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <Swiper
      modules={[Navigation, Scrollbar]}
      breakpoints={slideSettings}
      slidesPerView={"auto"}
      centeredSlides={false}
      loop={false}
      speed={750}
      navigation
      scrollbar={{ draggable: true }}
      className="work-slider"
    >
      <SwiperSlide key={1}>
        <Work id="lofty" title="Lofty" img={lt}>
          <WorkDetail
            title="Lofty Online Shop"
            img={lt}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="サイト全体とLPの構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。アニメーションやデザインが凝っていた点と、機能的なカスタマイズを多く入れた点で成長につながりました。(同梱制御・商品比較セクション・店舗検索・枕の高さ診断モーダルetc...)"
            url="https://loftyonlineshop.myshopify.com/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      <SwiperSlide key={2}>
        <Work id="moltonbrown" title="moltonbrown" img={mb}>
          <WorkDetail
            title="MOLTON BRWON"
            img={mb}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="サイト全体とLPの構築を担当しました。また、公開後カスタマイズも多数行いました。Shopifyの有料テーマimpulseをベースに構築。デザインが凝っていた点と、数え切れないほどの機能的なカスタマイズを施しました。中でもカートでのメッセージカード機能、マイページカスタマイズ、カート内のオプション追加機能などが多数の制御が必要で勉強になりました。"
            url="https://www.moltonbrown.co.jp/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      <SwiperSlide key={3}>
        <Work id="azuma" title="AZUMA" img={az}>
          <WorkDetail
            title="AZUMA"
            img={az}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="デザイン・サイト全体の構築・ディレクションの全てを担当しました。Shopifyの無料テーマDawnをベースに構築。アニメーションによる驚きや購入動線の単純さなど、クライアントのご要望をデザインに落とし込み、自分で実装した点で大きく成長できました。"
            url="https://www.azumabag.jp/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      <SwiperSlide key={4}>
        <Work id="foryou" title="4YOU" img={fy}>
          <WorkDetail
            title="4YOU"
            img={fy}
            pf="なし(apache server)"
            lang="HTML,CSS,Javascript"
            text="デザイン・サイト全体の構築・ディレクションの全てを担当しました。lolipopサーバー上にファイルを設置して作成しました。言語セレクターとgsapによるアニメーションを工夫しました。"
            url="https://www.4you-lab.jp/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      <SwiperSlide key={5}>
        <Work id="youen" title="You.en" img={ye}>
          <WorkDetail
            title="You.en"
            img={ye}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="サイト全体の構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。翻訳アプリ・通貨変換アプリの使用を把握し挙動を制御するのが難しかったです。"
            url="https://youen-jp.com/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      <SwiperSlide key={6}>
        <Work id="zaisu" title="zaisu seikatsu" img={zs}>
          <WorkDetail
            title="座椅子生活"
            img={zs}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="サイト全体とLPの構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。アニメーションやデザインが凝っていた点と、機能的なカスタマイズを多く入れた点で成長につながりました。(同梱制御・動的な発想日表示・商品スペックの記載etc...)"
            url="https://zaisu-seikatsu.com/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      <SwiperSlide key={7}>
        <Work id="timelsscomfort" title="timeless comfort" img={tc}>
          <WorkDetail
            title="TIMELESS COMFORT"
            img={tc}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="サイト全体の構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。初めて業務レベルでshopifyに携わった思い出深い案件です。タブ切り替えの商品一覧セクションや商品詳細ページのメインスライダーのカスタマイズなどを行なっています。"
            url="https://timelesscomfort.com/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      <SwiperSlide key={8}>
        <Work id="zokujin" title="zokujin" img={zk}>
          <WorkDetail
            title="Zokujin"
            img={zk}
            pf="Wordpress"
            lang="HTML,CSS,Javascript,PHP"
            text="「Zokujinコラム」ページと「お役立ち資料ページ」の作成を担当しました。Wordpress側でカスタム投稿を用意し、そこにアップロードした資料をフォーム情報を正しく入力した顧客のみダウンロードできるようにする制御に苦労しました。"
            url="https://zokujin.com/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
    </Swiper>
  );
}
